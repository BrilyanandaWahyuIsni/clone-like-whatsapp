'use client'
import Link from 'next/link'
import React, { Suspense, lazy, useState } from 'react'

const WarningLogin = lazy(() => import('../../component/warningContainer'))


export default function ResetPassword() {
  const [wrongEmail, setWrongEmail] = useState<boolean>(false)
  const [tungguKode, setTungguKode] = useState<boolean>(false)
  const [showTokenInput, setShowTokenInput] = useState<boolean>(false)


  // fungsi untuk mendapatkan token
  function handleGetToken(): void {
    setTungguKode(true)
    setTimeout(() => {
      setTungguKode(false)
      setShowTokenInput(true)
    }, 5000)
  }

  return (
    <div className="card w-auto bg-base-100 shadow-xl image-full ">

      {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
      <div className="card-body flex items-center">
        <h2 className="card-title ">Reset Password</h2>

        {/* warning muncul jika email atau nomor telepon tidak ditemukan */}
        {
          wrongEmail ? (
            <Suspense fallback={(<div>loading...</div>)}>
              <WarningLogin warningteks='Email atau Nomor anda salah!' />
            </Suspense>
          ) :
            null
        }


        <p>Silahkan memasukan email atau nomor telepon anda!</p>

        <div className='form-control'>

          {/* text input memasukan email atau number reset */}
          <label className="label">
            <span className="label-text">Email atau No. Telepon?</span>
          </label>
          <input type="text" placeholder="Email atau No Telepon" className="input input-bordered w-full max-w-xs" />

          <div className="card-actions justify-center mt-3">
            <button onClick={handleGetToken} className={`btn btn-primary ${tungguKode ? 'btn-disabled' : null}`}>
              {tungguKode ?
                <span className="loading loading-infinity loading-lg"></span>
                : "Get Token Reset"}
            </button>
          </div>

          {/* teks input untuk memasukan token yang didapat*/}
          {
            showTokenInput ? (
              <>
                <label className="label mt-4">
                  <span className="label-text">Masukan Token Anda</span>
                </label>
                <input type="text" placeholder="Masukan token" className="input input-bordered w-full max-w-xs" />

                <div className="card-actions justify-center mt-3">
                  <button className={`btn btn-primary `}>Check Token</button>
                </div>
              </>
            ) : null
          }

          {/* tampilan reset password anda */}
          {/* input text untuk memasukan password */}
          <label className="label mt-4">
            <span className="label-text">Password Baru</span>
          </label>
          <input type="text" placeholder="Password" className="input input-bordered w-full max-w-xs" />
          {/* input text untuk mengecek repassword */}
          <label className="label mt-2">
            <span className="label-text">Password Baru</span>
          </label>
          <input type="text" placeholder="Re-Password" className="input input-bordered w-full max-w-xs" />

          <div className="card-actions justify-center mt-3">
            <button className={`btn btn-primary `}>Change Password</button>
          </div>


        </div>

        <p>kembali ke halaman <Link href={'/'} className='link link-accent'>home</Link></p>
      </div>
    </div >
  )
}

