import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowUpRight, Send } from 'lucide-react'
import toast from 'react-hot-toast'
import { usePortfolio } from '../context/DataContext'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { portfolioData } = usePortfolio()
  const { personal, social } = portfolioData
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSending(true)
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.open(`mailto:${personal?.email}?subject=${subject}&body=${body}`)
    setTimeout(() => {
      setSending(false)
      setForm({ name: '', email: '', message: '' })
      toast.success('Opening your mail client…')
    }, 700)
  }

  const details = [
    { label: 'Email', value: personal?.email, href: `mailto:${personal?.email}` },
    { label: 'Phone', value: personal?.phone, href: `tel:${personal?.phone}` },
    { label: 'Based in', value: personal?.location },
  ]

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">
            <span className="eyebrow-num">06</span> Contact
          </p>
          <h2 className="section-title mt-5 max-w-2xl">
            Let&apos;s talk about your team&apos;s next problem.
          </h2>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-12 gap-x-10 gap-y-14">
          {/* ── Details ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <p className="lead max-w-md">
              I&apos;m open to new-grad and internship roles and always happy to talk
              through an interesting engineering problem.
            </p>

            <dl className="mt-10 space-y-6">
              {details.map(item => (
                <div key={item.label} className="border-t border-line pt-4">
                  <dt className="mono-label">{item.label}</dt>
                  <dd className="mt-1.5 text-sm text-txt break-words">
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

            <div className="mt-10">
              <p className="mono-label">Elsewhere</p>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {(social || []).map(s => (
                  <li key={s.id}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-[11px] tracking-[0.08em] uppercase text-faint hover:text-accent transition-colors"
                    >
                      {s.label} <ArrowUpRight size={10} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ── Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="lg:col-span-7 lg:pl-6"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="c-name" className="mono-label block mb-2">
                    Name
                  </label>
                  <input
                    id="c-name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Jane Doe"
                    className="field"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="c-email" className="mono-label block mb-2">
                    Email
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="jane@company.com"
                    className="field"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="c-message" className="mono-label block mb-2">
                  Message
                </label>
                <textarea
                  id="c-message"
                  rows={6}
                  required
                  placeholder="A little about the role or the problem you're solving…"
                  className="field resize-none"
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <button type="submit" disabled={sending} className="btn btn-primary w-full disabled:opacity-60">
                {sending ? (
                  'Opening…'
                ) : (
                  <>
                    <Send size={13} /> Send message
                  </>
                )}
              </button>

              <p className="text-[12px] text-faint">
                This opens your own mail client - nothing is stored or sent through this
                site.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
