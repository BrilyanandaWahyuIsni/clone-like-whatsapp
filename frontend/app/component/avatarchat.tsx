import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

export default function AvatarChat() {
  return (
    <div className='w-full mt-2 flex justify-between group'>
      {/* avatar atau foto profil */}
      <div className="avatar offline placeholder">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-20">
          {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
          <span className="text-xl">JO</span>
        </div>
      </div>

      <div className=' w-64 h-20 flex flex-col justify-between'>
        {/* nama user */}
        <div className='flex flex-row justify-between'>
          <h2 className='card-title'>Nama</h2>
          <h3>kemarin</h3>
        </div>
        {/* pesan user */}
        <div className='flex flex-row justify-center items-center h-[70px]'>
          <p className='truncate '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptates ad minus velit enim neque dolorem optio, magnam in. Perspiciatis, dolor.</p>
          <div className="dropdown dropdown-end group-hover:block hidden m-0 p-0">
            <label tabIndex={0} className="btn m-0">
              <IoIosArrowDown size={15} className='m-0 p-0' />
            </label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 m-0 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}
