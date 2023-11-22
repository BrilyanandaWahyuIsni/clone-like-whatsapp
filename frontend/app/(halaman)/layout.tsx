"use client"
import React, { useContext, useState } from 'react'
import ChatBoxComponent from '../component/chatbox'
import { ValueContext } from '../context/getSide'
import axios from 'axios'
import { useRouter } from 'next/navigation'


export default function HalamanLayout({ children }: { children: React.ReactNode }) {

  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()

  axios.get('http://localhost:3210/user/auth', { withCredentials: true })
    .then(() => setLoading(false))
    .catch(() => router.replace("/"))

  // import context from getSide => ValueProvider
  const nilaiSide = useContext(ValueContext)?.nilaiSide

  return (
    <>
      {
        loading
          ? <div className="flex justify-center items-center min-h-screen p-5"><span className="loading loading-bars loading-lg"></span></div>
          :
          (<div className='w-screen h-screen overflow-hidden lg:flex scrollbar-none relative'>
            <div className='lg:w-[35%] md:w-full h-screen overflow-y-scroll overflow-hidden scrollbar-none w-full'>
              {children}
            </div>
            {/* Page content here */}
            <div className={`lg:flex  h-screen lg:w-[65%]  w-full lg:relative absolute z-40 ${nilaiSide ? "top-0 right-0" : "top-0 right-[-100%]"}`}>
              <ChatBoxComponent />
            </div>
          </div>)
      }
    </>
  )
}
