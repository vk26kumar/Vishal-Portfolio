import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Footer() {
  const navigate = useNavigate()
  const [clickCount, setClickCount] = useState(0)

  // Secret admin trigger - click the dot 3 times
  const handleSecretClick = () => {
    const newCount = clickCount + 1
    setClickCount(newCount)
    if (newCount >= 3) {
      setClickCount(0)
      navigate('/admin')
    }
  }

  return (
    <footer className="border-t border-[#1a1a1a] py-10 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display text-xs text-gray-600">
            {'>'} VISHAL KUMAR <span className="text-[#00f5d4]">_</span>
          </span>
          <span className="font-display text-[10px] text-gray-700">
            © {new Date().getFullYear()} — Designed & Built with ❤️
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span className="font-display text-[10px] text-gray-700 tracking-widest">
            FULL STACK · AI/ML · REACT NATIVE
          </span>
          <a
            href="#home"
            className="font-display text-[10px] text-gray-600 hover:text-[#00f5d4] transition-colors tracking-widest"
          >
            BACK TO TOP ↑
          </a>
        </div>
      </div>

      {/* Hidden admin trigger - tiny dot in bottom-left */}
      <button
        onClick={handleSecretClick}
        className="admin-trigger"
        title=""
        aria-label="hidden"
      />
    </footer>
  )
}
