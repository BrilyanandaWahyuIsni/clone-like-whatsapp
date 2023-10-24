import Link from 'next/link'
import React from 'react'
import AvatarChat from '../../component/avatarchat'
import ChatBoxComponent from '../../component/chatbox'
import MenuUtamaKomponen from '../../component/menuutama'

export default function HomePage() {
  return (
    <ul className=" w-[40%] h-auto pb-52 overflow-y-scroll scrollbar-none">
      {/* side bar aplikasi */}
      {/* sidebar menu menu */}
      <MenuUtamaKomponen />
      {/* Sidebar content here */}
      {
        Array(10).fill(null).map((_, index) => (
          <li className='w-full mt-2 pr-2'><AvatarChat /></li>
        ))
      }
    </ul>
  )
}
