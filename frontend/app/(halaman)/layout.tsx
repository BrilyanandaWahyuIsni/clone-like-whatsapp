import React from 'react'

export default function HalamanLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-screen min-h-screen'>
      <div>{children}</div>
    </div>
  )
}
