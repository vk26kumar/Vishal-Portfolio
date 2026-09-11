import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, Check, Copy } from 'lucide-react'
import toast from 'react-hot-toast'
import { usePortfolio } from '../context/DataContext'

const navLinks = [
  { label: 'About', href: '#about', id: 'about', num: '01' },
  { label: 'Experience', href: '#experience', id: 'experience', num: '02' },
  { label: 'Work', href: '#projects', id: 'projects', num: '03' },
  { label: 'Skills', href: '#skills', id: 'skills', num: '04' },
  { label: 'Recognition', href: '#achievements', id: 'achievements', num: '05' },
  { label: 'Contact', href: '#contact', id: 'contact', num: '06' },
]

export default function Navbar() {
  const { portfolioData } = usePortfolio()
  const { personal } = portfolioData
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [copied, setCopied] = useState(false)

  // Scroll state + reading progress
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(y > 24)
      setProgress(max > 0 ? Math.min(y / max, 1) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // Reflect the section currently in view
  useEffect(() => {
    const sections = ['home', ...navLinks.map(l => l.id)]
      .map(id => document.getElementById(id))
      .filter(Boolean)
    if (!sections.length) return
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = e => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Recruiters look for an email first - make it one click, never a dead end
  const copyEmail = async () => {
    const email = personal?.email
    if (!email) return
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      toast.success('Email copied - ' + email)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = 'mailto:' + email
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,padding,border-color] duration-300 ${
          scrolled
            ? 'py-2.5 bg-bg/88 backdrop-blur-xl border-b border-line'
            : 'py-4 border-b border-transparent'
        }`}
      >
        {/* Reading progress */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-px w-full origin-left bg-accent"
          style={{ transform: `scaleX(${progress})`, opacity: scrolled ? 0.9 : 0 }}
        />

        <nav className="page-container flex items-center gap-6" aria-label="Primary">
          {/* Identity - full name, because a recruiter should never hunt for it */}
          <a href="#home" className="group shrink-0">
            <span className="block text-[14px] font-medium tracking-tight text-txt group-hover:text-accent transition-colors">
              Vishal Kumar
            </span>
            <span className="hidden sm:block font-mono text-[9.5px] tracking-[0.14em] uppercase text-faint">
              Full-stack <span className="text-line-strong">/</span> ML engineer
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-0.5 ml-auto">
            {navLinks.map(link => (
              <li key={link.id}>
                <a
                  href={link.href}
                  aria-current={active === link.id ? 'true' : undefined}
                  className={`relative flex items-baseline gap-1.5 px-3 py-2 font-mono text-[11.5px] tracking-[0.07em] uppercase transition-colors ${
                    active === link.id ? 'text-txt' : 'text-faint hover:text-muted'
                  }`}
                >
                  <span
                    className={
                      active === link.id ? 'text-accent' : 'text-line-strong'
                    }
                  >
                    {link.num}
                  </span>
                  {link.label}
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute left-3 right-3 -bottom-0.5 h-px bg-accent"
                      transition={{ duration: 0.25 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <button
              onClick={copyEmail}
              className="btn btn-ghost btn-sm"
              title={personal?.email}
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}
              {copied ? 'Copied' : 'Email'}
            </button>
            <a
              href={personal?.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent btn-sm"
            >
              Résumé <ArrowUpRight size={12} />
            </a>
          </div>

          <button
            onClick={() => setOpen(o => !o)}
            className="lg:hidden ml-auto text-txt p-1.5 -mr-1.5"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>
      </header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg/97 backdrop-blur-lg lg:hidden overflow-y-auto"
          >
            <div className="page-container pt-24 pb-12">
              <ul>
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.03 * i, duration: 0.28 }}
                    className="border-b border-line"
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 py-4"
                    >
                      <span className="font-mono text-[10px] text-faint">{link.num}</span>
                      <span
                        className={`text-xl tracking-tight ${
                          active === link.id ? 'text-accent' : 'text-txt'
                        }`}
                      >
                        {link.label}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={personal?.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn btn-accent"
                >
                  Résumé <ArrowUpRight size={13} />
                </a>
                <a href={'mailto:' + personal?.email} className="btn btn-ghost">
                  {personal?.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
