"use client"

import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import Toggle from "./Toggle"

const links = [
  {
    id: 1,
    title: "Home",
    url: "/"
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio"
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog"
  },
  {
    id: 4,
    title: "About",
    url: "/about"
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact"
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard"
  },
]


export default function Navbar() {

  //ذخیره کردن سشن کاربر
  const session = useSession();


  return (
    <>
      <div className="flex justify-between py-3">
        <div className='md:inline hidden'>
          <Link href={"/"}>
            Pouria Blog
          </Link>
        </div>
        <div>
          <Toggle />
          {links.map((item) => {
            return (
              <Link href={item.url} className="md:mx-4 mx-1" key={item.id} >
                {item.title}
              </Link>
            )
          })}

          {
            //اگر استاتوس سشن احراز شده بود این رو نشون بده
            session.status === "authenticated" && (
              <button onClick={signOut} className="">
                Loguot
              </button>
            )}
        </div>
      </div>
    </>
  )
}