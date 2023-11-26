import Link from 'next/link';
import React from 'react';
import { BiCommentAdd, BiSearch } from 'react-icons/bi';
import { BsChatDotsFill, BsFillDiscFill, BsThreeDotsVertical } from 'react-icons/bs';
import { FaPeopleGroup } from 'react-icons/fa6';

export default function MenuUtamaKomponen() {
  return (
    <div className='sticky z-20 top-0 w-full'>
      <div className='p-2 flex justify-between items-center z-50  relative h-16 w-full bg-[orange]' >
        {/* lokasi foto profil atau avatar pengguna */}
        <Link href={"/profil"} className="avatar online placeholder w-14 h-14 box-border">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-14">
            {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
            <span className="text-xl">K</span>
          </div>
        </Link>

        {/* menu-menu pada side bar aplikasi */}
        <ul className="menu menu-horizontal bg-base-200 h-16 rounded-box flex justify-center items-center bg-transparent">

          {/* 1.menu komonitas */}
          <li>
            <div className="tooltip hover:tooltip-open  tooltip-bottom tooltip-accent" data-tip="komonitas">
              <Link href={"/community"} className='flex justify-center items-center'>
                <div className='avatar online flex justify-center items-center'>
                  <FaPeopleGroup size={23} />
                </div>
              </Link>
            </div>
          </li>

          {/* 2.menu status */}
          <li>
            <div className="tooltip hover:tooltip-open  tooltip-bottom tooltip-accent" data-tip="status">
              <Link href={"/status"}>
                <div className='avatar online flex justify-center items-center'>
                  <BsFillDiscFill size={23} />
                </div>
              </Link>
            </div>
          </li>

          {/* 3.menu saluran */}
          <li>
            <div className="tooltip hover:tooltip-open  tooltip-bottom tooltip-accent" data-tip="saluran">
              <Link href={""}>
                <div className='avatar online flex justify-center items-center'>
                  <BsChatDotsFill size={23} />
                </div>
              </Link>

            </div>
          </li>

          {/* 4.menu chat baru */}
          <li>
            <div className="tooltip hover:tooltip-open  tooltip-bottom tooltip-accent" data-tip="chat baru">
              <Link href={"/new-chat"}>
                <div className='avatar online flex justify-center items-center'>
                  <BiCommentAdd size={23} />
                </div>
              </Link>
            </div>
          </li>

          {/* 5.menu dari menu */}
          <li className="dropdown dropdown-end p-0 m-0 ">
            <div tabIndex={0} className='focus:bg-transparent hover:bg-transparent'>
              <BsThreeDotsVertical size={23} color='red' />
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1000] menu p-2 shadow bg-slate-900 rounded-box w-52">
              <li><a>Grub Baru</a></li>
              <li><a>Komonitas Baru Baru</a></li>
              <li><a>Pesan Berbintan</a></li>
              <li><a>Pilih Chat</a></li>
              <li><a>Pengaturan</a></li>
              <li><a>Keluar</a></li>
            </ul>
          </li>
        </ul>
      </div>

      {/* bagian menu pencarian */}
      <div className="join w-full h-14 p-2 rounded-full border-1 border-stone-700 border-solid">
        <button className=" join-item h-full bg-slate-800 w-12 flex justify-center items-center ">
          <BiSearch size={23} />
        </button>
        <input className="  join-item w-full bg-slate-800 pl-2 focus:outline-none" placeholder="Search" />
      </div>
    </div>
  );
}
