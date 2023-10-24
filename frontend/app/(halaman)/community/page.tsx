"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { IoIosPeople } from 'react-icons/io'

export default function CommonityPage() {

  // router dari back to home
  const router = useRouter()

  // fungsi untuk kembali ke halaman home
  function handleBtnBackToHome() {
    router.push("/home")
  }

  return (
    <div className="w-[40%] h-auto pb- overflow-y-scroll scrollbar-none">

      {/* button kembali */}
      <div className='flex items-center p-10 pl-4 bg-orange-900'>
        {/* icon kembali */}
        <button className='btn btn-ghost rounded-full p-2 ' onClick={handleBtnBackToHome}>
          <AiOutlineArrowLeft size={30} />
        </button>
        {/* keterangan */}
        <h2 className='card-title ml-3'>Komonitas</h2>
      </div>

      {/* bagian menambahkan grub baru */}
      <Link href={''} className='btn h-auto flex items-center justify-start w-full p-4 rounded-none'>
        <div className='flex items-center p-2 bg-green-600 rounded-l-[15px] rounded-r-[15px]'>
          <IoIosPeople size={35} color='white' />
        </div>
        <h1>Komunitas Baru</h1>
      </Link>

      {/* bagian menambahkan grub baru */}
      <Link href={''} className='btn h-auto flex items-center justify-start w-full p-4 mt-5 rounded-none'>
        <div className='flex items-center p-2  bg-gray-600 rounded-l-[15px] rounded-r-[15px]'>
          <IoIosPeople size={35} color='white' />
        </div>
        <h1>Nama Komunitas</h1>
      </Link>


    </div>
  )
}
