import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { usePortfolio } from '../context/DataContext'

const focusAreas = [
  {
    title: 'Full-stack product engineering',
    body: 'React and Node services with REST APIs, auth, payments and webhook-driven flows - shipped to real users.',
  },
  {
    title: 'Applied machine learning',
    body: 'Ensemble and deep-learning models taken from dataset to a deployed, monitored inference pipeline.',
  },
  {
    title: 'Automation & AI agents',
    body: 'LLM-backed workflows with human-in-the-loop review, replacing manual operational work.',
  },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })
  const { portfolioData } = usePortfolio()
  const { personal, education } = portfolioData

  const details = [
    { label: 'Email', value: personal?.email, href: `mailto:${personal?.email}` },
    { label: 'Phone', value: personal?.phone, href: `tel:${personal?.phone}` },
    { label: 'Location', value: personal?.location },
    { label: 'Degree', value: 'B.Tech, Computer Science' },
  ]

  return (
    <section id="about" className="section" ref={ref}>
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">
            <span className="eyebrow-num">01</span> About
          </p>
          <h2 className="section-title mt-5 max-w-2xl">
            Engineering across the stack, with a bias toward shipping.
          </h2>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-12 gap-x-12 gap-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <p className="lead max-w-2xl">{personal?.aboutLong || personal?.bio}</p>

            <div className="mt-12">
              <p className="mono-label">What I focus on</p>
              <dl className="mt-6 border-b border-line">
                {focusAreas.map(area => (
                  <div
                    key={area.title}
                    className="border-t border-line py-5 grid sm:grid-cols-[1fr_1.3fr] gap-1.5 sm:gap-8"
                  >
                    <dt className="text-[14.5px] text-txt">{area.title}</dt>
                    <dd className="text-[13.5px] leading-relaxed text-muted">
                      {area.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <p className="mono-label">Education</p>
            <div className="mt-6 border-b border-line">
              {(education || []).map(edu => (
                <div key={edu.id} className="border-t border-line py-5">
                  <div className="flex items-start justify-between gap-6">
                    <div className="min-w-0">
                      <h3
                        className={`text-[14.5px] leading-snug ${
                          edu.highlight ? 'text-txt' : 'text-muted'
                        }`}
                      >
                        {edu.degree}
                      </h3>
                      <p className="mt-1.5 text-[13px] text-faint">{edu.institution}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p
                        className={`font-mono text-[14.5px] ${
                          edu.highlight ? 'text-accent' : 'text-muted'
                        }`}
                      >
                        {edu.score}
                      </p>
                      <p className="mt-1 font-mono text-[10px] tracking-[0.1em] uppercase text-faint">
                        {edu.period}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mono-label mt-12">Details</p>
            <dl className="mt-6 border-b border-line">
              {details.map(item => (
                <div
                  key={item.label}
                  className="border-t border-line py-3.5 flex items-baseline justify-between gap-6"
                >
                  <dt className="mono-label">{item.label}</dt>
                  <dd className="text-[13.5px] text-muted text-right break-all">
                    {item.href ? (
                      <a href={item.href} className="link-quiet hover:text-accent">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
