import React from "react";

type BlogDetailProps = {
  params: {
    slug: string;
  };
};

export default async function BlogDetail({ params }: BlogDetailProps) {
  const slug = (await params).slug;

  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");

  const data = await response.json();
  return (
    <div>
      <h1 className="text-4xl font-bold">Ini halaman detail blog {slug}</h1>
      <code>Pokemon Name : {data?.name}</code>
    </div>
  );
}