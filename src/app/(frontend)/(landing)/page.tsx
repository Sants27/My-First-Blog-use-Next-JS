import Image from "next/image";
import Logo from "@/assets/images/logo-circle.png";
import InstagramIcon from "@/assets/icons/instagram";
import LinkedinIcon from "@/assets/icons/linkedin";
import FacebookIcon from "@/assets/icons/facebook";
import GithubIcon from "@/assets/icons/github";
import BlogList from "./blogs/components/BlogList";
import BlogForm from "./blogs/components/BlogForm";
export default function Home() {
  return (
    <>
      <section className="space-y-8 p-8 pt-12">
        <Image className="w-32" src={Logo} alt="logo blog cat" width={500} height={500} />
        <h1 className="text-6xl font-bold max-w-4xl">Software Enginer, Designer, and Content Creator</h1>
        <p className="text-zinc-400 max-w-2xl">Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Maiores recusandae officiis totam corrupti obcaecati autem cumque
        at et soluta, repellendus optio pariatur repellat, ipsam eum, nobis illo magnam
        deleniti? Iusto!</p>
        <div className="flex gap-6 *:w-8 fill-zinc-500">
          <GithubIcon />
          <InstagramIcon />
          <LinkedinIcon />
          <FacebookIcon />
        </div>
      </section>
      <BlogList />
      <BlogForm />
    </>
  );
}
