"use client"
import localFont from "next/font/local";
import "./globals.css";
import { createContext, useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const LoginContext = createContext()

export default function RootLayout({ children }) {
  const [isLogin, setIsLogin] = useState(true)
  function handleChange() {
    setIsLogin(toggle => !toggle)
  }
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LoginContext.Provider value={{isLogin, handleChange}}>
        {children}
        </LoginContext.Provider>
      </body>
    </html>
  );
}
