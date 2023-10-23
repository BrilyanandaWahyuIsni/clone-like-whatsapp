import Link from 'next/link'
import React from 'react'
import { BiCommentAdd, BiSearch } from 'react-icons/bi'
import { FaPeopleGroup } from 'react-icons/fa6'
import { BsFillDiscFill, BsThreeDotsVertical, BsChatDotsFill } from 'react-icons/bs'
import AvatarChat from '../../component/avatarchat'
import ChatBoxComponent from '../../component/chatbox'
import MenuUtamaKomponen from '../../component/menuutama'

export default function HomePage() {
  return (
    <div className="flex w-full h-screen">


      {/* side bar aplikasi */}
      <ul className=" w-[40%] h-auto pb-52 overflow-y-scroll scrollbar-none">
        {/* sidebar menu menu */}
        <MenuUtamaKomponen />

        {/* Sidebar content here */}
        {
          Array(10).fill(null).map((_, index) => (
            <li className='w-full mt-2 pr-2'><AvatarChat /></li>
          ))
        }

      </ul>

      {/* Page content here */}
      <ChatBoxComponent />
    </div>
  )
}
