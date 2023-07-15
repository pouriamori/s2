import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";



//متد پست روت منورد نظر که رجیستر هستش
export const POST = async (request) => {

  //بیرون کشیدن اطلاعات مورد نظر از درخواست ارسال شده به ای پی آی
  const { name, email, password } = await request.json();

  //کانکت به مونگو دی بی
  await connect();

  //هش کردن پسورد مورد نظر
  const hashedPassword = await bcrypt.hash(password, 5);

  //ایجاد یوزر با مدل یوزر در دیتابیس مونگو دی بی
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  //
  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
