import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'ACHIEVEMENTS', href: '#achievements' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('HOME')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 backdrop-blur-xl bg-black/80 border-b border-[#1a1a1a]' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-display text-sm text-white group">
          <span className="text-[#00f5d4]">{'>'}</span>
          <span className="ml-1 group-hover:text-[#00f5d4] transition-colors">VK</span>
          <span className="text-[#00f5d4] animate-pulse">_</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`font-display text-xs tracking-widest transition-all duration-200 relative group ${
                  active === link.label ? 'text-[#00f5d4]' : 'text-gray-500 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#00f5d4] transition-all duration-300 ${
                    active === link.label ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Resume CTA */}
        <a
          href="https://drive.google.com/file/d/15uOcrrv9iTh4miC47VIfdgC8rxIg5x0p/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 font-display text-xs text-[#00f5d4] border border-[#00f5d4]/30 px-4 py-2 hover:bg-[#00f5d4]/10 transition-all duration-200 hover:border-[#00f5d4]"
        >
          <span>RESUME</span>
          <span>↓</span>
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#00f5d4]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-b border-[#1a1a1a]"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-xs tracking-widest text-gray-400 hover:text-[#00f5d4] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
