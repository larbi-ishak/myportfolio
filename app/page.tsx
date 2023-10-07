import Link from "next/link";
import Container from "@/components/container";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  const Links = [
    {
      icon: Github,
      username: "larbi-ishak",
      url: "https://github.com/larbi-ishak",
    },
    {
      icon: Twitter,
      username: "LARBIIshak3",
      url: "https://twitter.com/LARBIIshak3",
      color: "blue"
    }
  ]
  const vLinks = [
    {
      icon: Linkedin,
      username: "LARBI ISHAk",
      url: "https://www.linkedin.com/in/larbishak",
      color: ""
    },
    {
      icon: Facebook,
      username: "Larbi Isha",
      url: "https://www.facebook.com/ishak.larbi.94",
    }
  ]
  return (
    <main className="p-5">
      <section className="grid gap-y-6">
        <h2 className="sr-only tracking-tight font-bold text-4xl">About</h2>
        <p className="col-span-3">
          Software Developer{" "}
          <Link
            className="underline"
            href={"https://www.ambinternationale.com/"}
          >
            @AMB International
          </Link>{" "}
          proficient in the Back End stack. Interested in building software,
          design systems, user experience, and tooling. Working on Freelance and{" "}
          <Link className="underline" href={"/"}>
            open source projects
          </Link>{" "}
          at free time.
        </p>
      </section>
      <section className="flex mt-8 gap-x-3">
        <div className="flex flex-col gap-2">
          <Container>
            <div className="py-4 px-4 flex items-center justify-between w-80">
              <div className="flex">
                <Github />
                <p className="ml-4 text-zinc-400">@larbi-ishak</p>
              </div>
              <div><Link href={"https://github.com/larbi-ishak"}><Button className="rounded-full">Follow</Button></Link></div>
            </div>
        </Container>
          <Container>
            <div className="py-4 px-4 flex items-center justify-between w-80">
              <div className="flex">
                <Image src={"/twitter.svg"} width={60} height={60} alt={"Example SVG"} className="p-0 m-0" />
                <p className="ml-4 text-zinc-400">@LARBIIshak3</p>
              </div>
              <div><Link href={"https://twitter.com/LARBIIshak3"}><Button className="rounded-full">Follow</Button></Link></div>
            </div>
        </Container>
        </div>
        <div className="flex gap-x-3">
          <Container>
            <div className="py-4 px-4 flex flex-col justify-evenly ">
              <div className="flex">
                <Facebook color="#4267B2"/>
                <p className="ml-4 text-zinc-400">Larbi Ishak</p>
              </div>
              <div><Link href={"https://www.facebook.com/ishak.larbi.94"}><Button style={{backgroundColor: "#4267B2"}} className="rounded-full self-center">Follow</Button></Link></div>
            </div>
          </Container>
        </div>
      </section>
    </main>
  );
}
