'use client';
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
import WarningLogin from "../../component/warningContainer";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface LoginData {
  email: string;
  password: string;
}

export default function LoginPage() {
  // set untuk menampilkan warning saat email atau password salah
  const [ceckAuth, setCekAuth] = useState<boolean>(false);
  // useState loading button if send request to server
  const [loadingBtn, setLoadingBtn] = useState<boolean>(false);
  const [alertText, setAlertText] = useState<string>("");
  const [isAlertError, setIsAlertError] = useState<boolean>(true);

  // setup router next navigatiosn
  const router = useRouter();

  // useState for form login
  const [loginData, setLoginData] = useState<LoginData>({
    email:    "",
    password: ""
  });

  // function on change text input and create to loginData
  const handleLoginData = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setLoginData(prevValue => ({ ...prevValue, [name]: value }));
  };

  // function go to home page if on click buttom "masuk"
  const handleLoginDataToHomePage = (event: FormEvent) => {
    event.preventDefault();
    setLoadingBtn(true);

    axios.post("http://localhost:3210/user/signin", {
      ...loginData
    })
      .then(value => {
        setCekAuth(true);
        setIsAlertError(false);
        setAlertText("Sukses login.");
        Cookies.set("adnanid", value.data.msg.value);
        router.replace('/home');
      })
      .catch(() => {
        setCekAuth(true);
        setIsAlertError(true);
        setAlertText("Email atau Password anda salah!");
      })
      .finally(() => {
        setLoadingBtn(false);
      });
  };


  return (
    <div className="card w-96 bg-green-900 shadow-xl glass">
      <div className="card-body flex items-center">
        <h2 className="card-title">Login Page</h2>

        {/* warning login jika email atau password salah */}
        {
          ceckAuth
            ? <WarningLogin warningteks={alertText} isError={isAlertError} />
            : null
        }

        {/* bagian dari formulir signin */}
        <form onSubmit={handleLoginDataToHomePage} method="post" className="form form-control">

          {/* text input dari username atau email */}
          <label className="label flex flex-col w-full pt-0 ">
            <span className="label-text w-full text-left text-base text-lime-100 p-1">Email : </span>
            <input onChange={handleLoginData} value={loginData.email} type="email" name="email" placeholder="Email" className="input input-bordered input-info w-full max-w-xs" required />
          </label>

          {/* text input dari password */}
          <label className="label flex flex-col w-full pt-0 ">
            <span className="label-text w-full text-left text-base text-lime-100 p-1"> Password : </span>
            <input onChange={handleLoginData} value={loginData.password} type="password" name="password" placeholder="Password" className="input input-bordered input-info w-full max-w-xs" required />
          </label>

          {/* keterangan lupa password dan link menuju halaman lupa password */}
          <div className="w-full text-center">lupa password? <Link className="link link-accent" href={'/resetpass'}>reset password</Link></div>

          {/* button masuk halaman */}
          {
            isAlertError &&
            <div className="card-actions mt-5 w-full justify-center">
              {
                loadingBtn
                  ? <span className="loading loading-infinity loading-lg"></span>
                  : <button type="submit" className="btn btn-primary">Masuk</button>
              }
            </div>
          }

        </form>

        <p>
          Belum punya akun? <Link href={'/signup'} className="link link-accent">daftar</Link> sekarang
        </p>
      </div>
    </div>
  );
}