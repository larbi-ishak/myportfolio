import { ModeToggle } from "@/components/toggle-theme";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-5">
      <section className="grid gap-y-6">
        <h2 className="sr-only tracking-tight font-bold text-4xl">About</h2>
        <p className="text-zinc-600 col-span-3">
          Software Developer{" "}
          <Link
            className="underline"
            href={"https://www.ambinternationale.com/"}
          >
            @AMB International
          </Link>{" "}
          proficient in the Back End stack. Interested in building software,
          design systems, user experience, and tooling. Working on Freelance and{" "}
          <Link href={"/"}>open source projects</Link> at free time.
        </p>
      </section>
      <section className="flex">
        <div className="flex flex-col">
          <div>Github</div>
          <div>Github</div>
        </div>
        <div className="flex ">

          <div>Github</div>
          <div>Github</div>
        </div>
      </section>
      <section className="flex">
        <div className="text-sm flex flex-wrap gap-x-2 border border-zinc-200 px-4 rounded-full shadow-sm hover:shadow-md transition">
          facebook
        </div>
        <div className="text-sm flex flex-wrap gap-x-2 border border-zinc-200 px-4 rounded-full shadow-sm hover:shadow-md transition">
          facebook
        </div>
      </section>
      <ModeToggle />
    </main>
  );
}
