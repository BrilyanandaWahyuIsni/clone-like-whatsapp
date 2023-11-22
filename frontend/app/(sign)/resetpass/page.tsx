'use client'
import Link from 'next/link'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import WarningLogin from '../../component/warningContainer'
import axios from 'axios';

interface DataUser {
  email: string;
  tokenResetPass: string;
  password: string;
}

export default function ResetPassword() {
  const [wrongEmail, setWrongEmail] = useState<boolean>(false)
  const [tungguKode, setTungguKode] = useState<boolean>(false)
  const [shownTokenInput, setShowTokenInput] = useState<boolean>(false)
  const [btnTextSubmit, setBtnTextSubmit] = useState<string>("Get Token Reset")
  const [warningTeks, setWarningTeks] = useState<string>("")
  // useState data email and password for reset your password
  const [dataUser, setDataUser] = useState<DataUser>({ email: '', tokenResetPass: '', password: '' })

  // function for get data user if input on text input
  const handleChangeTextFromDataUser = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setDataUser((prev) => ({ ...prev, [name]: value }))
  }


  // function submit form to server
  const handleSubmitToServer = (event: FormEvent) => {
    event.preventDefault();


    setTungguKode(true);

    if (shownTokenInput) {
      axios.put("http://localhost:3210/user/checkToken", { ...dataUser })
        .then(() => {

        })
        .catch(() => {
          setWrongEmail(true)
          setWarningTeks("Token anda salah atau expired!")
        })
        .finally(() => setTungguKode(false))
    } else {
      axios.put("http://localhost:3210/user/getToken", { ...dataUser })
        .then(() => {
          setShowTokenInput(true)
          setBtnTextSubmit("Change Password")
          setWrongEmail(false)
        })
        .catch(() => {
          setWrongEmail(true)
          setWarningTeks("Email tidak ditemukan")
        })
        .finally(() => {
          setTungguKode(false);
        })
    }
  }


  return (
    <div className="card w-auto shadow-xl bg-green-900 glass">

      {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
      <form className="form form-control card-body flex items-center" method='put' onSubmit={handleSubmitToServer}>
        <h2 className="card-title ">Reset Password</h2>

        {/* warning muncul jika email atau nomor telepon tidak ditemukan */}
        {
          wrongEmail && <WarningLogin warningteks={warningTeks} />
        }

        <p>Silahkan memasukan email atau nomor telepon anda!</p>

        <div className='form-control'>

          {/* text input memasukan email atau number reset */}
          <label className="label">
            <span className="label-text">Email atau No. Telepon?</span>
          </label>
          <input onChange={handleChangeTextFromDataUser} type="email" name='email' placeholder="Email atau No Telepon" className="input input-bordered w-full max-w-xs " required />

          {/* teks input untuk memasukan token yang didapat*/}
          {
            shownTokenInput && (
              <>
                <label className="label mt-4">
                  <span className="label-text">Masukan Token Anda</span>
                </label>
                <input onChange={handleChangeTextFromDataUser} type="text" name='tokenResetPass' placeholder="Masukan token" className="input input-bordered w-full max-w-xs " required />
                {/* tampilan reset password anda */}
                {/* input text untuk memasukan password */}
                <label className="label mt-4">
                  <span className="label-text">Password Baru</span>
                </label>
                <input onChange={handleChangeTextFromDataUser} type="password" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs " required />
              </>
            )
          }
          <div className="card-actions justify-center mt-3">
            <button type='submit' className={`btn btn-primary ${tungguKode ? 'btn-disabled' : null}`}>
              {tungguKode ?
                <span className="loading loading-infinity loading-lg"></span>
                : btnTextSubmit}
            </button>
          </div>


        </div>

        <p>kembali ke halaman <Link href={'/'} className='link link-accent'>home</Link></p>
      </form>
    </div >
  )
}

