import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "@/components/container";
import { Github } from "lucide-react";

export default function Resume() {
  return (
    <main>
      <section className="grid gap-y-6">
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

      <section className="flex mt-4 gap-x-2">
        <Button>Download Resume ↓</Button>
        <Button>View Resume →</Button>
      </section>
      <section>
        <h1 className="mt-3 underline text-2xl">Work Experience</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Container>
            <div className="py-4 px-4 flex flex-col">
              <div className="flex justify-center">
                <Github />
              <p className="ml-6 text-zinc-400"><Link className="underline" target="blank" href={"https://www.ambinternationale.com"}>AMB International</Link></p>
              </div>
              <div className="p-4">
                <h3 className="text-zinc-400">Software Engineer</h3>
                <ul style={{listStyleType: "disc"}}>
                    <li>implement something</li>
                    <li>implement something</li>
                    <li>implement something</li>
                    <li>implement something</li>
                </ul>
              </div>
            </div>
          </Container>
          <Container>
            <div className="py-4 px-4 flex flex-col">
              <div className="flex justify-center">
                <Github />
              <p className="ml-6 text-zinc-400"><Link className="underline" target="blank" href={"https://www.ambinternationale.com"}>AMB International</Link></p>
              </div>
              <div className="p-4">
                <h3 className="text-zinc-400">Software Engineer</h3>
                <ul style={{listStyleType: "disc"}}>
                    <li>implement something</li>
                    <li>implement something</li>
                    <li>implement something</li>
                    <li>implement something</li>
                </ul>
              </div>
            </div>
          </Container>
          <Container>
            <div className="py-4 px-4 flex flex-col">
              <div className="flex justify-center">
                <Github />
              <p className="ml-6 text-zinc-400"><Link className="underline" target="blank" href={"https://www.ambinternationale.com"}>AMB International</Link></p>
              </div>
              <div className="p-4">
                <h3 className="text-zinc-400">Software Engineer</h3>
                <ul style={{listStyleType: "disc"}}>
                    <li>implement something</li>
                    <li>implement something</li>
                    <li>implement something</li>
                    <li>implement something</li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
      </section>
    </main>
  );
}
