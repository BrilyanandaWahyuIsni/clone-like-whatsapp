import React from 'react'

type chatbuble = {
  pesanAnda: boolean;
}

export default function ChatBubleKomponen({ pesanAnda }: chatbuble) {

  const style = {
    "all-chat": 'w-[60%] mt-6 bg-gray-800 relative p-5 pt-2 before:content-[""] before:absolute before:top-0 before:border-t-[17px] before:border-b-[17px] before:border-b-transparent before:border-t-gray-800 before:w-0 before:h-0 rounded-lg',
    "chat-start": 'ml-5 before:border-r-[20px] before:border-l-[15px] before:left-[-25px]  before:border-l-transparent before:border-r-gray-800 ',
    "chat-end": 'mr-7 before:border-l-[20px] before:border-r-[15px] before:right-[-25px]  before:border-r-transparent  before:border-l-gray-800'
  }

  return (
    <div className={`flex w-full ${pesanAnda ? 'flex-row-reverse' : null}`} >
      {/* chat avatar */}
      <div className="avatar placeholder overflow-hidden w-12 h-12 rounded-full bg-orange-950 mr-3">
        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>

      {/* chat buble */}
      <div className={`${style['all-chat']} ${pesanAnda ? style['chat-end'] : style['chat-start']}`}>
        <div className="flex items-center">
          <p className='mr-2'>
            Obi-Wan Kenobi
          </p>
          <time className="text-xs opacity-50">12:45</time>
        </div>
        {/* isi chat */}
        <div className="bg-gray-800 p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, placeat quos inventore a totam fuga nihil eaque ipsum mollitia sunt aperiam alias dolore possimus corrupti quam minima veniam labore odit? Quidem labore nemo cum illum dolorum officiis. Distinctio dolore facere itaque iure voluptatem et neque reiciendis exercitationem, quos illo, asperiores aliquid atque dolores ad. Veritatis odio architecto consectetur fuga dolores veniam obcaecati natus aspernatur quaerat consequuntur! Mollitia corporis iure consequatur, pariatur ut vitae possimus, accusamus aut sed adipisci natus animi ipsa error nemo autem ducimus distinctio molestiae sit dolor, aliquam provident. Accusantium quae quisquam perspiciatis magnam numquam. Cumque, commodi labore?</div>
      </div>
    </div>
  )
}
