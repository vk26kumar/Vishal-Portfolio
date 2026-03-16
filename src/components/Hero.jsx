import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Download } from 'lucide-react'
import { usePortfolio } from '../context/DataContext'

function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId, particles = [], W, H

    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * W; this.y = Math.random() * H
        this.size = Math.random() * 1.5 + 0.2
        this.speedX = (Math.random() - 0.5) * 0.4; this.speedY = (Math.random() - 0.5) * 0.4
        this.opacity = Math.random() * 0.5 + 0.1
        this.color = Math.random() > 0.6 ? '#00f5d4' : Math.random() > 0.5 ? '#7c3aed' : '#ffffff'
      }
      update() {
        this.x += this.speedX; this.y += this.speedY
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset()
      }
      draw() {
        ctx.save(); ctx.globalAlpha = this.opacity; ctx.fillStyle = this.color
        ctx.shadowBlur = 6; ctx.shadowColor = this.color
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill(); ctx.restore()
      }
    }

    for (let i = 0; i < 120; i++) particles.push(new Particle())

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => { p.update(); p.draw() })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.save(); ctx.globalAlpha = (1 - dist / 100) * 0.08
            ctx.strokeStyle = '#00f5d4'; ctx.lineWidth = 0.5
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke(); ctx.restore()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.6 }} />
}

export default function Hero() {
  const { portfolioData } = usePortfolio()
  const { personal, social, projects, achievements, certifications, education, experience } = portfolioData

  // ── Live computed stats ──────────────────────────────────────────
  const cgpaEntry = (education || []).find(e => e.type === 'cgpa')
  const cgpaValue = cgpaEntry ? cgpaEntry.score.split(' ')[0] : '—'
  const stats = [
    { value: cgpaValue, label: 'CGPA' },
    { value: `${(projects || []).length}+`, label: 'PROJECTS' },
    { value: `${(experience || []).length}+`, label: 'INTERNSHIPS' },
    { value: `${(achievements || []).length}+`, label: 'AWARDS' },
  ]

  const taglines = (personal?.taglines || ['Full Stack Developer']).filter(Boolean)
  const sequence = taglines.flatMap(t => [t, 2000])
  const heroSocials = (social || []).slice(0, 5).map(s => ({
    href: s.href, label: s.label.slice(0, 2).toUpperCase(), tooltip: s.label,
  }))

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } } }
  const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleCanvas />
      <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(0,245,212,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,212,0.03) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0,245,212,0.04) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="flex items-center gap-3 mb-8">
            <span className="flex items-center gap-2 font-display text-xs text-[#00f5d4]/80 tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#00f5d4] animate-pulse shadow-[0_0_10px_#00f5d4]" />
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </motion.div>

          <motion.div variants={item} className="mb-4">
            <div className="font-accent text-[10vw] md:text-[8vw] leading-none text-white tracking-tight">
              <span className="glitch" data-text="VISHAL">VISHAL</span>
            </div>
            <div className="font-accent text-[10vw] md:text-[8vw] leading-none tracking-tight" style={{ color: '#00f5d4', textShadow: '0 0 40px #00f5d4' }}>
              KUMAR
            </div>
          </motion.div>

          <motion.div variants={item} className="mb-8">
            <span className="font-display text-sm text-gray-400 mr-2">{'>'}</span>
            <TypeAnimation
              key={taglines.join('|')}
              sequence={sequence}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-display text-sm md:text-base text-[#00f5d4]"
            />
          </motion.div>

          <motion.p variants={item} className="font-body text-gray-400 max-w-xl leading-relaxed mb-10 text-sm md:text-base">
            {personal?.bio}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
            <a href="#projects" className="group flex items-center gap-2 bg-[#00f5d4] text-black font-display text-xs tracking-widest px-6 py-3 hover:bg-[#00d4b8] transition-all duration-200">
              VIEW WORK <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href={personal?.resumeLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#00f5d4]/30 text-[#00f5d4] font-display text-xs tracking-widest px-6 py-3 hover:bg-[#00f5d4]/10 transition-all duration-200 hover:border-[#00f5d4]">
              <Download size={14} /> RESUME
            </a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-6">
            {heroSocials.map((s) => (
              <a key={s.label + s.href} href={s.href} target="_blank" rel="noopener noreferrer" title={s.tooltip}
                className="font-display text-xs text-gray-600 hover:text-[#00f5d4] transition-all duration-200 hover:scale-110 relative group">
                {s.label}
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-[#00f5d4] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {s.tooltip}
                </span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Live stats panel ── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 0.8 }}
          className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-right">
              <div className="font-accent text-3xl text-[#00f5d4]" style={{ textShadow: '0 0 20px #00f5d4' }}>{stat.value}</div>
              <div className="font-display text-[10px] text-gray-600 tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-display text-[10px] text-gray-600 tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#00f5d4] to-transparent animate-pulse" />
      </motion.div>
    </section>
  )
}
