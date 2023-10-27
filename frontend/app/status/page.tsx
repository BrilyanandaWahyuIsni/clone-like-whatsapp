import React from 'react'
import Link from 'next/link'
import { FaVolleyballBall } from "react-icons/fa"
import CardStatusKomponen from '../component/cardStatus'

export default function HalamanLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-screen min-h-screen'>
      <div className="flex w-full h-screen relative overflow-hidden">
        {/* bagian dari side konten */}
        <div className='w-[40%] bg-orange-800'>

          <div className='h-[20%]'>
            {/* status bagian anda */}
            <CardStatusKomponen img='' nama_pengguna='Status Anda' ket_lainnya='Tidak ada pembaruan' />

            {/* lainnya */}
            <div className='border-b-2 border-slate-800 mt-2'></div>
            <h2 className='text-xl text-slate-800 mb-2 ml-5'>Terbaru</h2>
          </div>

          {/* update terbaru */}
          <div className='overflow-y-scroll h-[80%] scrollbar-none'>
            {Array(10).fill(0).map((_, indec) => (
              <CardStatusKomponen img='' nama_pengguna='Brilyananda' ket_lainnya='kemarin 12 Oktober 2023' />
            ))}
          </div>
        </div>

        {/* Page content here */}
        <div className='w-full bg-slate-600 flex'>
          <SideContent />
          {/* tombol kembali ke halaman home */}
          <Link href={"/home"} className='btn btn-circle text-xl absolute top-1 right-1'>x</Link>
        </div>
      </div>
    </div>
  )
}


function SideContent() {
  return (
    <div className='w-full h-1/2 flex flex-col justify-between items-center mt-16'>
      <FaVolleyballBall size={120} />
      <h2>Klik pada kontak untuk melihat pembaruan status anda</h2>
    </div>
  )
}