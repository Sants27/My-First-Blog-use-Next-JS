import React, { ReactNode } from "react";
import NavBar from "../components/Navbar";

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <main className="container relative top-0 mx-auto bg-zinc-950 min-h-screen">
      <NavBar />
      {children}
    </main>
  );
}
