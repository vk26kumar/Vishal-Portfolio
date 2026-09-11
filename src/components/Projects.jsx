import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowUpRight, Github } from 'lucide-react'
import { usePortfolio } from '../context/DataContext'

const FILTERS = [
  { id: 'FEATURED', label: 'Selected' },
  { id: 'ALL', label: 'All' },
  { id: 'AI/ML', label: 'AI / ML' },
  { id: 'WEB', label: 'Web' },
  { id: 'MOBILE', label: 'Mobile' },
]

const MAX_TAGS = 5

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })
  const { portfolioData } = usePortfolio()
  const projects = portfolioData.projects || []
  const [filter, setFilter] = useState('ALL')

  const techArray = tech =>
    Array.isArray(tech)
      ? tech
      : (tech || '')
          .split(',')
          .map(t => t.trim())
          .filter(Boolean)

  const filtered = projects.filter(p => {
    const tech = Array.isArray(p.tech) ? p.tech.join(',') : p.tech || ''
    if (filter === 'ALL') return true
    if (filter === 'FEATURED') return p.featured
    if (filter === 'AI/ML') return /AI|ML|TensorFlow|Python|n8n|LLM|XGBoost|Scikit/i.test(tech)
    if (filter === 'MOBILE') return /React Native|Expo/i.test(tech)
    if (filter === 'WEB') return /React|Node\.js|MongoDB|Express/i.test(tech)
    return true
  })

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
        >
          <div>
            <p className="eyebrow">
              <span className="eyebrow-num">03</span> Work
            </p>
            <h2 className="section-title mt-5 max-w-xl">
              Selected projects, end to end.
            </h2>
            <p className="mono-label mt-4">
              Showing {filtered.length} of {projects.length}
            </p>
          </div>

          {/* Segmented filter */}
          <div
            className="flex flex-wrap gap-1 p-1 border border-line rounded-[10px] bg-surface self-start lg:self-auto"
            role="tablist"
            aria-label="Filter projects"
          >
            {FILTERS.map(f => (
              <button
                key={f.id}
                role="tab"
                aria-selected={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={`px-3.5 py-2 rounded-[7px] font-mono text-[10.5px] tracking-[0.1em] uppercase transition-colors ${
                  filter === f.id
                    ? 'bg-elevated text-txt'
                    : 'text-faint hover:text-muted'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.ul
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => {
              const tags = techArray(project.tech)
              const shown = tags.slice(0, MAX_TAGS)
              const rest = tags.length - shown.length
              const primary = project.liveLink || project.githubLink

              return (
                <motion.li
                  key={project.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: Math.min(i * 0.05, 0.3) }}
                  className="card card-interactive group relative flex flex-col overflow-hidden"
                >
                  {/* Hairline of the project's own colour, kept subtle */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        'linear-gradient(90deg, var(--accent), transparent 70%)',
                    }}
                  />

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10.5px] tracking-[0.12em] text-faint">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-faint">
                        {project.period}
                      </span>
                    </div>

                    <h3 className="mt-5 text-[16px] font-medium leading-snug tracking-tight text-txt">
                      {primary ? (
                        <a
                          href={primary}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent transition-colors"
                        >
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>
                    <p className="mt-1.5 text-[13px] text-faint">{project.subtitle}</p>

                    <p className="mt-4 text-[13.5px] leading-relaxed text-muted truncate-3">
                      {project.description}
                    </p>

                    {project.metrics && project.metrics.length > 0 && (
                      <dl className="mt-5 flex flex-wrap gap-x-7 gap-y-3">
                        {project.metrics.map(m => (
                          <div key={m.label}>
                            <dd
                              className="font-mono text-[15px] text-accent"
                              style={{ letterSpacing: '-0.02em' }}
                            >
                              {m.value}
                            </dd>
                            <dt className="mono-label text-[9px] mt-1">{m.label}</dt>
                          </div>
                        ))}
                      </dl>
                    )}

                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {shown.map(t => (
                        <li key={t} className="tag">
                          {t}
                        </li>
                      ))}
                      {rest > 0 && (
                        <li className="tag border-dashed">+{rest}</li>
                      )}
                    </ul>

                    <div className="mt-auto pt-6 flex flex-wrap items-center gap-2.5">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-ghost btn-sm"
                        >
                          <Github size={12} /> GitHub
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-accent btn-sm"
                        >
                          {project.liveLabel || 'Live'} <ArrowUpRight size={11} />
                        </a>
                      )}
                      {!project.githubLink && !project.liveLink && (
                        <span className="font-mono text-[10.5px] tracking-[0.1em] uppercase text-faint">
                          Private
                        </span>
                      )}
                    </div>
                  </div>
                </motion.li>
              )
            })}
          </motion.ul>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="mt-14 text-sm text-faint">Nothing in this category yet.</p>
        )}
      </div>
    </section>
  )
}
