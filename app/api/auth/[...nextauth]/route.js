import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [



    //تعریف کردنشیال شخصی برای حال لاگین دستی
    CredentialsProvider({

      //آیدی که در فراخوانی تابع ساین این ازش استفاده میکینم
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {

        //اتصال به مونگو دی بی
        await connect();


        //پیدا کردن یوزر از دیتابیس با ایمیل وارد شده
        try {
          const user = await User.findOne({
            email: credentials.email,
          });


          if (user) {

            //مقایسه ی پسورد ارسال شده و پسورد موجود در دیتابیس
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );


            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong Credentials!");
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
  ],

  //اگر ارور داد بیاد به این صفحه
  pages: {
    error: "/dashboard/login",
  },

});

export { handler as GET, handler as POST };
