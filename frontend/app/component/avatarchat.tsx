import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

export default function AvatarChat() {
  return (
    <button className=' p-3 pr-1 w-full flex justify-center group '>
      {/* avatar atau foto profil */}
      <div className="avatar online placeholder mr-5">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-14 h-14">
          {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
          <span className="text-xl">JO</span>
        </div>
      </div>

      <div className=' w-[80%] h-20 flex flex-col justify-center border-b-[1px]'>
        {/* nama user */}
        <div className='flex flex-row justify-between items-end'>
          <h2 className='font-bold text-lg truncate'>Lorem ipsum dolor sit amet.</h2>
          <h3 className='pl-3'>kemarin</h3>
        </div>
        {/* pesan user */}
        <div className='flex flex-row justify-center items-center h-[70px]'>
          <p className='truncate '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptates ad minus velit enim neque dolorem optio, magnam in. Perspiciatis, dolor.</p>
          {/* menu dropdown  */}
          <div className='bg-green-500 text-[12px] p-1 rounded-full'>99</div>
          <div className="dropdown dropdown-left  group-hover:block hidden m-0 p-0">
            <label tabIndex={0} className="btn bg-transparent hover:bg-transparent border-0 m-0">
              <IoIosArrowDown size={25} className='m-0 p-0' />
            </label>
            <ul tabIndex={0} className="dropdown-content z-[12]  menu p-2 m-0 shadow bg-base-100 rounded-box w-52">
              <li><a>Arsipkan Chat</a></li>
              <li><a>Bisukan Notifikasi</a></li>
              <li><a>Hapus Chat</a></li>
              <li><a>Sematkan Chat</a></li>
              <li><a>Tandai Belum dibaca</a></li>
              <li><a>Blokir</a></li>
            </ul>
          </div>
        </div>
      </div>

    </button>
  )
}
