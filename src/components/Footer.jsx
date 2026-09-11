import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { usePortfolio } from '../context/DataContext'

export default function Footer() {
  const navigate = useNavigate()
  const { portfolioData } = usePortfolio()
  const [clicks, setClicks] = useState(0)

  // Hidden entry point: three clicks on the dot opens the CMS
  const handleSecretClick = () => {
    const next = clicks + 1
    setClicks(next)
    if (next >= 3) {
      setClicks(0)
      navigate('/admin')
    }
  }

  return (
    <footer className="relative border-t border-line">
      <div className="page-container py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-mono text-[12px] tracking-tight text-txt">
            Vishal Kumar<span className="text-accent">.</span>
          </p>
          <p className="mt-1.5 text-[12px] text-faint">
            © {new Date().getFullYear()} - Designed &amp; built from scratch.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={portfolioData.personal?.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10.5px] tracking-[0.12em] uppercase text-faint hover:text-txt transition-colors"
          >
            Résumé
          </a>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 font-mono text-[10.5px] tracking-[0.12em] uppercase text-faint hover:text-txt transition-colors"
          >
            Top <ArrowUp size={11} />
          </a>
        </div>
      </div>

      <button
        onClick={handleSecretClick}
        className="admin-trigger"
        aria-label="Admin access"
      />
    </footer>
  )
}
