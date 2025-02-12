import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Your Name
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="#about" className="text-gray-600 hover:text-gray-800">
              About
            </Link>
            <Link href="#projects" className="text-gray-600 hover:text-gray-800">
              Projects
            </Link>
            <Link href="#skills" className="text-gray-600 hover:text-gray-800">
              Skills
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

