import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';

type chatbuble = {
  pesanAnda: boolean;
}

export default function ChatBubleKomponen({ pesanAnda }: chatbuble) {

  const style = {
    "all-chat": 'lg:w-[60%] w-[75%] lg:mt-6 mt-0 bg-gray-800 relative lg:p-5 p-1 pt-2 before:z-10 before:content-[""] before:absolute before:top-0 before:border-t-[17px] before:border-b-[17px] before:border-b-transparent before:border-t-gray-800 before:w-0 before:h-0 rounded-lg',
    "chat-start": 'ml-3 before:border-r-[10px] before:border-l-[15px] before:left-[-25px]  before:border-l-transparent before:border-r-gray-800 rounded-l-none',
    "chat-end": 'mr-5 before:border-l-[10px] before:border-r-[15px] before:right-[-25px]  before:border-r-transparent  before:border-l-gray-800 rounded-r-none'
  }

  return (
    <div className={`mb-2 z-30 p-2 flex w-full ${pesanAnda ? 'flex-row-reverse' : null}`} >
      {/* chat avatar */}
      {
        !pesanAnda && (
          <div className="avatar flex justify-center items-center overflow-hidden lg:w-12 lg:h-12 w-8 h-8 rounded-full bg-orange-950 mr-3">
            {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
            <h1 className='text-lg'>B</h1>
          </div>
        )
      }

      {/* chat buble */}
      <div className={`group/btn ${style['all-chat']} ${pesanAnda ? style['chat-end'] : style['chat-start']}`}>
        <div className='flex items-center justify-between'>
          <div className='flex items-center '>
            {/* nama pengguna */}
            {!pesanAnda && (
              <p className='mr-2 text-xs'>
                Obi-Wan Kenobi
              </p>)
            }
            {/* waktu pesan */}
            <time className="text-xs opacity-50">12:45</time>
          </div>
          {/* opsi pesan */}
          <button className='hover:bg-stone-700 p-1 rounded-lg group-hover/btn:visible invisible group/showOpsi shadow-lg'>
            <IoIosArrowDown size={32} />
            {/* pilihan opsi pesan */}
            <div className='group-focus/showOpsi:flex w-48 z-50 p-1 bg-gray-900 hidden absolute lg:right-[-4rem] right-[-10px] top-14  flex-col gap-1 shadow-lg'>
              <button className='btn rounded-none'>Balas</button>
              <button className='btn rounded-none'>Teruskan</button>
              <button className='btn rounded-none'>Share</button>
              {
                !pesanAnda &&
                <button className='btn rounded-none'>Laporkan</button>
              }
              <button className='btn rounded-none'>Hapus</button>
            </div>
          </button>
        </div>

        {/* isi chat */}
        {/* jawaban */}
        <button className='w-full p-1 flex justify-center items-center overflow-hidden bg-red-500'>
          <img src="/img/whatsapp.png" alt="" className='w-[30%]' />
          <p className='p-2 text-left truncate w-[70%]  text-xs lg:text-base '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, sed? Aliquid architecto non quos explicabo quis obcaecati accusamus, nesciunt autem illo commodi, quia nemo? Fugit officiis ab ut nemo. Odio!</p>
        </button>
        {/* imaga chat pesan */}
        <button>
          <img src="/img/whatsapp.png" alt="" />
        </button>
        {/* text chat pesan */}
        <div className={`bg-gray-800 p-2 text-xs lg:text-base`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, placeat quos inventore a totam fuga nihil eaque ipsum mollitia sunt aperiam alias dolore possimus corrupti quam minima veniam labore odit? Quidem labore nemo cum illum dolorum officiis. Distinctio dolore facere itaque iure voluptatem et neque reiciendis exercitationem, quos illo, asperiores aliquid atque dolores ad. Veritatis odio architecto consectetur fuga dolores veniam obcaecati natus aspernatur quaerat consequuntur! Mollitia corporis iure consequatur, pariatur ut vitae possimus, accusamus aut sed adipisci natus animi ipsa error nemo autem ducimus distinctio molestiae sit dolor, aliquam provident. Accusantium quae quisquam perspiciatis magnam numquam. Cumque, commodi labore?</div>
      </div>
    </div>
  )
}
