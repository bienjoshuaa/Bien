import { motion } from 'framer-motion'
import { profile } from '../data/data'

export default function Contact() {
  const socials = [
    { 
      name: 'GitHub', 
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ), 
      href: 'https://github.com/bienjoshuaa', 
      color: 'hover:text-gray-400' 
    },
    { 
      name: 'LinkedIn', 
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ), 
      href: 'https://www.linkedin.com/in/bien-joshua-macuha-331150353', 
      color: 'hover:text-blue-400' 
    },
    { 
      name: 'Facebook', 
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ), 
      href: 'https://www.facebook.com/bienjoshua.macuha', 
      color: 'hover:text-blue-600' 
    },
    { 
      name: 'Instagram', 
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.49.49-1.078.807-1.765.807-.688 0-1.275-.317-1.765-.807-.49-.49-.807-1.078-.807-1.765s.317-1.275.807-1.765c.49-.49 1.078-.807 1.765-.807.688 0 1.275.317 1.765.807.49.49.807 1.078.807 1.765s-.317 1.275-.807 1.765z"/>
        </svg>
      ), 
      href: 'https://www.instagram.com/bienj.jsx/', 
      color: 'hover:text-pink-400' 
    },
    { 
      name: 'X', 
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ), 
      href: 'https://x.com/yourusername', 
      color: 'hover:text-black' 
    }
  ]

  return (
    <section id="contact" className="container-responsive section-padding">
      <h2 className="section-title">Contact</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          {[
            { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: '📧' },
            { label: 'Phone', value: profile.phone, href: `tel:${profile.phone}`, icon: '📱' },
            { label: 'Location', value: profile.location, href: '#', icon: '📍' }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02, 
                x: 5,
                rotateY: 2
              }}
              className="card hover:border-zinc-700 hover:bg-zinc-800/50 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                <p className="text-secondary text-base">
                  <strong className="text-primary group-hover:text-white transition-colors duration-300">{item.label}:</strong> 
                  {item.href !== '#' ? (
                    <a className="text-accent hover:text-blue-300 transition-colors ml-2" href={item.href}>
                      {item.value}
                    </a>
                  ) : (
                    <span className="ml-2 group-hover:text-zinc-300 transition-colors duration-300">{item.value}</span>
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold text-primary mb-6">Connect with me</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  rotateY: 10
                }}
                whileTap={{ scale: 0.95 }}
                className="card hover:border-zinc-700 hover:bg-zinc-800/50 transition-all duration-300 cursor-pointer group flex flex-col items-center justify-center py-6"
              >
                <span className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </span>
                <span className="text-sm text-secondary group-hover:text-white transition-colors duration-300 font-medium">
                  {social.name}
                </span>
                
                {/* Hover glow effect */}
                <motion.div 
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.2 }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}



