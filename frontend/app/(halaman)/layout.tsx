import React from 'react'
import ChatBoxComponent from '../component/chatbox'

export default function HalamanLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-screen h-screen overflow-hidden flex '>
      {children}
      {/* Page content here */}
      <ChatBoxComponent />
    </div>
  )
}
