import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { usePortfolio } from '../context/DataContext'

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const { portfolioData } = usePortfolio()
  const { personal, education } = portfolioData

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="absolute left-0 top-24 font-accent text-[12rem] leading-none text-white/[0.02] select-none pointer-events-none">01</div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-16">
          <p className="section-tag mb-3">// about me</p>
          <h2 className="font-accent text-5xl md:text-7xl text-white">
            THE <span style={{ color: '#00f5d4' }}>CODE</span><br />BEHIND THE DEV
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="cyber-card p-8 rounded-none mb-6">
              <pre className="font-display text-xs text-gray-500 leading-relaxed overflow-x-auto">
{`const vishal = {
  role: "Full Stack + AI Engineer",
  university: "MMMUT Gorakhpur",
  cgpa: ${(education || []).find(e => e.type === 'cgpa')?.score?.split(' ')[0] || '9.27'},
  location: "${personal?.location || 'Gorakhpur, UP'}",
  passion: ["Web Dev", "AI/ML", "Automation"],
  currentlyBuilding: "MMMUT.XYZ platform",
  openTo: ["Internships", "Projects", "Collabs"]
}`}
              </pre>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {personal?.aboutLong || personal?.bio}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Email', value: personal?.email, href: `mailto:${personal?.email}` },
                { label: 'Phone', value: personal?.phone, href: `tel:${personal?.phone}` },
                { label: 'Location', value: personal?.location, href: '#' },
                { label: 'Degree', value: 'B.Tech CSE', href: '#' },
              ].map((info) => (
                <div key={info.label} className="border-l-2 border-[#00f5d4]/30 pl-3">
                  <p className="font-display text-[10px] text-[#00f5d4]/60 tracking-widest mb-1">{info.label.toUpperCase()}</p>
                  <a href={info.href} className="text-xs text-gray-300 hover:text-[#00f5d4] transition-colors break-all">{info.value}</a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Education */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.4 }}>
            <p className="section-tag mb-6">// education</p>
            <div className="space-y-4">
              {(education || []).map((edu, i) => (
                <motion.div key={edu.id}
                  initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  className={`cyber-card p-6 rounded-none border-l-2 ${edu.highlight ? 'border-[#00f5d4]' : 'border-[#333]'}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-display text-sm text-white">{edu.degree}</h3>
                      <p className="text-xs text-gray-500 mt-1">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <div className={`font-accent text-2xl ${edu.highlight ? 'text-[#00f5d4]' : 'text-gray-400'}`}
                        style={edu.highlight ? { textShadow: '0 0 15px #00f5d4' } : {}}>
                        {edu.score}
                      </div>
                      <div className="font-display text-[10px] text-gray-600">{edu.period}</div>
                    </div>
                  </div>
                  {edu.highlight && (
                    <div className="mt-3 h-1 bg-[#1a1a1a] rounded">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${parseFloat(edu.score) * 10}%` } : {}}
                        transition={{ delay: 1, duration: 1.5 }}
                        className="h-full bg-gradient-to-r from-[#00f5d4] to-[#7c3aed] rounded"
                        style={{ maxWidth: '100%' }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
