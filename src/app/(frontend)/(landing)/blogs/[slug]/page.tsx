import React from "react";
// jika ingin menggunakan inline Action Server, komen import ini
import { testServerAction } from "./action";
import Button from "@/app/components/Button";

// Digunakan untuk mendapatkan parameter slug dari URL (dynamic route).
type BlogDetailProps = {
  params: {
    slug: string;
  };
};

export default async function BlogDetail({ params }: BlogDetailProps) {
  const slug = (await params).slug;

  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");

  const data = await response.json();

  // Server Action tanpa memanggil file, langsung dalam page (iniline)
  // async function testAction() {
  //   "use server";
  //   console.log("ini action dari server yang dipanggil oleh client dalam page");
  //   // Karena kode ini berjalan di server, pesan akan muncul
  //   // di terminal bukan di console browser.
  // }
  
  return (
    <div>
      <h1 className="text-4xl font-bold">Ini halaman detail blog {slug}</h1>
      <code>Pokemon Name : {data?.name}</code>
      {/* ganti testAction jadi testServerAction jika ingin menggunakan action.ts (file tambahan) */}
      {/* <form action={testServerAction}>
        <button type="submit">Click Me</button>
      </form> */}
      <Button action={testServerAction}>Ini Button Submit</Button>
    </div>
  );
}