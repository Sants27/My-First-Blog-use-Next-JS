import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="absolute top-12 right-12">
      <ul className="flex gap-8 *:underline *:text-cyan-500 *:hover:text-cyan-400">
        <li>
          <Link prefetch href={"/"}>Home</Link>
        </li>
        <li>
          <Link prefetch href={"/blogs"}>Blogs</Link>
        </li>
      </ul>
    </nav>
  );
}
