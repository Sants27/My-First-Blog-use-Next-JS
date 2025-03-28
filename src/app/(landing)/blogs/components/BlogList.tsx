import Image from "next/image";
import Link from "next/link";
import React from "react";

const posts = [
  {
    id: 1,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae elit imperdiet ultricies.",
    cover: "https://picsum.photos/seed/picsum/200/300",
    slug: "lorem-ipsum",
  },
  {
    id: 2,
    title: "Dolor Sit Amet",
    description:
      "Dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae elit imperdiet ultricies.",
    cover: "https://picsum.photos/seed/picsum/200/300",
    slug: "dolor-sit-amet",
  },
  {
    id: 3,
    title: "Consectetur Adipiscing",
    description:
      "Consectetur adipiscing elit. Donec nec odio vitae elit imperdiet ultricies.",
    cover: "https://picsum.photos/seed/picsum/200/300",
    slug: "consectetur-adipiscing",
  },
];

export default function BlogList() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 pb-8">
      <h2 className="text-4xl lg:col-span-3 font-bold px-8">Blogs</h2>
      {posts.map((post) => {
        return (
          <article
            key={post.id}
            className="space-y-4 hover:bg-zinc-800 container p-8 rounded-xl transition-colors cursor-pointer"
          >
            <Image
              className="w-full object-cover h-56"
              src={post.cover ?? ""}
              alt={post.title}
              width={300}
              height={300}
            />
            <time className="text-zinc-500 p-0 h-fit border-l-2 border-zinc-500 pl-4 block">
              2 Januari 2025
            </time>
            <h3 className="font-bold">{post.title}</h3>
            <p className="text-zinc-400 text-sm">{post.description}</p>
            <Link href={`/blogs/${post.slug}`} className="text-cyan-400 text-sm">
              Baca selengkapnya
            </Link>
          </article>
        );
      })}
    </section>
  );
}
