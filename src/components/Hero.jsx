import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { usePortfolio } from '../context/DataContext'

export default function Hero() {
  const { portfolioData } = usePortfolio()
  const { personal, social, projects, achievements, education, experience } = portfolioData

  const roles = (personal?.taglines || []).filter(Boolean)
  const current = (experience || []).find(e => e.status === 'current')
  const incoming = (experience || []).find(e => e.status === 'incoming')
  const cgpa = (education || []).find(e => e.type === 'cgpa')

  const stats = [
    cgpa && { value: cgpa.score.split(' ')[0], label: 'CGPA' },
    { value: (projects || []).length, label: 'Projects' },
    { value: (experience || []).length, label: 'Roles' },
    { value: (achievements || []).length, label: 'Recognitions' },
  ].filter(Boolean)

  const fade = {
    hidden: { opacity: 0, y: 14 },
    show: i => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] },
    }),
  }

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-32 pb-20"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(820px 460px at 8% 4%, rgba(95,211,189,0.05), transparent 72%)',
        }}
      />

      <div className="page-container relative z-10 w-full">
        <motion.p
          variants={fade}
          initial="hidden"
          animate="show"
          custom={0}
          className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted"
        >
          Open to 2027 new-grad &amp; internship roles
        </motion.p>

        <motion.h1
          variants={fade}
          initial="hidden"
          animate="show"
          custom={1}
          className="mt-7 font-semibold text-txt"
          style={{
            fontSize: 'var(--step-display)',
            lineHeight: 0.93,
            letterSpacing: '-0.042em',
          }}
        >
          Vishal Kumar
        </motion.h1>

        <motion.p
          variants={fade}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-7 font-mono text-[11.5px] tracking-[0.1em] uppercase text-faint"
        >
          {roles.map((role, i) => (
            <span key={role}>
              {i > 0 && <span className="text-line-strong px-2.5">/</span>}
              <span className={i === 0 ? 'text-accent' : undefined}>{role}</span>
            </span>
          ))}
        </motion.p>

        <motion.p
          variants={fade}
          initial="hidden"
          animate="show"
          custom={3}
          className="lead mt-8 max-w-2xl"
        >
          {personal?.bio}
        </motion.p>

        {/* Current + incoming, as plain rows on hairlines */}
        <motion.dl
          variants={fade}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-12 max-w-3xl"
        >
          {[
            current && { key: 'now', label: 'Now', role: current },
            incoming && { key: 'next', label: 'Next', role: incoming },
          ]
            .filter(Boolean)
            .map(row => (
              <div
                key={row.key}
                className="border-t border-line py-4 grid grid-cols-1 sm:grid-cols-[68px_1fr] gap-1 sm:gap-6"
              >
                <dt className="mono-label sm:pt-1">{row.label}</dt>
                <dd>
                  <span className="text-[14.5px] text-txt">{row.role.role}</span>
                  <span className="text-[14.5px] text-faint"> · {row.role.company}</span>
                  <span className="block mt-1 font-mono text-[10.5px] tracking-[0.1em] uppercase text-faint">
                    {row.role.period}
                    {row.role.mode ? ` · ${row.role.mode}` : ''}
                  </span>
                </dd>
              </div>
            ))}
        </motion.dl>

        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={5}
          className="mt-11 flex flex-wrap items-center gap-3"
        >
          <a href="#projects" className="btn btn-primary">
            View work
          </a>
          <a
            href={personal?.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Résumé <ArrowUpRight size={13} />
          </a>
        </motion.div>

        {/* Measures - numbers, no containers */}
        <motion.dl
          variants={fade}
          initial="hidden"
          animate="show"
          custom={6}
          className="mt-14 flex flex-wrap gap-x-12 gap-y-6"
        >
          {stats.map(stat => (
            <div key={stat.label}>
              <dd
                className="font-mono text-2xl text-txt"
                style={{ letterSpacing: '-0.03em' }}
              >
                {stat.value}
              </dd>
              <dt className="mono-label mt-1">{stat.label}</dt>
            </div>
          ))}
        </motion.dl>

        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={7}
          className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-2"
        >
          <a
            href={'mailto:' + personal?.email}
            className="font-mono text-[11px] tracking-[0.1em] uppercase text-accent hover:text-txt transition-colors"
          >
            {personal?.email}
          </a>
          <span className="text-line-strong" aria-hidden="true">/</span>
          {(social || []).slice(0, 5).map(s => (
            <a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet font-mono text-[11px] tracking-[0.1em] uppercase"
            >
              {s.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
