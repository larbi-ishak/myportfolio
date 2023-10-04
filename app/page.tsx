import { ModeToggle } from "@/components/toggle-theme";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Software Developer @internationl</p>
      <h3>fine me online</h3>
      {/*  cards here*/}

      <ModeToggle />
    </main>
  )
}
