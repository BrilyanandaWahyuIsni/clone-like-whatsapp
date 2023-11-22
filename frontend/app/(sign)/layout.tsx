"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SignLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()

  axios.get('http://localhost:3210/user/auth', { withCredentials: true })
    .then(() => router.replace("/home"))
    .catch(() => setLoading(false))

  return (
    <div className="flex justify-center items-center min-h-screen p-5">
      {
        loading
          ? <span className="loading loading-bars loading-lg"></span>
          : children
      }
    </div>
  )
}