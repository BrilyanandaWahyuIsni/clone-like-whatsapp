"use client";
import { useRouter } from 'next/navigation';
import React from 'react';
import { AiOutlineArrowLeft, AiOutlineInfoCircle } from 'react-icons/ai';
import { BsFillPersonFill, BsTelephoneFill } from 'react-icons/bs';
import { FaCamera } from 'react-icons/fa6';
import { IoMdCreate } from 'react-icons/io';

export default function ProfilPage() {

  const router = useRouter();

  function handleBtnBackToHome() {
    router.back();
  }

  return (
    <div className="w-full">
      {/* button kembali */}
      <div className='flex items-center p-10 pl-4 bg-orange-900'>
        {/* icon kembali */}
        <button className='btn btn-ghost rounded-full p-2 ' onClick={handleBtnBackToHome}>
          <AiOutlineArrowLeft size={30} />
        </button>
        {/* keterangan */}
        <h2 className='card-title ml-3'>Profil</h2>
      </div>

      {/* avatar */}
      <div className='flex items-center justify-center p-5 '>
        <div className="indicator group ">
          <span className="w-full h-full  indicator-item indicator-middle indicator-center hidden group-hover:flex items-center justify-center flex-col ">
            <div className='w-full h-full rounded-full absolute -z-0 bg-slate-600 opacity-80'></div>
            <button className='p-2 relative z-10 flex items-center flex-col'>
              <FaCamera size={32} color='white' />
              <h2 className='uppercase flex-wrap'>ubah foto profil</h2>
            </button>
          </span>
          <div className="w-40 h-40 bg-orange-700 rounded-full flex items-center justify-center">
            {/* image */}
            {/* text */}
            <h1 className='text-5xl text-stone-800'>B</h1>
          </div>
        </div>

      </div>

      {/* kontainer */}
      <div className='p-3'>
        {/* name */}
        <div className='flex items-start '>
          <div className='w-8 mr-3'>
            <BsFillPersonFill size={30} />
          </div>
          <div className='w-full border-b-[1px] border-slate-600'>
            <div className='flex justify-between'>
              <div>
                <h4 className='text-slate-600'>Nama</h4>
                <input defaultValue={"nanda"} className='w-full bg-transparent truncate focus:outline-none' disabled={false} />
              </div>
              <button>
                <IoMdCreate size={30} />
              </button>
            </div>
            <p className='text-[0.9rem] text-slate-600'>Ini bukan nama pengguna atau PIN Anda. Nama ini akan terlihat oleh kontak WhatsApp anda</p>
          </div>
        </div>

        {/* info */}
        <div className='flex items-start mt-4'>
          <div className='w-8 mr-3'>
            <AiOutlineInfoCircle size={30} />
          </div>
          <div className='w-full border-b-[1px] border-slate-600'>
            <div className='flex justify-between w-full'>
              <div className='w-full'>
                <h4 className='text-slate-600'>info</h4>
                <input defaultValue={"Hai saya menggunakan Whatsapp dan saya akan berjuang"} className='w-full bg-transparent truncate focus:outline-none' disabled={false} />
              </div>
              <button>
                <IoMdCreate size={30} />
              </button>
            </div>
          </div>
        </div>


        {/* nomor telepon */}
        <div className='flex items-start mt-4'>
          <div className='w-8 mr-3'>
            <BsTelephoneFill size={30} />
          </div>
          <div className='w-full '>
            <div className='flex justify-between w-full'>
              <div className='w-full'>
                <h4 className='text-slate-600'>Telepon</h4>
                <input defaultValue={"+62 854-1234-4567"} className='w-full bg-transparent truncate focus:outline-none' disabled={true} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
