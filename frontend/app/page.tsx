'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import whatsappImg from '../public/img/whatsapp.png';

export default function Home(): React.ReactNode {
  // inisiasi use router
  const router = useRouter();

  // fungsi pergi ke halaman login
  function handleLogin(): void {
    router.replace('/login');
  }

  // fungsi pergi ke halaman signup
  function handleSignup(): void {
    router.push('/signup');
  }

  return (
    <main className='flex justify-center items-center h-[100vh]'>
      {/* tampilan awal saat masuk halaman */}
      <div className="card w-96 bg-lime-700 glass">
        <figure><Image src={whatsappImg} alt='whatsapp image' /></figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Clone Whatsapp</h2>
          <p>Ini adalah aplikasi uji coba saya</p>
          <div className="card-actions">
            <button onClick={handleLogin} className="btn btn-accent ">Login</button>
            <button onClick={handleSignup} className="btn  btn-neutral">SignUp</button>
          </div>
        </div>
      </div>
    </main>
  );
}
