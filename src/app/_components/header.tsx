import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="container mx-auto px-4 w-full py-8 flex justify-between">
        <Link href={"/"}>Home</Link>
        <Link href={"/tours"} >Tours</Link>
      </nav>
    </header>
  )
}