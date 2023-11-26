"use client";
import Link from "next/link";
import { PhoneValidator } from "../../component/phonevalidator";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import WarningLogin from "../../component/warningContainer";


interface DataNewMember {
  "email": string;
  "username": string;
  "noTelp": string;
  "kelamin": string;
  "password": string;
}

export default function Page() {
  const [dataNewMember, setDataNewMember] = useState<DataNewMember>({
    "email":    '',
    "username": '',
    "noTelp":   '',
    "kelamin":  '',
    "password": ''
  });

  // usestate untuk error saat mengirimkan data
  const [showError, setShowError] = useState<boolean>(false);
  // usestate waiting send data to server bottom
  const [shownBtnDaftar, setShownBtnDaftar] = useState<boolean>(true);
  // useState isi pesan error
  const [mainErrorMsg, setMainErrorMsg] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  // fungsi untuk submit
  const handleSubmitNewMembers = (event: FormEvent) => {
    event.preventDefault();
    setShownBtnDaftar(false);

    // fungsi memanggil server
    axios.post("http://localhost:3210/user/signup", {
      ...dataNewMember
    })
      .then(() => {
        setShowError(true);
        setIsError(false);
        setMainErrorMsg("Account berhasil dibuat!");
      })
      .catch(error => {
        setShowError(true);
        setIsError(true);
        if (error.response.status === 400) {
          setMainErrorMsg("Email atau username sudah pernah digunakan!");
        } else {
          setMainErrorMsg("Periksa kembali data anda!");
        }
      })
      .finally(() => {
        setShownBtnDaftar(true);
      });
  };


  // merubah data
  const handleChangeInputEmail = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    setDataNewMember((prevData) => {
      return { ...prevData, [`${name}`]: value };
    });
  };
  const getNumber = (event: number) => {
    setDataNewMember(prev => ({ ...prev, noTelp: event.toString() }));
  };

  return (
    <div className="card w-96 shadow-xl bg-green-950 glass">


      {/* isi pesan */}
      <div className="card-body flex items-center ">
        <h2 className="card-title text-white">Sign Up Page</h2>

        {/* error */}
        {showError &&
          <WarningLogin warningteks={mainErrorMsg} isError={isError} />
        }
        {/* bagian dari formulir signup */}
        <form method="post" className="form form-control" onSubmit={handleSubmitNewMembers}>

          {/* text input dari email */}
          <label className="label flex flex-col w-full pt-0 ">
            <span className="label-text w-full text-left text-base text-lime-100 p-1">Email : </span>
            <input value={dataNewMember.email} onChange={handleChangeInputEmail} type="email" name="email" placeholder="email..." className="input input-bordered input-info w-full max-w-xs" required />
          </label>

          {/* text input dari username */}
          <label className="label flex flex-col w-full pt-0 ">
            <span className="label-text w-full text-left text-base text-lime-100 p-1">Username : </span>
            <input value={dataNewMember.username} onChange={handleChangeInputEmail} type="username" name="username" placeholder="username..." className="input input-bordered input-info w-full max-w-xs" required />
          </label>

          {/* text input dari nomor telpon */}
          <label className="label flex flex-col w-full pt-0 ">
            <span className="label-text w-full text-left text-base text-lime-100 p-1">No. Telpon : </span>
            <PhoneValidator sendPhone={getNumber} />
          </label>

          {/* seleksi dari Jenis Kelamin */}
          <label className="label flex flex-col w-full pt-0 ">
            <span className="label-text w-full text-left text-base text-lime-100 p-1">Jenis Kelamin : </span>
            <select value={dataNewMember.kelamin} onChange={handleChangeInputEmail} name="kelamin" className="select select-info w-full">
              <option value='' disabled selected>- Pilih Salah Satu -</option>
              <option value="L">Laki-laki</option>
              <option value="W">Wanita</option>
            </select>
          </label>


          {/* text input dari password */}
          <label className="label flex flex-col w-full pt-0 ">
            <span className="label-text w-full text-left text-base text-lime-100 p-1">Password : </span>
            <input value={dataNewMember.password} onChange={handleChangeInputEmail} name="password" type="password" placeholder="password..." className="input input-bordered input-info w-full max-w-xs" required />
          </label>


          <div className="card-actions justify-center mt-3">
            {
              shownBtnDaftar
                ? <button type="submit" className="btn btn-primary">Daftar</button>
                : <span className="loading loading-infinity loading-lg"></span>
            }
          </div>

        </form>
        <p>
          Sudah punya akun? <Link href={'/login'} className="link link-accent">Login</Link> sekarang
        </p>
      </div>

    </div>
  );
}