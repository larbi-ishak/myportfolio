import Link from "next/link"
import { Github,Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer (){
    return (
        <footer className="text-gray-500">
            <hr />
            <div className="flex my-2 justify-between ">
                <div className="">
                    2023 &copy; LARBI ISHAK
                </div>
                <div className="flex ">
                    <Link href={"/"} className="px-2 hover:text-zinc-800 transition ease-in duration-400"><Github /></Link>
                    <Link href={"/"} className="px-2 hover:text-zinc-800 transition ease-in duration-400"><Linkedin /></Link>
                    <Link href={"/"}  className="px-2 hover:text-zinc-800 transition ease-in duration-400"><Twitter /></Link>
                    <Link href={"/"} className="px-2 hover:text-zinc-800 transition ease-in duration-400"><Facebook /></Link>
                </div>
            </div>
        </footer>
    )
}