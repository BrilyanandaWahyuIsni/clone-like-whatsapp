'use client'
import React, { useState } from 'react'
import { BiSearch, BiSolidMicrophone } from 'react-icons/bi'
import { BsFillEmojiLaughingFill, BsFillPersonFill, BsThreeDotsVertical } from 'react-icons/bs'
import { GrAdd } from 'react-icons/gr'
import { HiCamera, HiDocumentText } from 'react-icons/hi2'
import { AiOutlineClose } from 'react-icons/ai'
import { MdAddReaction } from 'react-icons/md'
import ChatBubleKomponen from './chatbuble'
import { FaImages, FaSquarePollHorizontal } from 'react-icons/fa6'
import data from '@emoji-mart/data'
import EmojiPicker from '@emoji-mart/react'
import InputPesanKomponen from './inputpesan'

export default function ChatBoxComponent() {
  const [showMenuSearching, setShowMenuSearching] = useState<boolean>(false)

  // fungsi untuk menampilkan menu searching
  function handleShowMenuSearching(): void {
    setShowMenuSearching(true)
  }

  // fungsi untuk menghilangkan menu searching
  function handleHideMenuSearching(): void {
    setShowMenuSearching(false)
  }

  return (

    <div className='w-full flex h-screen'>
      {/* bagian utama */}
      <div className='h-screen w-full flex flex-col justify-between box-border'>

        {/* bagian kepala chat */}
        <div className='h-16 bg-slate-700  flex items-center justify-between p-2'>

          {/* bagian avatar, nama, dan status */}
          <div className='flex'>
            {/* avatar atau foto profil */}
            <div className="avatar placeholder  online">
              <div className="w-12 bg-slate-300 rounded-full">
                {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                <span>K</span>
              </div>
            </div>
            {/* status aktif */}
            <div className='pl-3'>
              <h2 className='card-title'>Nama</h2>
              <h2 className='text-sm'>online</h2>
            </div>
          </div>

          <div className='flex'>
            {/* pencarian */}
            <button onClick={handleShowMenuSearching} className=" h-full  w-12 flex justify-center items-center ">
              <BiSearch size={23} />
            </button>
            {/* menu lainnya */}
            <li className="dropdown dropdown-end p-0 m-0 ">
              <div tabIndex={0} className='focus:bg-transparent hover:bg-transparent'>
                <BsThreeDotsVertical size={23} color='red' />
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1000] menu p-2 shadow bg-slate-900 rounded-box w-52">
                <li><a>Grub Baru</a></li>
                <li><a>Komonitas Baru Baru</a></li>
                <li><a>Pesan Berbintan</a></li>
                <li><a>Pilih Chat</a></li>
                <li><a>Pengaturan</a></li>
                <li><a>Keluar</a></li>
              </ul>
            </li>

          </div>
        </div>

        {/* bagian isi chat */}
        <div className='h-full bg-orange-500 overflow-y-scroll p-4'>
          {Array(100).fill(null).map((_, index) => {
            if (index > 93) {
              return (
                <ChatBubleKomponen pesanAnda={true} />
              )
            } else {
              return <ChatBubleKomponen pesanAnda={false} />
            }
          })}
        </div>

        {/* bagian input pesan chat */}
        <InputPesanKomponen />
      </div>


      {/* bagian menu searching pesan */}
      {showMenuSearching ? (
        <div className='h-screen w-[70%] flex flex-col justify-between box-border bg-orange-50'>
          {/* kepala pada menu searching pesan */}
          <div className='h-16 bg-slate-900 w-full flex items-center pl-2'>
            <button onClick={handleHideMenuSearching}>
              <AiOutlineClose size={25} />
            </button>
            <h2 className='ml-9'>
              Cari Pesan
            </h2>
          </div>
          {/* text input menu searching */}
        </div>
      ) : null}
    </div>
  )
}
