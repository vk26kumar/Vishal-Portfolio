import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { usePortfolio } from '../context/DataContext'

// Self-reported percentages read as noise, so the stored `level` only
// decides which items get highlighted as day-to-day tools.
const CORE_THRESHOLD = 85

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { portfolioData } = usePortfolio()
  const skills = portfolioData.skills || {}
  const allTechnologies = portfolioData.allTechnologies || []

  const categories = Object.entries(skills).filter(([, list]) => (list || []).length)

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">
            <span className="eyebrow-num">04</span> Skills
          </p>
          <h2 className="section-title mt-5 max-w-2xl">
            The toolkit, grouped by how I use it.
          </h2>
          <p className="lead mt-5 max-w-xl">
            Highlighted items are what I reach for daily and have shipped to production.
          </p>
        </motion.div>

        <dl className="mt-14 border-b border-line">
          {categories.map(([category, list], i) => {
            const core = list.filter(s => (s.level ?? 0) >= CORE_THRESHOLD)
            const rest = list.filter(s => (s.level ?? 0) < CORE_THRESHOLD)

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: Math.min(i * 0.05, 0.25) }}
                className="border-t border-line py-7 grid lg:grid-cols-[220px_1fr] gap-4 lg:gap-10"
              >
                <dt className="mono-label lg:pt-1.5 text-accent">{category}</dt>
                <dd>
                  <ul className="flex flex-wrap gap-1.5">
                    {core.map(s => (
                      <li key={s.name} className="tag tag-core">
                        {s.name}
                      </li>
                    ))}
                    {rest.map(s => (
                      <li key={s.name} className="tag">
                        {s.name}
                      </li>
                    ))}
                  </ul>
                </dd>
              </motion.div>
            )
          })}
        </dl>

        {allTechnologies.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="border-t border-line py-7 grid lg:grid-cols-[220px_1fr] gap-4 lg:gap-10"
          >
            <p className="mono-label lg:pt-1.5">Also worked with</p>
            <p className="text-[13.5px] leading-loose text-faint">
              {allTechnologies.join('  ·  ')}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
