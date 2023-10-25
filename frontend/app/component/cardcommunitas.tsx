import React from 'react'
import { IoIosPeople } from 'react-icons/io'
import Link from 'next/link'

interface Komunitas {
  id: string;
  nama_komunitas: string;
  logo_komunitas: string;
  pesan_belum_dibaca: number;
}

export function CardCommunitasKomponen({ itemKomonitas, styleName }: { itemKomonitas: Komunitas, styleName: React.CSSProperties }) {
  return (
    <Link style={styleName} href={''} className='btn h-auto flex items-center justify-start w-full p-4 rounded-none border-b-slate-400 border-b-[1px] hover:border-b-slate-400 '>

      <div className='flex items-center p-2  bg-gray-600 rounded-l-[15px] rounded-r-[15px]'>
        <IoIosPeople size={35} color='white' />
      </div>
      <h1>{itemKomonitas.nama_komunitas}</h1>

    </Link>
  )
}

export function CardCreateCommunitasKomponen({ styleName }: { styleName: React.CSSProperties }) {
  return (
    <Link style={styleName} href={''} className='btn h-auto flex items-center justify-start w-full p-4 rounded-none mb-4'>
      <div className='flex items-center p-2 bg-green-600 rounded-l-[15px] rounded-r-[15px]'>
        <IoIosPeople size={35} color='white' />
      </div>
      <h1>{"Komunitas Baru"}</h1>
    </Link>
  )
}
