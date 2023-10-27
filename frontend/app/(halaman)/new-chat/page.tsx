'use client'
import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import CardStatusKomponen from '../../component/cardStatus'
import { AiOutlineSearch } from 'react-icons/ai'
import { useRouter } from 'next/navigation'

export default function NewChatPage() {
  //navigatio router
  const router = useRouter()

  // kembali ke menu utama / home
  function handleToHome() {
    router.push('home')
  }


  return (
    <div className=" w-[40%] h-auto pb-52 overflow-y-scroll scrollbar-none">
      {/* header */}
      <div className='h-[150px] box-border flex flex-col items-end sticky top-0 z-20 mb-3'>
        <div className='bg-orange-400 p-5 pb-1 w-full flex flex-col justify-end h-full'>
          <div className='flex items-center '>
            {/* button kembali ke home */}
            <button onClick={handleToHome} className='mr-5'><BsArrowLeft size={30} /></button>
            <div className='text-lg'>Chat Baru</div>
          </div>
        </div>
        <div className='w-full bg-orange-950 p-2'>
          <div className='join  flex justify-center '>
            <button className='join-item rounded-r-full bg-slate-800 flex justify-center items-center w-[30px]'>
              <AiOutlineSearch size={20} />
            </button>
            <input type="text" placeholder="Type here" className=" join-item input input-bordered input-sm w-full max-w-xs" />
          </div>
        </div>
      </div>

      {/* side content */}
      <div className='h-full w-full'>
        {Array(10).fill(0).map((_, index) => (
          <button className='w-full'>
            <CardStatusKomponen img='' nama_pengguna='Babda' ket_lainnya='dasdas' key={""} />
          </button>
        ))}
      </div>

    </div>
  )
}
