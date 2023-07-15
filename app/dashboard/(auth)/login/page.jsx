"use client";
import React, { useEffect, useState } from "react";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";



const Login = () => {

  //تعریف سشن و روتر
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);


  //اگر استاتوس سشن ما لودینگ بود این رو نشون بده
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }


  //اگر استاتوس سشن ما احراز شده بود بفرستش داشبورد
  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }



  //تابع سابمبت فرم
  const handleSubmit = (e) => {

    //جلوگیری از رفرش شدن صفحه
    e.preventDefault();

    //ذخیره مقادیر اینپوت ها
    const email = e.target[0].value;
    const password = e.target[1].value;


    //ساین این کردن
    signIn("credentials", {
      email,
      password,
    });
  };


  return (
    <>
      <div className="row">
        <div className="col-md-3">

        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}
            className="row">
            <input
              type="text"
              placeholder="Email"
              required
              className="my-2 p-3 rounded bg-transparent border-white border"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="my-2 p-3 rounded bg-transparent border-white border"
            />
            <button className="bg-green-500 text-white p-3 my-2 rounded "
            >
              Login
            </button>
          </form>
          <div className="row">
            <Link href="/dashboard/register" className="text-center mt-3 bg-blue-400 rounded text-white p-3">
              Register
            </Link>
          </div>
        </div>
        <div className="col-md-3">

        </div>
      </div>
    </>
  );
};

export default Login;
