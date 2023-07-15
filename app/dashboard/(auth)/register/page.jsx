"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {

  //استیت ذخیره اررور به وجود آمده
  const [error, setError] = useState(null);

  //متند روتر که روتر به آدرس مورد نظر تغییر میده
  const router = useRouter();


  //---------------------تابع سابمیت فرم---------------
  const handleSubmit = async (e) => {

    //جلوگیری از رفرش شدن صفحه
    e.preventDefault();

    //ذخیره مقادیر اینپوت
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;


    try {

      //فراخوانی ای پی ای رجیستر کردن که یک رسپانس برمیگردونه
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      //اگر رسپانس ما پس از فچ 201 بود این کار رو بکن
      res.status === 201 && router.push("/dashboard/login?success=Account has been created");

    } catch (err) {
      //ذخیره کردن اررور در استیت مورد نظر
      setError(err);
      console.log(err);
    }

  };



  return (
    <div className="row">
      <div className="col-md-3">

      </div>
      <div className="col-md-6">
        <form onSubmit={handleSubmit}
          className="row">
          <input
            type="text"
            placeholder="Username"
            required
            className="my-2 p-3 rounded bg-transparent border-white border"
          />
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
          <button className="bg-green-500 text-white p-3 my-2 rounded ">
            Register
          </button>
        </form>
        <Link href="/dashboard/login" className="text-red-200">
          Login with an existing account
        </Link>
      </div>
      <div className="col-md-3">

      </div>
    </div>
  );
};

export default Register;
