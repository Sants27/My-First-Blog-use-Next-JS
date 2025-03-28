"use client";

import React, { useActionState } from "react";
// useActionState → Hook dari Next.js yang digunakan untuk menangani form action langsung tanpa perlu useState.
import { submitBlog } from "../[slug]/action";
// Fungsi server action yang akan menerima data formulir ketika tombol submit ditekan. 

export default function BlogForm() {
  // objek kosong sebagai state awal yang nantinya akan diisi dengan response dari server.
  // Tidak digunakan untuk menyimpan data input secara lokal seperti useState.
  // berisi key-value dengan format key: string, value: string
  const initialState: Record<string, string> = {};

  const [state, action, isPending] = useActionState(submitBlog, initialState); // digunakan untuk menangani pengiriman form langsung ke server
  // const [formData, setFormData] = useState({
  //   title: "",
  //   description: "",
  // });

  /* 
  - Tidak seperti useState, yang menyimpan data sementara di sisi klien, useActionState langsung berkomunikasi dengan server
  - state → Menyimpan response dari server setelah form dikirim
  - action → Fungsi yang akan dijalankan saat form dikirim
  - isPending → Boolean yang menunjukkan apakah form sedang dikirim (untuk feedback ke pengguna)
  */

  return (
    // action={action} → Menghubungkan form dengan server action (submitBlog).
    // Form ini akan otomatis mengirim data ke server ketika tombol submit ditekan.
    <form action={action} className="flex flex-col gap-2 max-w-lg p-8">
      {/* 
        - action={action} memastikan bahwa form akan dikirim melalui server action `submitBlog`
        - action berasal dari useActionState(submitBlog, initialState), yang berarti form ini langsung memanggil submitBlog
        - Tidak perlu menambahkan event handler seperti onSubmit karena Next.js menangani semuanya di server
      */}
      {isPending ? "sedang mengirim..." : null} {/*Feedback ke user*/}
      {state?.message && <p className="text-green-500">{state.message}</p>}
      <label htmlFor="title">title</label>
      <input
        name="title"
        // onChange={(e) =>
        //   setFormData((current) => ({ ...current, title: e.target.value }))
        // }
        /*
          - onChange → event handler yang biasanya digunakan untuk memperbarui state saat user mengetik
          - setFormData akan memperbarui state dengan nilai terbaru
          - { ...current, title: e.target.value } → memastikan state tetap memiliki data sebelumnya (...current)
            sambil memperbarui title dengan nilai baru
          - Namun, karena kita menggunakan Server Actions, kita tidak perlu menyimpan data input di state lokal
          - Sebagai gantinya, input akan dikirim otomatis ke server berdasarkan atribut `name`
          - onChange digunakan ketika kita ingin menyimpan input ke dalam state sebelum dikirim ke server
        */
        className="bg-zinc-800 text-white p-2 rounded border border-zinc-700"
        type="text"
      />
      <label htmlFor="description">description</label>
      <input
        name="description"
        // onChange={(e) =>
        //   setFormData((current) => ({
        //     ...current,
        //     description: e.target.value,
        //   }))
        // }
        className="bg-zinc-800 text-white p-2 rounded border border-zinc-700"
        type="text" 
      />
      <button
        className="p-2 font-bold bg-zinc-800 cursor-pointer"
        type="submit"
      >
        Submit
      </button>
      {/* Proses yang terjadi saat user mengisi form dan menekan tombol Kirim:
          1. Form mengirim data ke server melalui `submitBlog`.
          2. Server menerima data dan memprosesnya.
          3. Jika berhasil, server mengembalikan respons.
          4. Jika ada kesalahan, pesan error akan muncul di console. 
    
        - Kalau hanya ingin menyimpan input (tanpa validasi), pilih salah satu useState atau useActionState
        - Kalau ingin validasi dulu sebelum submit, maka bisa pakai keduanya*/}
    </form>
  );
}
