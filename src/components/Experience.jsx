import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { usePortfolio } from '../context/DataContext'

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })
  const { portfolioData } = usePortfolio()
  const experience = portfolioData.experience || []

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="absolute left-0 top-24 font-accent text-[12rem] leading-none text-white/[0.02] select-none pointer-events-none">02</div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-16">
          <p className="section-tag mb-3">// experience</p>
          <h2 className="font-accent text-5xl md:text-7xl text-white">
            WHERE I'VE <span style={{ color: '#7c3aed' }}>WORKED</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f5d4] via-[#7c3aed] to-transparent ml-6 md:ml-0 -translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <motion.div key={exp.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                className={`relative flex ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 pl-14 md:pl-0`}
              >
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-2 z-10 -translate-x-1/2 ml-6 md:ml-0"
                  style={{ borderColor: exp.color, background: '#050505', boxShadow: `0 0 15px ${exp.color}` }} />

                <div className={`w-full md:w-[calc(50%-3rem)] ${i % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="cyber-card p-6 rounded-none hover:border-[#2a2a2a] transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="font-display text-[10px] tracking-widest px-2 py-1 rounded-sm mb-2 inline-block"
                          style={{ color: exp.color, background: `${exp.color}15`, border: `1px solid ${exp.color}30` }}>
                          {exp.type}
                        </span>
                        <h3 className="font-display text-base text-white mt-2">{exp.role}</h3>
                        <p className="text-xs text-gray-500 mt-1">{exp.company}</p>
                      </div>
                      <span className="font-display text-[10px] text-gray-600 text-right">{exp.period}</span>
                    </div>
                    <ul className="space-y-2 mt-4">
                      {(typeof exp.points === 'string' ? exp.points.split('\n') : exp.points || [])
                        .filter(Boolean).map((point, j) => (
                        <li key={j} className="flex gap-2 text-xs text-gray-400 leading-relaxed">
                          <span style={{ color: exp.color }} className="flex-shrink-0 mt-0.5">▸</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
