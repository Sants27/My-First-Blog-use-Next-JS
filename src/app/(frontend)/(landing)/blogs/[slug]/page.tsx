import React from "react";
// jika ingin menggunakan inline Action Server, komen import ini
// import { testServerAction } from "./action";
// import Button from "@/app/(frontend)/components/Button";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";
import { Media } from "@/payload-types";
import Image from "next/image";
import { RichText } from "@payloadcms/richtext-lexical/react";

// Digunakan untuk mendapatkan parameter slug dari URL (dynamic route).
type BlogDetailProps = {
  params: Promise<{ slug: string }>;
};

async function getBlog(slug: string) {
  const blog = await (
    await getPayload({config: payloadConfig})
  ).find({
    collection: "posts",
    where: {
      slug: {
        equals: slug,
      },
    },
  });
  if (!blog.docs.length) {
    throw new Error("Blog not found");
  }

  return blog.docs[0];
}
export default async function BlogDetail({ params }: BlogDetailProps) {
  const slug = (await params).slug;
  
  const data = await getBlog(slug);
  // console.log(JSON.stringify(blog, null, 2));

  // Kode lama, langsung memanggil API Pokemon
  // const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");

  // const data = await response.json();

  // Server Action tanpa memanggil file, langsung dalam page (iniline)
  // async function testAction() {
  //   "use server";
  //   console.log("ini action dari server yang dipanggil oleh client dalam page");
  //   // Karena kode ini berjalan di server, pesan akan muncul
  //   // di terminal bukan di console browser.
  // }
  
  return (
    <div className="pt-24">
      {/* Kode Lama */}
      {/* <h1 className="text-4xl font-bold">Ini halaman detail blog {slug}</h1> */}
      {/* <code>Pokemon Name : {data?.name}</code> */}
      {/* ganti testAction jadi testServerAction jika ingin menggunakan action.ts (file tambahan) */}
      {/* <form action={testServerAction}>
        <button type="submit">Click Me</button>
      </form> */}
      {/* <Button action={testServerAction}>Ini Button Submit</Button> */}
      <h1 className="text-4xl font-bold mb-8">{data.title}</h1>
      <Image 
          src={(data.cover as Media).url ?? ""} 
          alt={(data.cover as Media).alt} 
          width={500} 
          height={500}
          className="w-full h-72 object-cover mb-6"
      />
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 text-center">
          <RichText 
              className="prose dark:prose-invert w-full max-w-none mx-auto text-left text-base md:text-lg leading-relaxed"
              data={data.content} 
          />
      </div>
    </div>
  );
}