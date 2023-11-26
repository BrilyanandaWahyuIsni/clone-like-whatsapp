import React from 'react';
import { IoIosPeople } from 'react-icons/io';
import Link from 'next/link';

interface Komunitas {
  id: string;
  nama_komunitas: string;
  logo_komunitas: string;
  pesan_belum_dibaca: number;
}

export function CardCommunitasKomponen({ itemKomonitas, styleName }: { itemKomonitas: Komunitas, styleName: React.CSSProperties }) {
  return (
    <Link style={styleName} href={''} className='btn h-auto flex flex-row items-center justify-start w-full p-4 rounded-none border-b-slate-400 border-b-[1px] hover:border-b-slate-400 '>

      <div className="indicator">
        {/* indikataor dari pesan yang belum dibaca */}
        {
          itemKomonitas.pesan_belum_dibaca === 0 || null ? null :
            <span className="indicator-item badge badge-success">{itemKomonitas.pesan_belum_dibaca > 999 ? '999+' : itemKomonitas.pesan_belum_dibaca}</span>
        }

        {/* gambar atau logo dari komonitas */}
        <div className='flex items-center justify-center box-border h-12 w-14 bg-gray-600 rounded-l-[15px] rounded-r-[15px] overflow-hidden'>
          {/* jika itemkomonitas.logo_komonitas tidak ada atau string kosong */}
          {
            itemKomonitas.logo_komunitas === ""
              ? <IoIosPeople size={35} color='white' />
              : <img src={itemKomonitas.logo_komunitas} alt='' className='h-14' />
          }
        </div>
      </div>
      {/* nama komunitas */}
      <div className='w-[calc(100%-70px)] flex items-center justify-between flex-row'>
        <h1 className='truncate'>{itemKomonitas.nama_komunitas}</h1>
      </div>
    </Link>
  );
}

export function CardCreateCommunitasKomponen({ styleName }: { styleName: React.CSSProperties }) {
  return (
    <Link style={styleName} href={''} className='btn h-auto flex items-center justify-start w-full p-4 rounded-none mb-4'>
      <div className='flex items-center p-2 bg-green-600 rounded-l-[15px] rounded-r-[15px]'>
        <IoIosPeople size={35} color='white' />
      </div>
      <h1>{"Komunitas Baru"}</h1>
    </Link>
  );
}
