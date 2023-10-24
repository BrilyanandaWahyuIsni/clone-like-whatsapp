import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { FaCamera } from 'react-icons/fa6'

export default function ProfilPage() {
  return (
    <div className="w-[40%] h-auto pb- overflow-y-scroll scrollbar-none">
      {/* button kembali */}
      <div className='flex items-center p-10 pl-4 bg-orange-900'>
        {/* icon kembali */}
        <button className='btn btn-ghost rounded-full p-2 '>
          <AiOutlineArrowLeft size={30} />
        </button>
        {/* keterangan */}
        <h2 className='card-title ml-3'>Profil</h2>
      </div>

      {/* avatar */}
      <div className='flex items-center justify-center p-5 '>
        <div className="indicator group ">
          <span className="w-full h-full  indicator-item indicator-middle indicator-center hidden   group-hover:flex items-center justify-center flex-col ">
            <div className='w-full h-full rounded-full absolute -z-0 bg-slate-600 opacity-80'></div>
            <button className='p-2 relative z-10 flex items-center flex-col'>
              <FaCamera size={32} color='white' />
              <h2 className='uppercase flex-wrap'>ubah foto profil</h2>
            </button>
          </span>
          <div className="w-44 h-44 bg-orange-700 rounded-full flex items-center justify-center">
            {/* image */}
            {/* text */}
            <h1 className='text-5xl text-stone-800'>B</h1>
          </div>
        </div>

      </div>

      {/* kontainer */}
      {/* name */}
      {/* info */}
      {/* nomor telepon */}
    </div>
  )
}
