'use client'
import Link from "next/link"
import React, { Suspense, lazy, useState } from "react"

const WarningLogin = lazy(() => import("../../component/warningContainer"));

export default function LoginPage() {
  // set untuk menampilkan warning saat email atau password salah
  const [ceckAuth, setCekAuth] = useState<boolean>(false)


  return (
    <div className="card w-96 bg-base-100 shadow-xl glass">
      <div className="card-body flex items-center">
        <h2 className="card-title">Login Page</h2>

        {/* warning login jika email atau password salah */}
        {
          ceckAuth ?
            (<Suspense fallback={(<div>loading...</div>)}>
              <WarningLogin warningteks="username atau sandi anda salah!" />
            </Suspense>) : null
        }

        {/* bagian dari formulir signin */}
        <div className="form">

          {/* text input dari username atau email */}
          <label className="label flex flex-col w-full pt-0 ">
            <span className="label-text w-full text-left text-base text-lime-100 p-1">Username atau email : </span>
            <input type="text" placeholder="Username atau Email" className="input input-bordered input-info w-full max-w-xs" />
          </label>

          {/* text input dari password */}
          <label className="label flex flex-col w-full pt-0 ">
            <span className="label-text w-full text-left text-base text-lime-100 p-1"> Password : </span>
            <input type="password" placeholder="Password" className="input input-bordered input-info w-full max-w-xs" />
          </label>

          {/* keterangan lupa password dan link menuju halaman lupa password */}
          <div className="w-full text-center">lupa password? <Link className="link link-accent" href={'/resetpass'}>reset password</Link></div>

          {/* button masuk halaman */}
          <div className="card-actions mt-5 w-full justify-center">
            <button className="btn btn-primary">Masuk</button>
          </div>

        </div>

        <p>
          Belum punya akun? <Link href={'/signup'} className="link link-accent">daftar</Link> sekarang
        </p>
      </div>
    </div>
  )
}