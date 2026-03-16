import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { usePortfolio } from '../context/DataContext'

export default function Achievements() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { portfolioData } = usePortfolio()
  const achievements = portfolioData.achievements || []
  const certifications = portfolioData.certifications || []

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
            <motion.a key={ach.id}
              href={ach.link && ach.link !== '#' ? ach.link : undefined}
              target={ach.link && ach.link !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 }}
              className="cyber-card p-6 rounded-none group cursor-pointer block">
              <div className="flex items-start gap-4">
                <span className="text-3xl group-hover:scale-110 transition-transform block">{ach.icon}</span>
                <div className="flex-1">
                  <h3 className="font-display text-sm font-bold mb-1 transition-colors duration-200" style={{ color: ach.color }}>
                    {ach.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{ach.event}</p>
                </div>
              </div>
              <div className="mt-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${ach.color}, transparent)` }} />
            </motion.a>
          ))}
        </div>

        {/* Certifications */}
        {certifications.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }}>
            <p className="section-tag mb-6">// certifications</p>
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, i) => (
                <motion.a key={cert.id}
                  href={cert.link && cert.link !== '#' ? cert.link : undefined}
                  target={cert.link && cert.link !== '#' ? '_blank' : undefined}
                  initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="cyber-card p-5 rounded-none border-t-2 border-[#00f5d4]/30 group hover:border-[#00f5d4] transition-all duration-300 block">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#00f5d4] text-lg">◆</span>
                    <span className="font-display text-xs text-white">{cert.title}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-1">{cert.issuer}</p>
                  <p className="font-display text-[10px] text-[#00f5d4]/60">{cert.date}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
