import React from 'react';

interface itemStatus {
  img: string | null;
  nama_pengguna: string;
  ket_lainnya: string;
}

export default function CardStatusKomponen({ img, nama_pengguna, ket_lainnya }: itemStatus) {
  return (
    <div className='flex  p-4 pl-5 mb-1'>
      {/* avatar atau image profil */}
      <button className='mr-5'>
        <div className="avatar placeholder">
          <div className="w-12 rounded-full ring ring-success ring-offset-base-100 ring-offset-2 bg-slate-600">
            {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
            <div className='text-xl'>{nama_pengguna.slice(0, 1)}</div>
          </div>
        </div>
      </button>
      <div>
        {/* Nama pengguna */}
        <h1 className='card-title'>{nama_pengguna}</h1>
        {/* jadwal pembaruan */}
        <p className='text-xs'>{ket_lainnya}</p>
      </div>
    </div>
  );
}
