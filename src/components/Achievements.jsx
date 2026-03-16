import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink } from 'lucide-react'
import { usePortfolio } from '../context/DataContext'

export default function Achievements() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { portfolioData } = usePortfolio()
  const achievements = portfolioData.achievements || []
  const certifications = portfolioData.certifications || []

  const openLink = (e, url) => {
    e.preventDefault()
    e.stopPropagation()
    if (url && url !== '#') window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="achievements" className="py-24 relative" ref={ref}>
      <div className="absolute left-0 top-24 font-accent text-[12rem] leading-none text-white/[0.02] select-none pointer-events-none">05</div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-16">
          <p className="section-tag mb-3">// achievements</p>
          <h2 className="font-accent text-5xl md:text-7xl text-white">
            WINS & <span style={{ color: '#ff3366' }}>MILESTONES</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {achievements.map((ach, i) => (
            <motion.div key={ach.id}
              initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 }}
              className="cyber-card p-6 rounded-none group relative flex flex-col">

              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl group-hover:scale-110 transition-transform block flex-shrink-0">{ach.icon}</span>
                <div className="flex-1">
                  <h3 className="font-display text-sm font-bold mb-1" style={{ color: ach.color }}>
                    {ach.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{ach.event}</p>
                </div>
              </div>

              <div className="mt-auto pt-3 border-t border-[#1a1a1a] flex items-center justify-between">
                <div className="h-px flex-1 mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(90deg, ' + ach.color + ', transparent)' }} />
                {ach.link && ach.link !== '#' ? (
                  <button
                    onClick={(e) => openLink(e, ach.link)}
                    style={{ position: 'relative', zIndex: 10, cursor: 'pointer', color: ach.color, border: '1px solid ' + ach.color + '50', background: ach.color + '15' }}
                    className="flex items-center gap-1.5 font-display text-[9px] tracking-widest px-3 py-1.5 transition-all duration-200 hover:opacity-80 flex-shrink-0"
                  >
                    <ExternalLink size={9} /> Certificate
                  </button>
                ) : (
                  <span className="font-display text-[9px] text-gray-700 tracking-widest flex-shrink-0">NO LINK YET</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        {certifications.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }}>
            <p className="section-tag mb-6">// certifications</p>
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, i) => (
                <motion.div key={cert.id}
                  initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="cyber-card p-5 rounded-none border-t-2 border-[#00f5d4]/30 group hover:border-[#00f5d4] transition-all duration-300 flex flex-col">

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#00f5d4] text-lg">◆</span>
                    <span className="font-display text-xs text-white">{cert.title}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-1">{cert.issuer}</p>
                  <p className="font-display text-[10px] text-[#00f5d4]/60 mb-4">{cert.date}</p>

                  <div className="mt-auto pt-3 border-t border-[#1a1a1a]">
                    {cert.link && cert.link !== '#' ? (
                      <button
                        onClick={(e) => openLink(e, cert.link)}
                        style={{ position: 'relative', zIndex: 10, cursor: 'pointer', color: '#00f5d4', border: '1px solid rgba(0,245,212,0.35)', background: 'rgba(0,245,212,0.08)' }}
                        className="flex items-center gap-1.5 font-display text-[9px] tracking-widest px-3 py-1.5 transition-all duration-200 hover:opacity-80"
                      >
                        <ExternalLink size={9} /> VIEW CERTIFICATE
                      </button>
                    ) : (
                      <span className="font-display text-[9px] text-gray-700 tracking-widest">LINK NOT ADDED</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
