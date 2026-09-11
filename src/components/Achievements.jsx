import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowUpRight } from 'lucide-react'
import { usePortfolio } from '../context/DataContext'

export default function Achievements() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })
  const { portfolioData } = usePortfolio()
  const achievements = portfolioData.achievements || []
  const certifications = portfolioData.certifications || []
  const positions = portfolioData.positions || []

  const hasLink = url => url && url !== '#'

  const Group = ({ label, count, children, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="mt-16"
    >
      <p className="mono-label">
        {label} <span className="text-line-strong">·</span> {count}
      </p>
      <div className="mt-6">{children}</div>
    </motion.div>
  )

  return (
    <section id="achievements" className="section" ref={ref}>
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">
            <span className="eyebrow-num">05</span> Recognition
          </p>
          <h2 className="section-title mt-5 max-w-2xl">
            Competitions, leadership and credentials.
          </h2>
        </motion.div>

        {/* ── Achievements ── */}
        <Group label="Achievements" count={achievements.length} delay={0.1}>
          <ul className="border-b border-line">
            {achievements.map(ach => (
              <li
                key={ach.id}
                className="border-t border-line py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-[14.5px] leading-snug text-txt">{ach.title}</h3>
                  <p className="mt-1 text-[13px] text-faint">{ach.event}</p>
                </div>
                {hasLink(ach.link) && (
                  <a
                    href={ach.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm shrink-0 self-start sm:self-auto"
                  >
                    Certificate <ArrowUpRight size={11} />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </Group>

        {/* ── Positions of responsibility ── */}
        {positions.length > 0 && (
          <Group label="Positions of responsibility" count={positions.length} delay={0.15}>
            <ul className="border-b border-line">
              {positions.map(pos => (
                <li
                  key={pos.id}
                  className="border-t border-line py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[14.5px] leading-snug text-txt">{pos.role}</h3>
                    <p className="mt-1 text-[13px] text-faint">{pos.org}</p>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-faint shrink-0 sm:text-right sm:w-40">
                    {pos.period}
                  </span>
                  {hasLink(pos.link) && (
                    <a
                      href={pos.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost btn-sm shrink-0 self-start sm:self-auto"
                    >
                      Certificate <ArrowUpRight size={11} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </Group>
        )}

        {/* ── Certifications ── */}
        {certifications.length > 0 && (
          <Group label="Certifications" count={certifications.length} delay={0.2}>
            <ul className="border-b border-line">
              {certifications.map(cert => (
                <li
                  key={cert.id}
                  className="border-t border-line py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[14.5px] leading-snug text-txt">{cert.title}</h3>
                    <p className="mt-1 text-[13px] text-faint">
                      {cert.issuer} <span className="text-line-strong">·</span> {cert.date}
                    </p>
                  </div>
                  {hasLink(cert.link) ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost btn-sm shrink-0 self-start sm:self-auto"
                    >
                      View <ArrowUpRight size={11} />
                    </a>
                  ) : (
                    <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-faint shrink-0">
                      Link pending
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </Group>
        )}
      </div>
    </section>
  )
}
