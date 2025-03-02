"use client";

import React, { useActionState } from "react";
import { submitBlog } from "../[slug]/action";

export default function BlogForm() {
  const initialState: Record<string, string> = {};
  const [state, action, isPending] = useActionState(submitBlog, initialState);  // submitBlog digunakan dengan useActionState, menghubungkannya menjadi server action
  // const [formData, setFormData] = useState({
  //   title: "",
  //   description: "",
  // });
  // Kita tidak perlu state untuk simpan informasi dari form, karena otomatis dihandle oleh form action

  return (
    <form action={action} className="flex flex-col gap-2 max-w-lg p-8">
        {isPending ? "sedang submit" : null}
      <label htmlFor="title">title</label>
      <input
        name="title"
        // onChange={(e) =>
        //   setFormData((current) => ({ ...current, title: e.target.value }))
        // }
        // kita tidak perlu onChange, cukup tambahkan attribute "name" agar datanya terkirim ke server action
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
        // kita tidak perlu onChange, cukup tambahkan attribute "name" agar datanya terkirim ke server action
        className="bg-zinc-800 text-white p-2 rounded border border-zinc-700"
        type="text"
      />
      <button
        className="p-2 font-bold bg-zinc-800 cursor-pointer"
        type="submit"
      >
        Submit
      </button>
      {/* Ketika user mengisi form dan menekan Submit, maka:

        - Form akan memanggil server action submitBlog.
        - Data form akan dikirimkan ke submitBlog dan diproses.
        - Jika API berhasil di-fetch, response akan dikembalikan.
        - Jika ada error, akan ditampilkan di console.*/}
    </form>
  );
}
