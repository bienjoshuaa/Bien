import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi'
import { profile } from '../data/data'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const handler = () => setOpen(false)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0.1 }
    )
    navItems.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-zinc-900/95 border-b border-zinc-800">
      <nav className="container-responsive flex items-center justify-between h-16">
        <a href="#hero" className="text-xl font-semibold text-white">
          Bien Macuha
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm transition-colors ${
                active === item.id ? 'text-blue-400' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <a href={profile.social.github} aria-label="GitHub" className="text-zinc-400 hover:text-blue-400 transition-colors">
              <FiGithub size={18} />
            </a>
            <a href={profile.social.linkedin} aria-label="LinkedIn" className="text-zinc-400 hover:text-blue-400 transition-colors">
              <FiLinkedin size={18} />
            </a>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button onClick={() => setOpen((o) => !o)} aria-label="Open menu" className="p-2 text-zinc-400 hover:text-white transition-colors">
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="md:hidden border-t border-zinc-800 bg-zinc-900"
        >
          <div className="container-responsive py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`text-sm py-2 ${
                  active === item.id ? 'text-blue-400' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
              <a href={profile.social.github} aria-label="GitHub" className="text-zinc-400 hover:text-blue-400 transition-colors">
                <FiGithub size={18} />
              </a>
              <a href={profile.social.linkedin} aria-label="LinkedIn" className="text-zinc-400 hover:text-blue-400 transition-colors">
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}


