import React from 'react'
import AvatarChat from '../../component/avatarchat'
import MenuUtamaKomponen from '../../component/menuutama'

export default function HomePage() {
  return (
    <ul className=" w-full ">
      {/* side bar aplikasi */}
      {/* sidebar menu menu */}
      <MenuUtamaKomponen />
      {/* Sidebar content here */}
      {
        Array(10).fill(null).map((_, index) => (
          <li className='w-full mt-2 pr-2'><AvatarChat /></li>
        ))
      }
    </ul>
  )
}
