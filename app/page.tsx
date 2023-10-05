import { ModeToggle } from "@/components/toggle-theme";
import Link from "next/link";

export default function Home() {
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
          <Link href={"/"}>open source projects</Link> at free time.
        </p>
      </section>
      <section className="flex gap-x-3">
        <div className="flex flex-col gap-2">
          <div>GitHub</div>
          <div>Twitter</div>
        </div>
        <div className="flex gap-x-3">
          <div>LinkedIn</div>
          <div>Facebook</div>
        </div>
      </section>
      <ModeToggle />
    </main>
  );
}
