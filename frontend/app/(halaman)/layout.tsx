import React from 'react'
import ChatBoxComponent from '../component/chatbox'

export default function HalamanLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-screen min-h-screen'>
      <div className="flex w-full h-screen">
        {children}
        {/* Page content here */}
        <ChatBoxComponent />
      </div>
    </div>
  )
}
