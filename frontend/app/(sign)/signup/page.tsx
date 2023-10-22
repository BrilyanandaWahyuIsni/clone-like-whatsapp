import Link from "next/link";
import { PhoneValidator } from "../../component/phonevalidator";

export default function Page() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl glass">
      {/* <figure><Image src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
      <div className="card-body flex items-center ">
        <h2 className="card-title">Sign Up Page</h2>

        {/* bagian dari formulir signup */}
        <div className="form-control">

          {/* text input dari email */}
          <label className="label flex flex-col w-full pt-0 ">
            <span className="label-text w-full text-left text-base text-lime-100 p-1">Email : </span>
            <input type="email" placeholder="email..." className="input input-bordered input-info w-full max-w-xs" />
          </label>

          {/* text input dari username */}
          <label className="label flex flex-col w-full pt-0 ">
            <span className="label-text w-full text-left text-base text-lime-100 p-1">Username : </span>
            <input type="username" placeholder="username..." className="input input-bordered input-info w-full max-w-xs" />
          </label>

          {/* text input dari nomor telpon */}
          <label className="label flex flex-col w-full pt-0 ">
            <span className="label-text w-full text-left text-base text-lime-100 p-1">No. Telpon : </span>
            <PhoneValidator />
          </label>

          {/* seleksi dari Jenis Kelamin */}
          <label className="label flex flex-col w-full pt-0 ">
            <span className="label-text w-full text-left text-base text-lime-100 p-1">Jenis Kelamin : </span>
            <select className="select select-info w-full">
              <option disabled selected>- Pilih Salah Satu -</option>
              <option>Laki-laki</option>
              <option>Wanita</option>
            </select>
          </label>


          {/* text input dari password */}
          <label className="label flex flex-col w-full pt-0 ">
            <span className="label-text w-full text-left text-base text-lime-100 p-1">Password : </span>
            <input type="password" placeholder="password..." className="input input-bordered input-info w-full max-w-xs" />
          </label>

          {/* text input dari re-password */}
          <label className="label flex flex-col w-full pt-0 ">
            <span className="label-text w-full text-left text-base text-lime-100 p-1">Re-Password : </span>
            <input type="password" placeholder="re-password..." className="input input-bordered input-info w-full max-w-xs" />
          </label>


          <div className="card-actions justify-center mt-3">
            <button className="btn btn-primary">Masuk</button>
          </div>

        </div>
      <p>
          Sudah punya akun? <Link href={'/login'} className="link link-accent">Login</Link> sekarang
        </p>
      </div>

    </div>
  )
}