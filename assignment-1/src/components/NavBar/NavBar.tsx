import React, { useState } from "react"
import { Menu, X } from "lucide-react"

type NavItem = {
  name: string
  href: string
}

const navLinks: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f172a] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-xl font-bold text-blue-400">MyBrand</div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-blue-400 transition"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Hamburger Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(true)}>
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay & Drawer */}
      {isOpen && (
        <>

          {/* Drawer */}
          <div className="fixed top-0 right-0 h-full w-64 bg-[#1e293b] z-50 shadow-lg p-6 flex flex-col gap-6 transition-transform duration-300 transform translate-x-0">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-blue-400">Menu</span>
              <button onClick={() => setIsOpen(false)}>
                <X size={24} />
              </button>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-blue-400 text-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default NavBar
