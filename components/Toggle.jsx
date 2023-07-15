"use client"

import { ThemeContext } from "../context/ThemeContext"
import { useContext } from "react"



export default function Toggle() {

  //استفاده از مقادیر کانتکست مورد نظر
  const { mode, changeTheme } = useContext(ThemeContext);

  return (
    <>
      <span className="hidden md:inline cursor-pointer border border-gray-600 rounded-full relative" onClick={changeTheme}>
        <span>
          🌙
        </span>
        <span>
          🔆
        </span>
        <span className={`bg-green-500 w-[19px] h-[19px] inline-block absolute bottom-[0px] rounded-full ${mode === 'dark' ? 'left-[2px]' : 'right-[2px]'}`} >
        </span>
      </span>
    </>
  )
}