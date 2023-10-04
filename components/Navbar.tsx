'use client'

export default function Navbar (){
    return (
        <nav className="flex  justify-between">
            <h1 className="text-xl underline decoration-4">LARBI ISHAK</h1>
            <div className="rounded-full px-2 py-2 border-2 border-solid border-gray-400 hover:shadow-md hover:shadow-gray-400 ease-in-out duration-300">
                <a className="m-4" href="/blog">Blog</a>
                <a className="m-4"href="/projects">Projects</a>
                <a className="m-4"href="/contact">Contact</a>
                <a className="m-4"href="/resume">Resume</a>
            </div>
        </nav>
    )
}