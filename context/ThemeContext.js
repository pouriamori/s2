"use client"

import { createContext, useState } from "react"


// هنگام استفاده از کانتکست
export const ThemeContext = createContext();



//کامپوننت در برگیرنده ی ما
export const ThemeProvider = ({ children }) => {

  //استیت مود
  const [mode, setMode] = useState("dark");

  //تغییر دهنده ی استیت مود
  const changeTheme = () => {
    setMode((prev) => prev === "dark" ? "light" : "dark");
  }


  //تمام چیلدرن ها توانایی دسترسی به این ولیو ها را خواهند داشت
  return (
    <ThemeContext.Provider value={{ changeTheme, mode }}>
      <div className={`theme ${mode}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}