'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'Registration', href: '#registration' },
  { label: 'Organizers', href: '#organizers' },
  { label: 'Venue', href: '#venue' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 bg-ieee-blue rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold leading-tight text-center">IEEE<br/>R8</span>
            </div>
            <div className="leading-tight">
              <span className="text-lg font-bold text-gray-900 group-hover:text-ieee-blue transition-colors">ASYP 2027</span>
              <span className="hidden sm:block text-xs text-gray-500">Africa Congress · Kigali</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-ieee-blue rounded-md transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-ieee-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
              </a>
            ))}
            <a
              href="#registration"
              className="ml-4 px-4 py-2 bg-ieee-blue hover:bg-ieee-dark text-white text-sm font-semibold rounded-lg transition-colors duration-200 shadow-sm"
            >
              Register Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:text-ieee-blue hover:bg-ieee-light rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 pb-1">
              <a
                href="#registration"
                onClick={() => setOpen(false)}
                className="block text-center px-4 py-3 bg-ieee-blue hover:bg-ieee-dark text-white font-semibold rounded-lg transition-colors"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
