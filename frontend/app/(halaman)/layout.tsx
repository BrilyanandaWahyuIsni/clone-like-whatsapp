"use client"
import React, { useContext } from 'react'
import ChatBoxComponent from '../component/chatbox'
import { ValueContext, ValueProvider } from '../context/getSide'

export default function HalamanLayout({ children }: { children: React.ReactNode }) {

  // import context from getSide => ValueProvider
  const { nilaiSide } = useContext(ValueContext)

  return (
    <div className='w-screen h-screen overflow-hidden flex '>
      <div className={`lg:w-[30%] h-screen overflow-y-scroll scrollbar-none w-full`}>
        {children}
      </div>
      {/* Page content here */}
      <div className={`lg:flex h-screen lg:w-[70%] w-full lg:relative absolute z-40 ${nilaiSide ? "top-0 right-0" : "top-0 right-[-100%]"}`}>
        <ChatBoxComponent />
      </div>
    </div>
  )
}
