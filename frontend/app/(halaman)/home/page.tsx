import Link from 'next/link'
import React from 'react'
import { BiCommentAdd } from 'react-icons/bi'
import { FaPeopleGroup } from 'react-icons/fa6'
import { BsFillDiscFill, BsThreeDotsVertical, BsChatDotsFill } from 'react-icons/bs'

export default function HomePage() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay p-0 m-0"></label>


        {/* side bar aplikasi */}
        <ul className="menu w-[27rem] min-h-full bg-base-200 text-base-content">

          {/* sidebar menu menu */}
          <div className='bg-lime-900 p-2 flex justify-between z-50 rounded-xl' >
            {/* lokasi foto profil atau avatar pengguna */}
            <div className="avatar online placeholder w-16 box-border">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                <span className="text-xl">K</span>
              </div>
            </div>

            {/* menu-menu pada side bar aplikasi */}
            <ul className="menu menu-horizontal bg-base-200 h-16 rounded-box flex justify-center items-center">

              {/* 1.menu komonitas */}
              <li>
                <Link href={""} className='flex justify-center items-center'>
                  <div className='avatar online'>
                    <FaPeopleGroup size={23} />
                  </div>
                </Link>
              </li>

              {/* 2.menu status */}
              <li>
                <Link href={""}>
                  <div className='avatar online'>
                    <BsFillDiscFill size={23} />
                  </div>
                </Link>
              </li>

              {/* 3.menu saluran */}
              <li>
                <Link href={""}>
                  <div className='avatar online'>
                    <BsChatDotsFill size={23} />
                  </div>
                </Link>
              </li>

              {/* 4.chat baru */}
              <li>
                <Link href={""}>
                  <div className='avatar online'>
                    <BiCommentAdd size={23} />
                  </div>
                </Link>
              </li>

              {/* 5.menu dari menu */}
              <li className="dropdown dropdown-end p-0 m-0">
                <label tabIndex={0} className='btn '>
                  <BsThreeDotsVertical size={23} />
                </label>
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

          {/* Sidebar content here */}
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>

      </div>
    </div>
  )
}
