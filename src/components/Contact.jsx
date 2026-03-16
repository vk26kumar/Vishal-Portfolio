import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, ExternalLink, Send } from 'lucide-react'
import toast from 'react-hot-toast'
import { usePortfolio } from '../context/DataContext'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { portfolioData } = usePortfolio()
  const { personal, social } = portfolioData
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.open(`mailto:${personal?.email}?subject=${subject}&body=${body}`)
    setTimeout(() => {
      setSending(false)
      setForm({ name: '', email: '', message: '' })
      toast.success('Opening your mail client...')
    }, 1000)
  }

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="absolute left-0 top-24 font-accent text-[12rem] leading-none text-white/[0.02] select-none pointer-events-none">06</div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-16">
          <p className="section-tag mb-3">// contact</p>
          <h2 className="font-accent text-5xl md:text-7xl text-white">
            LET'S <span style={{ color: '#00f5d4' }}>CONNECT</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }}>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
              I'm always open to discussing new opportunities, interesting projects, or just having a good technical conversation. Reach out — let's build something great.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { icon: <Mail size={14} />, label: personal?.email, href: `mailto:${personal?.email}` },
                { icon: <Phone size={14} />, label: personal?.phone, href: `tel:${personal?.phone}` },
                { icon: <MapPin size={14} />, label: personal?.location, href: '#' },
              ].map((item) => (
                <a key={item.label} href={item.href} className="flex items-center gap-3 group">
                  <span className="text-[#00f5d4]/60 group-hover:text-[#00f5d4] transition-colors">{item.icon}</span>
                  <span className="font-display text-xs text-gray-400 group-hover:text-white transition-colors">{item.label}</span>
                </a>
              ))}
            </div>

            <p className="section-tag mb-4">FIND ME ON</p>
            <div className="flex flex-wrap gap-3">
              {(social || []).map((s) => (
                <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 cyber-card px-4 py-2.5 rounded-none hover:border-[#00f5d4]/30 transition-all duration-200 group">
                  <ExternalLink size={12} className="text-gray-600 group-hover:text-[#00f5d4] transition-colors" />
                  <span className="font-display text-[10px] tracking-widest text-gray-500 group-hover:text-white transition-colors">{s.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.4 }}>
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: 'name', placeholder: 'Your Name', type: 'text' },
                { name: 'email', placeholder: 'your@email.com', type: 'email' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="font-display text-[10px] tracking-widest text-gray-600 block mb-2">{field.name.toUpperCase()}</label>
                  <input type={field.type} placeholder={field.placeholder} value={form[field.name]}
                    onChange={(e) => setForm({ ...form, [field.name]: e.target.value })} required
                    className="w-full bg-[#0d0d0d] border border-[#1a1a1a] text-white text-sm px-4 py-3 font-body focus:outline-none focus:border-[#00f5d4]/50 transition-colors placeholder-gray-700" />
                </div>
              ))}
              <div>
                <label className="font-display text-[10px] tracking-widest text-gray-600 block mb-2">MESSAGE</label>
                <textarea placeholder="Tell me about your project or opportunity..." rows={5} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })} required
                  className="w-full bg-[#0d0d0d] border border-[#1a1a1a] text-white text-sm px-4 py-3 font-body focus:outline-none focus:border-[#00f5d4]/50 transition-colors placeholder-gray-700 resize-none" />
              </div>
              <button type="submit" disabled={sending}
                className="w-full flex items-center justify-center gap-3 bg-[#00f5d4] text-black font-display text-xs tracking-widest py-4 hover:bg-[#00d4b8] transition-all duration-200 disabled:opacity-60">
                {sending ? <span className="animate-pulse">SENDING...</span> : <><Send size={14} /> SEND MESSAGE</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
