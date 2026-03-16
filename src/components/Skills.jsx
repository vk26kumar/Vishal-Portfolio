import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { usePortfolio } from '../context/DataContext'

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })
  const { portfolioData } = usePortfolio()
  const skills = portfolioData.skills || {}
  const allTechnologies = portfolioData.allTechnologies || []
  const categories = Object.keys(skills)
  const [activeCategory, setActiveCategory] = useState(categories[0] || 'Languages')

  const activeSkills = skills[activeCategory] || []

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="absolute left-0 top-24 font-accent text-[12rem] leading-none text-white/[0.02] select-none pointer-events-none">04</div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-16">
          <p className="section-tag mb-3">// skills</p>
          <h2 className="font-accent text-5xl md:text-7xl text-white">
            MY <span style={{ color: '#ffd60a' }}>ARSENAL</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }}>
            <p className="section-tag mb-4">CATEGORIES</p>
            <div className="space-y-1">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className={`w-full text-left font-display text-sm px-4 py-3 transition-all duration-200 flex items-center gap-3 group ${
                    activeCategory === cat
                      ? 'text-[#00f5d4] bg-[#00f5d4]/08 border-l-2 border-[#00f5d4]'
                      : 'text-gray-500 hover:text-gray-300 border-l-2 border-transparent hover:border-[#333]'
                  }`}>
                  <span className={`w-1.5 h-1.5 rounded-full transition-all ${activeCategory === cat ? 'bg-[#00f5d4] shadow-[0_0_8px_#00f5d4]' : 'bg-[#333] group-hover:bg-[#555]'}`} />
                  {cat.toUpperCase()}
                  <span className="ml-auto font-display text-[10px] text-gray-600">{(skills[cat] || []).length}</span>
                </button>
              ))}
            </div>
            <div className="mt-8 p-4 border border-[#1a1a1a] bg-[#0d0d0d]">
              <p className="font-display text-[10px] text-gray-600 mb-3 tracking-widest">INTERESTS</p>
              <div className="flex flex-wrap gap-2">
                {['Full-Stack Dev', 'AI Agents', 'ML/DL', 'NLP', 'n8n', 'UI/UX'].map(tag => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }} className="lg:col-span-2">
            <div className="space-y-6">
              {activeSkills.map((skill, i) => (
                <motion.div key={skill.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display text-sm text-gray-300">{skill.name}</span>
                    <span className="font-display text-xs text-[#00f5d4]">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div className="skill-bar-fill"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ delay: 0.4 + i * 0.08, duration: 1.2, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech tag cloud — driven by allTechnologies from admin */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }}
          className="mt-16 border border-[#1a1a1a] p-8">
          <p className="section-tag mb-6">ALL TECHNOLOGIES</p>
          <div className="flex flex-wrap gap-3">
            {allTechnologies.map((tech, i) => (
              <motion.span key={tech + i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.02 }}
                className="tech-tag cursor-default hover:scale-105 transition-transform">
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
