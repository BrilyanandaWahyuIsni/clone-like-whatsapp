import React from 'react'

type chatbuble = {
  pesanAnda: boolean;
}

export default function ChatBubleKomponen({ pesanAnda }: chatbuble) {

  return (
    // ini adalah chat
    <div className={`chat ${pesanAnda ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar placeholder">
        <div className="w-10 h-10 rounded-full bg-zinc-800">
          {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
          <h2 className='text-sm'>BWI</h2>
        </div>
      </div>
      <div className="chat-header">
        Obi-Wan Kenobi
        <time className="text-xs opacity-50">12:45</time>
      </div>
      <div className="chat-bubble">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis voluptatum, doloribus sapiente maxime, rem minima eos id velit reiciendis distinctio blanditiis neque numquam laborum recusandae.</div>
      <div className="chat-footer opacity-50">
        Delivered
      </div>
    </div>
  )
}
