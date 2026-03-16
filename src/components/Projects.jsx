import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowUpRight, Github } from 'lucide-react'
import { usePortfolio } from '../context/DataContext'

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { portfolioData } = usePortfolio()
  const projects = portfolioData.projects || []
  const [hovered, setHovered] = useState(null)
  const [filter, setFilter] = useState('ALL')

  const filters = ['ALL', 'FEATURED', 'AI/ML', 'WEB', 'MOBILE']

  const filtered = projects.filter(p => {
    const tech = typeof p.tech === 'string' ? p.tech : p.tech?.join(',') || ''
    if (filter === 'ALL') return true
    if (filter === 'FEATURED') return p.featured
    if (filter === 'AI/ML') return /AI|ML|TensorFlow|Python|n8n|LLM/i.test(tech)
    if (filter === 'MOBILE') return /React Native/i.test(tech)
    if (filter === 'WEB') return /React\.js|Node\.js|MongoDB/i.test(tech)
    return true
  })

  const getTechArray = (tech) => {
    if (Array.isArray(tech)) return tech
    return (tech || '').split(',').map(t => t.trim()).filter(Boolean)
  }

  const openLink = (e, url) => {
    e.preventDefault()
    e.stopPropagation()
    if (url) window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="absolute left-0 top-24 font-accent text-[12rem] leading-none text-white/[0.02] select-none pointer-events-none">03</div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-12">
          <p className="section-tag mb-3">// projects</p>
          <h2 className="font-accent text-5xl md:text-7xl text-white">
            THINGS I'VE <span style={{ color: '#00d68f' }}>BUILT</span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }} className="flex flex-wrap gap-3 mb-12">
          {filters.map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className={'font-display text-[10px] tracking-widest px-4 py-2 transition-all duration-200 ' + (filter === f ? 'bg-[#00f5d4] text-black' : 'border border-[#1a1a1a] text-gray-500 hover:border-[#00f5d4]/30 hover:text-[#00f5d4]')}>
              {f}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={filter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div key={project.id}
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                onMouseEnter={() => setHovered(project.id)} onMouseLeave={() => setHovered(null)}
                className="cyber-card rounded-none group relative overflow-hidden flex flex-col">

                <div className="h-px w-full transition-all duration-500"
                  style={{ background: hovered === project.id ? 'linear-gradient(90deg, ' + project.color + ', transparent)' : 'transparent' }} />

                <div className="p-6 flex flex-col flex-1">
                  {/* Top: icon + period + featured */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform block">{project.icon}</span>
                      <span className="font-display text-[10px] tracking-widest text-gray-600">{project.period}</span>
                    </div>
                    {project.featured && (
                      <span className="font-display text-[9px] tracking-widest px-2 py-0.5"
                        style={{ color: project.color, border: '1px solid ' + project.color + '40', background: project.color + '10' }}>
                        FEATURED
                      </span>
                    )}
                  </div>

                  {/* Title & description */}
                  <h3 className="font-display text-base font-bold mb-1 transition-colors duration-200"
                    style={{ color: hovered === project.id ? project.color : 'white' }}>
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">{project.subtitle}</p>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">{project.description}</p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {getTechArray(project.tech).map((t) => <span key={t} className="tech-tag">{t}</span>)}
                  </div>

                  {/* ── Action buttons at bottom ── */}
                  <div className="mt-auto pt-4 border-t border-[#1a1a1a] flex items-center gap-3 flex-wrap">
                    {project.githubLink && (
                      <button
                        onClick={(e) => openLink(e, project.githubLink)}
                        style={{ position: 'relative', zIndex: 10, cursor: 'pointer' }}
                        className="flex items-center gap-1.5 font-display text-[10px] tracking-widest text-gray-400 hover:text-white border border-[#333] hover:border-[#777] px-3 py-1.5 transition-all duration-200 bg-transparent"
                      >
                        <Github size={12} /> GITHUB
                      </button>
                    )}
                    {project.liveLink && (
                      <button
                        onClick={(e) => openLink(e, project.liveLink)}
                        style={{ position: 'relative', zIndex: 10, cursor: 'pointer', color: project.color, border: '1px solid ' + project.color + '50', background: project.color + '12' }}
                        className="flex items-center gap-1.5 font-display text-[10px] tracking-widest px-3 py-1.5 transition-all duration-200 hover:opacity-80"
                      >
                        <ArrowUpRight size={12} /> LIVE DEMO
                      </button>
                    )}
                    {!project.githubLink && !project.liveLink && (
                      <span className="font-display text-[10px] text-gray-700 tracking-widest">IN PROGRESS</span>
                    )}
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 50% 100%, ' + project.color + '08, transparent 70%)' }} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
