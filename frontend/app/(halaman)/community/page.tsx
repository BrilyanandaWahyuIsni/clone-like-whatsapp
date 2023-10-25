"use client"
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from 'react-window';

// Now you can use <List {...props} />
import { useRouter } from 'next/navigation'
import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { getDataServer } from '../../data/getData'
import { CardCommunitasKomponen, CardCreateCommunitasKomponen } from '../../component/cardcommunitas';


export default function CommonityPage() {
  // router dari back to home
  const router = useRouter()

  // fungsi untuk kembali ke halaman home
  function handleBtnBackToHome() {
    router.push("/home")
  }

  return (
    <div className="w-[40%] h-[100%] pb-28 overflow-y-scroll scrollbar-none">

      {/* button kembali */}
      <div className='flex items-center p-10 pl-4 bg-orange-900 sticky top-0 z-30'>
        {/* icon kembali */}
        <button className='btn btn-ghost rounded-full p-2 ' onClick={handleBtnBackToHome}>
          <AiOutlineArrowLeft size={30} />
        </button>
        {/* keterangan */}
        <h2 className='card-title ml-3'>Komonitas</h2>
      </div>

      {<RenderDataGrub url='/api_test/community.json' />}

    </div>
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
    <div className='h-auto flex items-center justify-start w-full p-4 rounded-none'>
      data salah...
    </div>
  )
  // jika data komunitas dalam proses pengambilan
  if (isLoading) return (
    <div className='h-auto flex items-center justify-start w-full p-4 mt-5 rounded-none'>
      loading...
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
          className='scrollbar-none flex flex-col-reverse'

        >
          {Row}
        </List>
      )
      }
    </AutoSizer>
  );
}