import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowUpRight } from 'lucide-react'
import { usePortfolio } from '../context/DataContext'

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { portfolioData } = usePortfolio()
  const experience = portfolioData.experience || []

  // Turns tokens listed in exp.links (e.g. "saasify.ai") into real anchors
  // inside a bullet, leaving the rest of the sentence untouched.
  const renderPoint = (text, links) => {
    const tokens = Object.keys(links || {})
    if (!tokens.length) return text
    const escaped = tokens
      .sort((a, b) => b.length - a.length)
      .map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    return text
      .split(new RegExp('(' + escaped.join('|') + ')', 'g'))
      .map((part, k) =>
        links[part] ? (
          <a
            key={k}
            href={links[part]}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent"
          >
            {part}
          </a>
        ) : (
          part
        )
      )
  }

  // 'incoming' = offer accepted, not started yet; 'current' = active today
  const chipFor = exp => {
    if (exp.status === 'incoming') return 'Incoming'
    if (exp.status === 'current' || /ongoing|present/i.test(exp.period || '')) return 'Current'
    return null
  }

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">
            <span className="eyebrow-num">02</span> Experience
          </p>
          <h2 className="section-title mt-5 max-w-2xl">
            Where I&apos;ve built and shipped.
          </h2>
        </motion.div>

        <ol className="rail mt-14 space-y-14">
          {experience.map((exp, i) => {
            const points =
              typeof exp.points === 'string'
                ? exp.points.split('\n')
                : exp.points || []
            const chip = chipFor(exp)

            return (
              <motion.li
                key={exp.id}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: Math.min(i * 0.08, 0.32) }}
                className={`rail-item relative ${chip ? 'rail-item-current' : ''}`}
              >
                <span className="rail-dot" aria-hidden="true" />

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
                  <h3 className="text-[17px] font-medium tracking-tight text-txt">
                    {exp.role}
                  </h3>
                  {chip && (
                    <span className="font-mono text-[9.5px] tracking-[0.12em] uppercase text-accent border border-accent/30 bg-accent/[0.08] px-2 py-0.5 rounded-[4px]">
                      {chip}
                    </span>
                  )}
                </div>

                <p className="mt-1.5 text-sm text-muted">{exp.company}</p>

                <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10.5px] tracking-[0.1em] uppercase text-faint">
                  <span>{exp.period}</span>
                  {exp.mode && (
                    <>
                      <span className="text-line-strong">·</span>
                      <span>{exp.mode}</span>
                    </>
                  )}
                  {exp.type && (
                    <>
                      <span className="text-line-strong">·</span>
                      <span>{exp.type}</span>
                    </>
                  )}
                </div>

                <ul className="mt-5 space-y-2.5 max-w-3xl">
                  {points.filter(Boolean).map((point, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-[9px] h-px w-3 shrink-0 bg-line-strong" />
                      <span>{renderPoint(point, exp.links)}</span>
                    </li>
                  ))}
                </ul>

                {exp.certLink && exp.certLink !== '#' && (
                  <a
                    href={exp.certLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm mt-6"
                  >
                    View certificate <ArrowUpRight size={11} />
                  </a>
                )}
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
