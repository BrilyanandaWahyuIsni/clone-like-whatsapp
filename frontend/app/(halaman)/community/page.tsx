"use client"
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from 'react-window';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { getDataServer } from '../../data/getData'
import { CardCommunitasKomponen, CardCreateCommunitasKomponen } from '../../component/cardcommunitas';
import { motion } from "framer-motion";


const variants = {
  initial: {
    opacity: 0,
    x: "-100%",
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: "-100%"
  }
}

export default function CommonityPage() {
  // useState untuk animasi keluar
  const [animasi, setAnimasi] = useState<boolean>(true)

  // router dari back to home
  const router = useRouter()

  // fungsi untuk kembali ke halaman home
  function handleBtnBackToHome() {
    setAnimasi(false)
    router.push("/home")
  }

  return (
    <motion.div
      initial="initial"
      animate={animasi ? "animate" : "exit"}
      exit="exit"
      variants={variants} className="w-full h-screen ">

      {/* button kembali */}
      <div className='flex items-center h-[20%] p-10 pl-4 bg-orange-900 sticky top-0 z-30'>
        {/* icon kembali */}
        <button className='btn btn-ghost rounded-full p-2 ' onClick={handleBtnBackToHome}>
          <AiOutlineArrowLeft size={30} />
        </button>
        {/* keterangan */}
        <h2 className='card-title ml-3'>Komonitas</h2>
      </div>
      {/* data */}
      <div className="h-[80%] bg-green-50 w-full">
        {<RenderDataGrub url='api_test/community_data_fake.json' />}

      </div>

    </motion.div>
  )
}


// untuk merender data yang akan dipanggil
function RenderDataGrub({ url }: { url: string }) {
  // pemanggilan data komonitas
  const { komonitas, error, isLoading } = getDataServer(url)

  const Row = ({ index, style }) => {
    if (index === 0) {
      return (
        <CardCreateCommunitasKomponen styleName={style} />
      )
    }
    return (
      <CardCommunitasKomponen styleName={style} itemKomonitas={komonitas[index]} />
    )
  };

  // jika data komonitas tidak ada atau error
  if (error) return (
    <div className='h-auto flex items-center justify-center w-full p-4 rounded-none'>
      data salah...
    </div>
  )
  // jika data komunitas dalam proses pengambilan
  if (isLoading) return (
    <div className='h-auto flex items-center justify-center w-full p-4 mt-5 rounded-none'>
      <span className="loading loading-bars loading-lg"></span>
    </div>
  )


  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          itemCount={komonitas.length}
          itemSize={100}
          width={width}
          className='scrollbar-none'
        >
          {Row}
        </List>
      )
      }
    </AutoSizer>
  );
}