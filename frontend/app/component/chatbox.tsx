'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { BiSearch, BiSolidDownArrow } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineArrowLeft, AiOutlineClose } from 'react-icons/ai'
import ChatBubleKomponen from './chatbuble'
import InputPesanKomponen from './inputpesan'
import { motion } from 'framer-motion'
import { ValueContext } from '../context/getSide'

export default function ChatBoxComponent() {
  // useState menampilkan side page
  const [showSidePageMenu, setShowSidePageMenu] = useState<boolean>(false)
  // scroll ref isi
  const scrollIsiRef = useRef<HTMLDivElement | null>(null)

  // useState menampilkan posisi
  const [showButtonBottom, setShowButtonBottom] = useState<boolean>(false)

  // memanggil context
  const { handleNilaiSide } = useContext(ValueContext)


  // fungsi kembali ke scroll paling bawah
  function goToBottomScroll() {
    scrollIsiRef.current.scrollTop = scrollIsiRef.current.scrollHeight - scrollIsiRef.current.clientHeight
  }


  // use effect
  useEffect(() => {

    if (scrollIsiRef.current) {

      scrollIsiRef.current.scrollTop = scrollIsiRef.current.scrollHeight - scrollIsiRef.current.clientHeight
      const handleScroll = () => {
        if (scrollIsiRef.current.scrollTop != scrollIsiRef.current.scrollHeight - scrollIsiRef.current.clientHeight) {
          setShowButtonBottom(true);
        } else {
          setShowButtonBottom(false);
        }
      };

      scrollIsiRef.current.addEventListener('scroll', handleScroll);

      return () => {
        // Hapus event listener ketika komponen dibongkar
        scrollIsiRef.current.removeEventListener('scroll', handleScroll);
      };
    }



  }, [showButtonBottom])

  // fungsi untuk menampilkan menu searching
  function handleShowSidePageMenu(): void {
    setShowSidePageMenu(true)
  }

  // fungsi untuk menghilangkan menu searching
  function handleHideSidePageMenu(): void {
    setShowSidePageMenu(false)
  }

  // fungsi untuk menghandle nilai value side
  function setNilaiSide() {
    handleNilaiSide(false)
  }

  return (

    <div className='flex h-screen w-screen overflow-hidden' >
      {/* bagian utama */}
      <motion.div layout className={`h-screen relative flex flex-col justify-between box-border w-full`}>

        {/* bagian kepala chat */}
        <div className='h-16 bg-slate-700  flex items-center justify-between p-2'>


          {/* bagian avatar, nama, dan status */}
          <div className='flex items-center'>
            <button onClick={setNilaiSide} className='lg:hidden block mr-4' >
              <AiOutlineArrowLeft size={30} />
            </button>
            {/* avatar atau foto profil */}
            <div className="avatar placeholder  online">
              <div className="w-12 bg-slate-300 rounded-full">
                {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                <span>K</span>
              </div>
            </div>
            {/* status aktif */}
            <div className='pl-3'>
              <h2 className='card-title'>Nama</h2>
              <h2 className='text-sm'>online</h2>
            </div>
          </div>

          <div className='flex'>
            {/* pencarian */}
            <button onClick={handleShowSidePageMenu} className=" h-full  w-12 flex justify-center items-center ">
              <BiSearch size={23} />
            </button>
            {/* menu lainnya */}
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

          </div>
        </div>

        {/* bagian isi chat */}

        <div ref={scrollIsiRef} className='h-full flex-1 bg-orange-500 overflow-y-scroll lg:p-4 p-1 relative'>
          {Array(15).fill(null).map((_, index) => {
            if (index > 9) {
              return (
                <ChatBubleKomponen pesanAnda={true} />
              )
            } else {
              return <ChatBubleKomponen pesanAnda={false} />
            }
          })}
        </div>

        {/* bagian input pesan chat */}
        <InputPesanKomponen />

        {/* tombol ke scroll bagian ke bawah */}
        {
          showButtonBottom &&
          (
            <button onClick={goToBottomScroll} className='absolute opacity-30 hover:opacity-100 bottom-20 right-5 rounded-full w-[3rem] btn'>
              <BiSolidDownArrow size={26} />
            </button>
          )

        }

      </motion.div>


      {/* bagian menu searching pesan */}
      <motion.div layout className={`h-screen absolute lg:w-[45%] w-full ${showSidePageMenu ? "right-0 top-0 " : "top-0 right-[-100%]"} bg- flex flex-col justify-between box-border bg-orange-50 z-50`}>
        {/* kepala pada menu searching pesan */}
        <div className='h-16 bg-slate-900 w-full flex items-center pl-2'>
          <button onClick={handleHideSidePageMenu}>
            <AiOutlineClose size={25} />
          </button>
          <h2 className='ml-9'>
            Cari Pesan
          </h2>
        </div>
        {/* text input menu searching */}
      </motion.div>

    </div>
  )
}
