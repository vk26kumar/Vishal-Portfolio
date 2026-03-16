import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { LogOut, Save, Plus, Trash2, Eye, Check, X, ChevronDown, ChevronUp, GripVertical } from 'lucide-react'
import toast from 'react-hot-toast'
import { usePortfolio, DEFAULT_DATA, STORAGE_KEY } from '../context/DataContext'

// ─── Shared field components ────────────────────────────────────────────────

function Field({ label, value, onChange, type = 'text', placeholder = '' }) {
  return (
    <div>
      <label className="font-display text-[10px] tracking-widest text-gray-500 block mb-1">{label}</label>
      <input type={type} value={value ?? ''} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        className="w-full bg-[#0a0a0a] border border-[#222] text-white text-xs px-3 py-2.5 font-body focus:outline-none focus:border-[#00f5d4]/50 transition-colors placeholder-gray-700 rounded-sm" />
    </div>
  )
}

function Textarea({ label, value, onChange, rows = 3, placeholder = '' }) {
  return (
    <div>
      <label className="font-display text-[10px] tracking-widest text-gray-500 block mb-1">{label}</label>
      <textarea value={value ?? ''} onChange={e => onChange(e.target.value)} rows={rows} placeholder={placeholder}
        className="w-full bg-[#0a0a0a] border border-[#222] text-white text-xs px-3 py-2.5 font-body focus:outline-none focus:border-[#00f5d4]/50 transition-colors placeholder-gray-700 resize-none rounded-sm" />
    </div>
  )
}

function Card({ title, accent = '#00f5d4', children, onRemove, collapsible = true }) {
  const [open, setOpen] = useState(true)
  return (
    <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-sm overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#1a1a1a] cursor-pointer select-none"
        onClick={() => collapsible && setOpen(o => !o)}>
        <h3 className="font-display text-xs tracking-widest" style={{ color: accent }}>{title}</h3>
        <div className="flex items-center gap-3">
          {onRemove && (
            <button onClick={e => { e.stopPropagation(); onRemove() }}
              className="text-[#ff3366]/40 hover:text-[#ff3366] transition-colors p-1">
              <Trash2 size={12} />
            </button>
          )}
          {collapsible && (open ? <ChevronUp size={14} className="text-gray-600" /> : <ChevronDown size={14} className="text-gray-600" />)}
        </div>
      </div>
      <AnimatePresence initial={false}>
        {(!collapsible || open) && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
            className="overflow-hidden">
            <div className="p-5">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function AddBtn({ label, color = '#00f5d4', onClick }) {
  return (
    <button onClick={onClick}
      className="flex items-center gap-2 font-display text-[10px] tracking-widest px-4 py-2 transition-colors border"
      style={{ color, borderColor: `${color}40`, background: `${color}08` }}
      onMouseEnter={e => e.currentTarget.style.background = `${color}15`}
      onMouseLeave={e => e.currentTarget.style.background = `${color}08`}>
      <Plus size={11} /> {label}
    </button>
  )
}

function ToggleBtn({ active, onToggle, labelOn = 'YES', labelOff = 'NO' }) {
  return (
    <button onClick={onToggle}
      className={`flex items-center gap-2 px-4 py-2 border font-display text-[10px] tracking-widest transition-colors ${
        active ? 'border-[#00f5d4] text-[#00f5d4] bg-[#00f5d4]/10' : 'border-[#333] text-gray-500'
      }`}>
      {active ? <Check size={10} /> : <X size={10} />}
      {active ? labelOn : labelOff}
    </button>
  )
}

// ─── Admin Password ──────────────────────────────────────────────────────────
const ADMIN_PASSWORD = 'vishal@admin2024'

// ─── Main Admin ──────────────────────────────────────────────────────────────
export default function Admin() {
  const navigate = useNavigate()
  const { portfolioData, setPortfolioData } = usePortfolio()
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState('')
  const [wrongPw, setWrongPw] = useState(false)
  const [activeTab, setActiveTab] = useState('personal')
  const [newTech, setNewTech] = useState('')
  const [newSocialLabel, setNewSocialLabel] = useState('')
  const [newSocialHref, setNewSocialHref] = useState('')
  const [newSkillCat, setNewSkillCat] = useState('')

  // ── Helpers ────────────────────────────────────────────────────
  const set = (section, key, value) =>
    setPortfolioData(p => ({ ...p, [section]: { ...p[section], [key]: value } }))

  const setArr = (key, value) =>
    setPortfolioData(p => ({ ...p, [key]: value }))

  const updItem = (key, id, field, value) =>
    setPortfolioData(p => ({ ...p, [key]: p[key].map(x => x.id === id ? { ...x, [field]: value } : x) }))

  const addItem = (key, newItem) =>
    setPortfolioData(p => ({ ...p, [key]: [...(p[key] || []), newItem] }))

  const removeItem = (key, id) => {
    setPortfolioData(p => ({ ...p, [key]: p[key].filter(x => x.id !== id) }))
    toast.success('Removed successfully.')
  }

  // ── Save ───────────────────────────────────────────────────────
  const handleSave = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(portfolioData))
    // Trigger storage event for Portfolio page to pick up live
    window.dispatchEvent(new StorageEvent('storage', { key: STORAGE_KEY, newValue: JSON.stringify(portfolioData) }))
    toast.success('✅ Saved! Portfolio updated in real-time.')
  }

  // ── Login ──────────────────────────────────────────────────────
  const login = () => {
    if (password === ADMIN_PASSWORD) { setAuthed(true); setWrongPw(false) }
    else { setWrongPw(true); setTimeout(() => setWrongPw(false), 2000) }
  }

  const tabs = [
    { id: 'personal', label: 'Personal & About' },
    { id: 'education', label: 'Education' },
    { id: 'social', label: 'Social Links' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills & Tech' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'certifications', label: 'Certifications' },
  ]

  // ═══════════════════════════════════════════════════════════════
  // LOGIN SCREEN
  // ═══════════════════════════════════════════════════════════════
  if (!authed) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-sm">
          <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-10">
            <div className="text-center mb-8">
              <div className="font-display text-xs text-[#00f5d4] tracking-widest mb-2">// ADMIN ACCESS</div>
              <h1 className="font-accent text-4xl text-white">PORTFOLIO CMS</h1>
              <p className="font-display text-[10px] text-gray-600 mt-2 tracking-widest">Enter password to continue</p>
            </div>
            <div className="space-y-4">
              <input type="password" placeholder="Password" value={password}
                onChange={e => setPassword(e.target.value)} onKeyDown={e => e.key === 'Enter' && login()}
                className={`w-full bg-[#0a0a0a] border text-white text-sm px-4 py-3 font-display focus:outline-none transition-colors text-center tracking-widest ${
                  wrongPw ? 'border-[#ff3366]' : 'border-[#222] focus:border-[#00f5d4]/50'
                }`} />
              {wrongPw && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="font-display text-[10px] text-[#ff3366] text-center tracking-widest">ACCESS DENIED</motion.p>
              )}
              <button onClick={login} className="w-full bg-[#00f5d4] text-black font-display text-xs tracking-widest py-3 hover:bg-[#00d4b8] transition-colors">
                AUTHENTICATE
              </button>
              <button onClick={() => navigate('/')} className="w-full text-gray-600 font-display text-[10px] tracking-widest hover:text-gray-400 transition-colors">
                ← BACK TO PORTFOLIO
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  const d = portfolioData

  // ═══════════════════════════════════════════════════════════════
  // DASHBOARD
  // ═══════════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-black/95 backdrop-blur-xl border-b border-[#1a1a1a] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-display text-xs text-[#00f5d4] tracking-widest">{'>'} PORTFOLIO CMS</span>
          <span className="w-2 h-2 rounded-full bg-[#00f5d4] animate-pulse shadow-[0_0_8px_#00f5d4]" />
        </div>
        <div className="flex items-center gap-3">
          <a href="/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1 font-display text-[10px] tracking-widest text-gray-500 hover:text-white transition-colors">
            <Eye size={12} /> PREVIEW
          </a>
          <button onClick={handleSave}
            className="flex items-center gap-2 bg-[#00f5d4] text-black font-display text-xs tracking-widest px-5 py-2 hover:bg-[#00d4b8] transition-colors shadow-[0_0_20px_rgba(0,245,212,0.3)]">
            <Save size={12} /> SAVE ALL
          </button>
          <button onClick={() => { setAuthed(false); navigate('/') }} className="text-gray-600 hover:text-[#ff3366] transition-colors p-1">
            <LogOut size={16} />
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Live stats bar */}
        <div className="grid grid-cols-4 gap-3 mb-8">
          {[
            { label: 'PROJECTS', value: (d.projects || []).length, color: '#00f5d4' },
            { label: 'EXPERIENCE', value: (d.experience || []).length, color: '#7c3aed' },
            { label: 'ACHIEVEMENTS', value: (d.achievements || []).length, color: '#ffd60a' },
            { label: 'CERTIFICATIONS', value: (d.certifications || []).length, color: '#ff3366' },
          ].map(s => (
            <div key={s.label} className="bg-[#0d0d0d] border border-[#1a1a1a] p-4 text-center">
              <div className="font-accent text-2xl" style={{ color: s.color, textShadow: `0 0 15px ${s.color}` }}>{s.value}</div>
              <div className="font-display text-[9px] tracking-widest text-gray-600 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`font-display text-[10px] tracking-widest px-4 py-2 transition-all duration-200 ${
                activeTab === tab.id ? 'bg-[#00f5d4] text-black' : 'border border-[#1a1a1a] text-gray-500 hover:border-[#333] hover:text-gray-300'
              }`}>
              {tab.label.toUpperCase()}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>

            {/* ════════════════════════════════════════
                PERSONAL & ABOUT
            ════════════════════════════════════════ */}
            {activeTab === 'personal' && (
              <div className="space-y-5">
                <Card title="PERSONAL INFORMATION" collapsible={false}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Field label="FULL NAME" value={d.personal?.name} onChange={v => set('personal', 'name', v)} />
                    <Field label="EMAIL" value={d.personal?.email} type="email" onChange={v => set('personal', 'email', v)} />
                    <Field label="PHONE" value={d.personal?.phone} onChange={v => set('personal', 'phone', v)} />
                    <Field label="LOCATION" value={d.personal?.location} onChange={v => set('personal', 'location', v)} />
                    <div className="md:col-span-2">
                      <Field label="RESUME LINK (Google Drive / PDF)" value={d.personal?.resumeLink} onChange={v => set('personal', 'resumeLink', v)} />
                    </div>
                  </div>
                </Card>

                <Card title="ABOUT ME — SHORT BIO (shown in hero)" collapsible={false}>
                  <Textarea label="BIO" value={d.personal?.bio} rows={3}
                    onChange={v => set('personal', 'bio', v)}
                    placeholder="Short bio shown on the hero section..." />
                </Card>

                <Card title="ABOUT ME — DETAILED TEXT (shown in About section)" collapsible={false}>
                  <Textarea label="ABOUT LONG (paragraph shown in About section)" value={d.personal?.aboutLong} rows={5}
                    onChange={v => set('personal', 'aboutLong', v)}
                    placeholder="Full paragraph about yourself shown in the About section..." />
                </Card>

                <Card title="ANIMATED TAGLINES (Hero rotating text)" collapsible={false}>
                  <p className="font-display text-[10px] text-gray-600 mb-3 tracking-widest">One tagline per line. These rotate in the hero.</p>
                  <Textarea label="TAGLINES" value={(d.personal?.taglines || []).join('\n')} rows={7}
                    onChange={v => set('personal', 'taglines', v.split('\n').filter(Boolean))} />
                </Card>
              </div>
            )}

            {/* ════════════════════════════════════════
                EDUCATION
            ════════════════════════════════════════ */}
            {activeTab === 'education' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-display text-[10px] text-gray-500 tracking-widest">{(d.education || []).length} ENTRIES</p>
                  <AddBtn label="ADD EDUCATION" color="#00f5d4" onClick={() => addItem('education', {
                    id: Date.now(), degree: 'New Degree', institution: 'Institution Name',
                    period: '2025', score: '0.00', type: 'cgpa', highlight: false,
                  })} />
                </div>

                {(d.education || []).map((edu, i) => (
                  <Card key={edu.id} title={`EDUCATION ${i + 1}: ${edu.degree}`} accent="#00f5d4"
                    onRemove={() => removeItem('education', edu.id)}>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <Field label="DEGREE / COURSE" value={edu.degree} onChange={v => updItem('education', edu.id, 'degree', v)} />
                      <Field label="INSTITUTION" value={edu.institution} onChange={v => updItem('education', edu.id, 'institution', v)} />
                      <Field label="PERIOD (e.g. 2023 — Ongoing)" value={edu.period} onChange={v => updItem('education', edu.id, 'period', v)} />
                      <Field label="SCORE / GRADE" value={edu.score} onChange={v => updItem('education', edu.id, 'score', v)} placeholder="9.27 / 10.0 or 86.6%" />
                      <div>
                        <label className="font-display text-[10px] tracking-widest text-gray-500 block mb-1">SCORE TYPE</label>
                        <div className="flex gap-2">
                          {['cgpa', 'percentage'].map(t => (
                            <button key={t} onClick={() => updItem('education', edu.id, 'type', t)}
                              className={`px-3 py-1.5 font-display text-[10px] tracking-widest border transition-colors ${
                                edu.type === t ? 'border-[#00f5d4] text-[#00f5d4] bg-[#00f5d4]/10' : 'border-[#333] text-gray-500'
                              }`}>
                              {t.toUpperCase()}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="font-display text-[10px] tracking-widest text-gray-500 block mb-1">HIGHLIGHT (shows progress bar)</label>
                        <ToggleBtn active={edu.highlight} labelOn="HIGHLIGHTED" labelOff="NORMAL"
                          onToggle={() => updItem('education', edu.id, 'highlight', !edu.highlight)} />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {/* ════════════════════════════════════════
                SOCIAL LINKS
            ════════════════════════════════════════ */}
            {activeTab === 'social' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-display text-[10px] text-gray-500 tracking-widest">{(d.social || []).length} LINKS</p>
                </div>

                {(d.social || []).map((s, i) => (
                  <div key={s.id} className="bg-[#0d0d0d] border border-[#1a1a1a] p-4 flex items-center gap-3">
                    <GripVertical size={14} className="text-gray-700 flex-shrink-0" />
                    <div className="grid grid-cols-2 gap-3 flex-1">
                      <Field label="LABEL (shown to visitors)" value={s.label}
                        onChange={v => updItem('social', s.id, 'label', v)} placeholder="GitHub" />
                      <Field label="URL" value={s.href}
                        onChange={v => updItem('social', s.id, 'href', v)} placeholder="https://..." />
                    </div>
                    <button onClick={() => removeItem('social', s.id)}
                      className="text-[#ff3366]/40 hover:text-[#ff3366] transition-colors flex-shrink-0 p-1">
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}

                {/* Add new social */}
                <div className="bg-[#0d0d0d] border border-dashed border-[#00f5d4]/20 p-5 rounded-sm">
                  <p className="font-display text-[10px] text-[#00f5d4]/60 tracking-widest mb-4">ADD NEW SOCIAL LINK</p>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <Field label="LABEL" value={newSocialLabel} onChange={setNewSocialLabel} placeholder="GitHub, LinkedIn, Portfolio..." />
                    <Field label="URL" value={newSocialHref} onChange={setNewSocialHref} placeholder="https://..." />
                  </div>
                  <button onClick={() => {
                    if (!newSocialLabel.trim() || !newSocialHref.trim()) { toast.error('Fill both label and URL.'); return }
                    addItem('social', { id: Date.now(), label: newSocialLabel.trim(), href: newSocialHref.trim() })
                    setNewSocialLabel(''); setNewSocialHref('')
                    toast.success(`Added ${newSocialLabel}!`)
                  }} className="flex items-center gap-2 bg-[#00f5d4]/10 border border-[#00f5d4]/30 text-[#00f5d4] font-display text-[10px] tracking-widest px-4 py-2 hover:bg-[#00f5d4]/20 transition-colors">
                    <Plus size={11} /> ADD LINK
                  </button>
                </div>
              </div>
            )}

            {/* ════════════════════════════════════════
                EXPERIENCE
            ════════════════════════════════════════ */}
            {activeTab === 'experience' && (
              <div className="space-y-4">
                <div className="flex justify-end mb-2">
                  <AddBtn label="ADD EXPERIENCE" color="#7c3aed" onClick={() => addItem('experience', {
                    id: Date.now(), role: 'New Role', company: 'Company Name',
                    period: '2025', type: 'Industry', color: '#7c3aed',
                    points: 'Key responsibility 1.\nKey responsibility 2.',
                  })} />
                </div>

                {(d.experience || []).map((exp, i) => (
                  <Card key={exp.id} title={`EXP ${i + 1}: ${exp.role} @ ${exp.company}`} accent="#7c3aed"
                    onRemove={() => removeItem('experience', exp.id)}>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <Field label="ROLE / POSITION" value={exp.role} onChange={v => updItem('experience', exp.id, 'role', v)} />
                      <Field label="COMPANY / ORGANIZATION" value={exp.company} onChange={v => updItem('experience', exp.id, 'company', v)} />
                      <Field label="PERIOD" value={exp.period} onChange={v => updItem('experience', exp.id, 'period', v)} placeholder="May 2025 — June 2025" />
                      <Field label="TYPE" value={exp.type} onChange={v => updItem('experience', exp.id, 'type', v)} placeholder="Industry / NGO / Tech Society" />
                      <Field label="ACCENT COLOR" value={exp.color} onChange={v => updItem('experience', exp.id, 'color', v)} placeholder="#00f5d4" />
                    </div>
                    <Textarea label="BULLET POINTS (one per line)" value={exp.points} rows={4}
                      onChange={v => updItem('experience', exp.id, 'points', v)}
                      placeholder="Accomplished X by doing Y, resulting in Z." />
                  </Card>
                ))}
              </div>
            )}

            {/* ════════════════════════════════════════
                PROJECTS
            ════════════════════════════════════════ */}
            {activeTab === 'projects' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-display text-[10px] text-gray-500 tracking-widest">{(d.projects || []).length} PROJECTS</p>
                  <AddBtn label="ADD PROJECT" color="#00f5d4" onClick={() => addItem('projects', {
                    id: Date.now(), title: 'New Project', subtitle: 'Short tagline',
                    description: 'Project description here.', tech: 'React.js, Node.js',
                    liveLink: '', githubLink: '', color: '#00f5d4',
                    featured: false, period: '2025', icon: '🚀',
                  })} />
                </div>

                {(d.projects || []).map((p, i) => (
                  <Card key={p.id} title={`PROJECT ${i + 1}: ${p.title}`} accent="#00d68f"
                    onRemove={() => removeItem('projects', p.id)}>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <Field label="TITLE" value={p.title} onChange={v => updItem('projects', p.id, 'title', v)} />
                      <Field label="SUBTITLE" value={p.subtitle} onChange={v => updItem('projects', p.id, 'subtitle', v)} />
                      <Field label="PERIOD" value={p.period} onChange={v => updItem('projects', p.id, 'period', v)} />
                      <Field label="ICON (emoji)" value={p.icon} onChange={v => updItem('projects', p.id, 'icon', v)} />
                      <Field label="ACCENT COLOR" value={p.color} onChange={v => updItem('projects', p.id, 'color', v)} placeholder="#00f5d4" />
                      <div>
                        <label className="font-display text-[10px] tracking-widest text-gray-500 block mb-1">FEATURED BADGE</label>
                        <ToggleBtn active={p.featured} labelOn="FEATURED" labelOff="NOT FEATURED"
                          onToggle={() => updItem('projects', p.id, 'featured', !p.featured)} />
                      </div>
                      <Field label="LIVE LINK" value={p.liveLink} onChange={v => updItem('projects', p.id, 'liveLink', v)} placeholder="https://..." />
                      <Field label="GITHUB LINK" value={p.githubLink} onChange={v => updItem('projects', p.id, 'githubLink', v)} placeholder="https://github.com/..." />
                    </div>
                    <Textarea label="DESCRIPTION" value={p.description} rows={2} onChange={v => updItem('projects', p.id, 'description', v)} />
                    <div className="mt-4">
                      <Field label="TECH STACK (comma-separated)" value={p.tech} onChange={v => updItem('projects', p.id, 'tech', v)} placeholder="React.js, Node.js, MongoDB" />
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {/* ════════════════════════════════════════
                SKILLS & TECHNOLOGIES
            ════════════════════════════════════════ */}
            {activeTab === 'skills' && (
              <div className="space-y-6">
                {/* Skill categories */}
                <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-5 rounded-sm">
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#1a1a1a]">
                    <h3 className="font-display text-xs text-[#ffd60a] tracking-widest">SKILL CATEGORIES & BARS</h3>
                    <div className="flex items-center gap-3">
                      <input value={newSkillCat} onChange={e => setNewSkillCat(e.target.value)} placeholder="New category..."
                        className="bg-[#0a0a0a] border border-[#222] text-white text-xs px-3 py-1.5 font-body focus:outline-none focus:border-[#ffd60a]/50 w-36 placeholder-gray-700" />
                      <button onClick={() => {
                        if (!newSkillCat.trim()) return
                        if ((d.skills || {})[newSkillCat.trim()]) { toast.error('Category already exists.'); return }
                        setPortfolioData(p => ({ ...p, skills: { ...p.skills, [newSkillCat.trim()]: [] } }))
                        setNewSkillCat('')
                        toast.success(`Added category: ${newSkillCat}`)
                      }} className="flex items-center gap-1 font-display text-[10px] tracking-widest px-3 py-1.5 border border-[#ffd60a]/30 text-[#ffd60a] hover:bg-[#ffd60a]/10 transition-colors">
                        <Plus size={10} /> ADD CATEGORY
                      </button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {Object.entries(d.skills || {}).map(([cat, skillList]) => (
                      <div key={cat} className="border border-[#1a1a1a] p-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-display text-xs text-[#ffd60a] tracking-widest">{cat}</span>
                          <button onClick={() => {
                            const updated = { ...d.skills }; delete updated[cat]
                            setPortfolioData(p => ({ ...p, skills: updated }))
                            toast.success(`Removed category: ${cat}`)
                          }} className="text-[#ff3366]/40 hover:text-[#ff3366] transition-colors">
                            <Trash2 size={11} />
                          </button>
                        </div>

                        <div className="space-y-2 mb-3">
                          {skillList.map((sk, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <input value={sk.name} onChange={e => {
                                const updated = [...skillList]; updated[idx] = { ...sk, name: e.target.value }
                                setPortfolioData(p => ({ ...p, skills: { ...p.skills, [cat]: updated } }))
                              }} className="bg-[#0a0a0a] border border-[#222] text-white text-xs px-2 py-1.5 focus:outline-none focus:border-[#ffd60a]/40 flex-1 font-body" placeholder="Skill name" />
                              <input type="number" min="1" max="100" value={sk.level} onChange={e => {
                                const updated = [...skillList]; updated[idx] = { ...sk, level: Number(e.target.value) }
                                setPortfolioData(p => ({ ...p, skills: { ...p.skills, [cat]: updated } }))
                              }} className="bg-[#0a0a0a] border border-[#222] text-[#ffd60a] text-xs px-2 py-1.5 w-16 text-center focus:outline-none font-display" />
                              <span className="font-display text-[10px] text-gray-600">%</span>
                              <button onClick={() => {
                                const updated = skillList.filter((_, j) => j !== idx)
                                setPortfolioData(p => ({ ...p, skills: { ...p.skills, [cat]: updated } }))
                              }} className="text-[#ff3366]/40 hover:text-[#ff3366] transition-colors">
                                <X size={12} />
                              </button>
                            </div>
                          ))}
                        </div>

                        <button onClick={() => {
                          const updated = [...skillList, { name: 'New Skill', level: 75 }]
                          setPortfolioData(p => ({ ...p, skills: { ...p.skills, [cat]: updated } }))
                        }} className="flex items-center gap-1 font-display text-[9px] tracking-widest text-[#ffd60a]/60 hover:text-[#ffd60a] transition-colors">
                          <Plus size={10} /> ADD SKILL TO {cat.toUpperCase()}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* All Technologies tag cloud */}
                <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-5 rounded-sm">
                  <h3 className="font-display text-xs text-[#ffd60a] tracking-widest mb-5 pb-3 border-b border-[#1a1a1a]">
                    ALL TECHNOLOGIES TAG CLOUD
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {(d.allTechnologies || []).map((tech, i) => (
                      <span key={tech + i} className="flex items-center gap-1 tech-tag group">
                        {tech}
                        <button onClick={() => setArr('allTechnologies', (d.allTechnologies || []).filter((_, j) => j !== i))}
                          className="opacity-0 group-hover:opacity-100 text-[#ff3366] transition-opacity ml-1 hover:scale-125">
                          <X size={9} />
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input value={newTech} onChange={e => setNewTech(e.target.value)}
                      onKeyDown={e => {
                        if (e.key === 'Enter' && newTech.trim()) {
                          if ((d.allTechnologies || []).includes(newTech.trim())) { toast.error('Already exists.'); return }
                          setArr('allTechnologies', [...(d.allTechnologies || []), newTech.trim()])
                          setNewTech('')
                        }
                      }}
                      placeholder="Type tech name and press Enter or click Add..."
                      className="flex-1 bg-[#0a0a0a] border border-[#222] text-white text-xs px-3 py-2 font-body focus:outline-none focus:border-[#ffd60a]/50 placeholder-gray-700" />
                    <button onClick={() => {
                      if (!newTech.trim()) return
                      if ((d.allTechnologies || []).includes(newTech.trim())) { toast.error('Already exists.'); return }
                      setArr('allTechnologies', [...(d.allTechnologies || []), newTech.trim()])
                      setNewTech('')
                    }} className="flex items-center gap-1 bg-[#ffd60a]/10 border border-[#ffd60a]/30 text-[#ffd60a] font-display text-[10px] tracking-widest px-4 py-2 hover:bg-[#ffd60a]/20 transition-colors">
                      <Plus size={11} /> ADD
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ════════════════════════════════════════
                ACHIEVEMENTS
            ════════════════════════════════════════ */}
            {activeTab === 'achievements' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-display text-[10px] text-gray-500 tracking-widest">{(d.achievements || []).length} ACHIEVEMENTS</p>
                  <AddBtn label="ADD ACHIEVEMENT" color="#ffd60a" onClick={() => addItem('achievements', {
                    id: Date.now(), title: 'New Achievement', event: 'Event / Competition Name',
                    icon: '🏆', color: '#ffd60a', link: '#',
                  })} />
                </div>

                {(d.achievements || []).map((ach, i) => (
                  <Card key={ach.id} title={`ACHIEVEMENT ${i + 1}: ${ach.title}`} accent="#ffd60a"
                    onRemove={() => removeItem('achievements', ach.id)}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Field label="TITLE" value={ach.title} onChange={v => updItem('achievements', ach.id, 'title', v)} />
                      <Field label="EVENT / COMPETITION" value={ach.event} onChange={v => updItem('achievements', ach.id, 'event', v)} />
                      <Field label="ICON (emoji)" value={ach.icon} onChange={v => updItem('achievements', ach.id, 'icon', v)} />
                      <Field label="ACCENT COLOR" value={ach.color} onChange={v => updItem('achievements', ach.id, 'color', v)} placeholder="#ffd60a" />
                      <div className="md:col-span-2">
                        <Field label="CERTIFICATE / PROOF LINK (optional)" value={ach.link} onChange={v => updItem('achievements', ach.id, 'link', v)} placeholder="https://..." />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {/* ════════════════════════════════════════
                CERTIFICATIONS
            ════════════════════════════════════════ */}
            {activeTab === 'certifications' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-display text-[10px] text-gray-500 tracking-widest">{(d.certifications || []).length} CERTIFICATIONS</p>
                  <AddBtn label="ADD CERTIFICATION" color="#ff3366" onClick={() => addItem('certifications', {
                    id: Date.now(), title: 'New Certificate', issuer: 'Issuing Organization',
                    date: '2025', link: '#',
                  })} />
                </div>

                {(d.certifications || []).map((cert, i) => (
                  <Card key={cert.id} title={`CERT ${i + 1}: ${cert.title}`} accent="#ff3366"
                    onRemove={() => removeItem('certifications', cert.id)}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Field label="CERTIFICATE TITLE" value={cert.title} onChange={v => updItem('certifications', cert.id, 'title', v)} />
                      <Field label="ISSUING ORGANIZATION" value={cert.issuer} onChange={v => updItem('certifications', cert.id, 'issuer', v)} />
                      <Field label="DATE" value={cert.date} onChange={v => updItem('certifications', cert.id, 'date', v)} placeholder="June 2025" />
                      <Field label="CERTIFICATE LINK (optional)" value={cert.link} onChange={v => updItem('certifications', cert.id, 'link', v)} placeholder="https://..." />
                    </div>
                  </Card>
                ))}
              </div>
            )}

          </motion.div>
        </AnimatePresence>

        {/* Sticky save */}
        <div className="fixed bottom-6 right-6 z-50">
          <button onClick={handleSave}
            className="flex items-center gap-2 bg-[#00f5d4] text-black font-display text-xs tracking-widest px-6 py-3 shadow-[0_0_30px_rgba(0,245,212,0.4)] hover:bg-[#00d4b8] transition-colors">
            <Save size={14} /> SAVE CHANGES
          </button>
        </div>
      </div>
    </div>
  )
}
