"use client";

import React from "react";

// aturan props yang diterima Button
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { //  Bisa nerima semua atribut button standar,
  children: React.ReactNode;
  // children itu isi dari tombolnya
  // misal <Button>Ini Tombol</Button>
  // maka childrennya adalah "Ini Tombol"
  action: () => void;
}

export default function Button({ action, ...props }: ButtonProps) { // ..... itu spread operator
  // semua props tambahan yang dikirim ke <Button> bakal otomatis dikasih ke <button>
  // misal ada className, nah di kode selanjutnya
  // className ini bakal masuk ke elemen <button>.
  return <button onClick={() => action()} {...props} />;
}

/*Cara Button Client-Side Memanggil Server Action di Next.js
  Page.tsx → Memasukkan testServerAction ke dalam Button sebagai props
  Button.tsx → Menggunakan onClick untuk memanggil testServerAction
  testServerAction dipanggil dari client-side (karena onClick berjalan di client).
  Next.js → Mengirim request ke server untuk menjalankan testServerAction
  action.ts (server) → Menjalankan testServerAction dan menampilkan log di terminal
*/