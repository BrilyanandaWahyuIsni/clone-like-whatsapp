import data from '@emoji-mart/data'
import EmojiPicker from '@emoji-mart/react'
import React, { ChangeEvent, useState } from 'react'
import { BiSolidMicrophone } from 'react-icons/bi'
import { BsFillEmojiLaughingFill, BsFillPersonFill } from 'react-icons/bs'
import { FaImages, FaSquarePollHorizontal } from 'react-icons/fa6'
import { GrAdd } from 'react-icons/gr'
import { IoSendSharp } from 'react-icons/io5'
import { HiCamera, HiDocumentText } from 'react-icons/hi2'
import { MdAddReaction } from 'react-icons/md'

export default function InputPesanKomponen() {
  // usestate untuk input dari nilai pesan pada text input
  const [valueInputPesan, setValueInputPesan] = useState<string>("")
  // usestate untuk shown or hide emoji
  const [showEmojiDiv, setShowEmojiDiv] = useState<boolean>(false)

  // fungsi untuk mengatur mengambil data emoji dan memasukan ke input pesan
  function handleDataEmoji(event) {
    setValueInputPesan(prev => prev + event.native)
  }

  // fungsi untuk mengatur value input pesan
  function handleInputPesan(event: ChangeEvent<HTMLInputElement>) {
    setValueInputPesan(event.target.value)
  }

  // fungsi untuk menampilkan atau menyembunyikan emoji
  function handleShowHideEmoji() {
    setShowEmojiDiv(prev => !prev)
  }



  return (
    <>
      {/* bagian input pesan chat */}
      <div className='h-auto'>

        {/* emoji input */}
        {
          showEmojiDiv
            ? (
              <div className='transition duration-1000 ease-in'>
                <EmojiPicker data={data} onEmojiSelect={handleDataEmoji} previewPosition="none" dynamicWidth={true} />
              </div>
            )
            : null
        }

        <div className='h-16 bg-slate-700 flex items-center justify-around p-2'>

          {/* emoji */}
          <button onClick={handleShowHideEmoji} className='w-[5%] flex justify-center items-center'>
            <BsFillEmojiLaughingFill size={25} />
          </button>

          {/* button tambah file */}
          <li className="dropdown dropdown-top p-0 m-0 w-[5%] flex justify-center items-center ">
            <div tabIndex={0} className='focus:bg-transparent hover:bg-transparent focus:rotate-45 focus:bg-slate-500 hover:bg-slate-500 rounded-full hover:glass p-2'>
              <GrAdd size={25} />
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1000] menu p-2 shadow bg-slate-900 rounded-box w-52">
              <li><a><HiDocumentText size={30} color='blue' />Dokumen</a></li>
              <li><a><FaImages size={30} color='green' /> Foto dan Video</a></li>
              <li><a><HiCamera size={30} color='red' />Kamera</a></li>
              <li><a><BsFillPersonFill size={30} color='blue' />Kontak</a></li>
              <li><a><FaSquarePollHorizontal size={30} color='yellow' />Poling</a></li>
              <li><a><MdAddReaction size={30} color='green' />Stiker baru</a></li>
            </ul>
          </li>

          {/* text input pesan */}
          <input type="text" value={valueInputPesan} onChange={handleInputPesan} placeholder="Ketik Pesan" className="input input-bordered input-md w-full" />

          {/* button kirim pesan */}
          {valueInputPesan === ""
            ? null
            : (
              <button className='w-[5%] flex justify-center items-center'>
                <IoSendSharp size={25} />
              </button>

            )}

          {/* microfon */}
          <button className='w-[5%] flex justify-center items-center'>
            <BiSolidMicrophone size={25} />
          </button>
        </div>

      </div>
    </>
  )
}
