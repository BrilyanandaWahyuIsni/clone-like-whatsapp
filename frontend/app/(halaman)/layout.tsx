import React from 'react'
import ChatBoxComponent from '../component/chatbox'

export default function HalamanLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-screen h-screen overflow-hidden flex '>
      <div className='lg:w-[30%] w-full h-screen overflow-y-scroll scrollbar-none'>
        {children}
      </div>
      {/* Page content here */}
      <div className='lg:flex h-screen w-[70%] hidden'>
        <ChatBoxComponent />
      </div>
    </div>
  )
}
