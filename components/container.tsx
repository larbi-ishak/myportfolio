

export default function Container({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <div className="border border-zinc-200 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-clip  hover:shadow-lg transition" >
            {children}
        </div>
    )
}