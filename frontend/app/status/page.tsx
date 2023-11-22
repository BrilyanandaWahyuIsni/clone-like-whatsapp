"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { FaVolleyballBall } from "react-icons/fa"
import CardStatusKomponen from '../component/cardStatus'

import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function HalamanLayout() {

  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()

  axios.get('http://localhost:3210/user/auth', { withCredentials: true })
    .then(() => setLoading(false))
    .catch(() => router.replace("/"))

  const [showSidePageMenu, setShowSidePageMenu] = useState<boolean>(false)


  // handle side
  function handleSidePage() {
    setShowSidePageMenu(true)
  }

  // hide side page
  function handleHideSidePage() {
    setShowSidePageMenu(false)
  }

  return (
    <>
      {
        loading
          ? <div className="flex justify-center items-center min-h-screen p-5"><span className="loading loading-bars loading-lg"></span></div>
          : (
            <div className='w-screen h-screen relative'>
              <div className="flex flex-row w-full h-screen relative overflow-hidden">
                {
                  !showSidePageMenu &&
                  <Link href={"/home"} className='absolute top-3 right-3 btn z-50 '>home</Link>
                }
                {/* bagian dari side konten */}
                <div className='lg:w-[30%] w-full bg-orange-800'>

                  <button onClick={handleSidePage} className='h-[20%] w-full'>
                    {/* status bagian anda */}
                    <CardStatusKomponen img='' nama_pengguna='Status Anda' ket_lainnya='Tidak ada pembaruan' />

                    {/* lainnya */}
                    <div className='border-b-2 border-slate-800 mt-2'></div>
                    <h2 className='text-xl text-slate-800 mb-2 ml-5 text-left'>Terbaru</h2>
                    <div className='border-b-2 border-slate-800 mt-2'></div>
                  </button>

                  {/* update terbaru */}
                  <div className='overflow-y-scroll h-[80%] w-full scrollbar-none'>
                    {Array(10).fill(0).map((_, indec) => (
                      <button key={indec} onClick={handleSidePage}>
                        <CardStatusKomponen img='' nama_pengguna='Brilyananda' ket_lainnya='kemarin 12 Oktober 2023' />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Page content here */}
                <div className={`lg:w-[70%] bg-slate-600 lg:flex ${showSidePageMenu ? 'absolute top-0 right-0 h-screen w-full' : 'relative hidden'}`}>
                  <SideContent />
                  {/* tombol kembali ke halaman home */}
                  <button onClick={handleHideSidePage} className='btn btn-circle text-xl absolute top-2 right-1 lg:hidden block'>x</button>
                </div>
              </div>
            </div>
          )
      }
    </>
  )
}


function SideContent() {
  return (
    <div className='w-full h-1/2 flex flex-col justify-between items-center mt-16'>
      <FaVolleyballBall size={120} />
      <h2 className='p-3 text-center'>Klik pada kontak untuk melihat pembaruan status anda</h2>
    </div>
  )
}