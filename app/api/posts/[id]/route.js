import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";


//متد گت
export const GET = async (request, { params }) => {

  //استخراج ایدی از پارامس
  const { id } = params;


  try {

    await connect();

    //پیدا کردن پست مورد نظر با مدل پست
    const post = await Post.findById(id);

    //ریترن رسپانس
    return new NextResponse(JSON.stringify(post), { status: 200 });

  } catch (err) {

    return new NextResponse("Database Error", { status: 500 });

  }
};




//متد دلت
export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    await Post.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
