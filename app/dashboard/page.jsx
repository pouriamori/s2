"use client"

import useSWR from 'swr'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


//متا دیتای صفحه 
// export const metadata = {
//   title: 'Dashboard',
//   description: 'My Dashboard Page!',
// }



export default function Page() {

  const session = useSession();
  const router = useRouter();

  //تعریف تابع فچر
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  //فچ کردن سمت کلاینت
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );


  //اگر استاتوس سشن ما لودینگ بود این رو نشون بده
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  //اگر استاتوس سشن ما احراز نشده بود بفرستش به صفحه لاگین
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  //تابع سابمیت فرم
  const handleSubmit = async (e) => {

    //چلوگیری از رفرش شدن با سابمیت
    e.preventDefault();

    //ذخیره مقادیر اینپوت ها
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    //فچ کردن ای پی ای پست ها با ارسال متد پست
    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();

      //حذف مقادیر قبلی اینپوت
      e.target.reset()
    } catch (err) {
      console.log(err);
    }
  };


  //تابع دکمه حذف پست
  const handleDelete = async (id) => {
    try {

      //پست مورد نظر رو پیدا کن و حذف کن با متد دلیت
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };


  //اگر استاتوس سشن ما احراز شده بود این رو نشون بده
  if (session.status === "authenticated") {
    return (
      <div className="">
        <div className="">
          {isLoading
            ? "loading"
            : data?.map((post) => (
              <div className="" key={post._id}>
                <div className="">
                  {/* <Image src={post.img} alt="" width={200} height={100} /> */}
                </div>
                <h2 className="">{post.title}</h2>
                <span
                  className=""
                  onClick={() => handleDelete(post._id)}
                >
                  X
                </span>
              </div>
            ))}
        </div>
        <form className="" onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className="" />
          <input type="text" placeholder="Desc" className="" />
          <input type="text" placeholder="Image" className="" />
          <textarea
            placeholder="Content"
            className=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="">Send</button>
        </form>
      </div>
    );
  }
};

