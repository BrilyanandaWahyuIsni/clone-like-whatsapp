import React from "react";

export default function SignLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen p-5">
        {children}
      </div>
    </>
  )
}