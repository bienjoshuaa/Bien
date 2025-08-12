import { motion } from 'framer-motion'
import { experience } from '../data/data'

export default function Experience() {
  return (
    <section id="experience" className="container-responsive section-padding">
      <h2 className="section-title">Experience</h2>
      <div className="relative">
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-zinc-800" />
        <div className="space-y-6">
          {experience.map((item, idx) => (
            <motion.div
              key={`${item.role}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative pl-10 sm:pl-14 group"
            >
              <motion.div 
                className="absolute left-5 sm:left-7 top-3 h-4 w-4 rounded-full bg-accent group-hover:scale-125 transition-transform duration-300"
                whileHover={{ scale: 1.3 }}
              />
              <motion.div 
                className="card hover:border-zinc-700 hover:bg-zinc-800/50 transition-all duration-300 cursor-pointer"
                whileHover={{ 
                  scale: 1.02, 
                  x: 5,
                  rotateY: 2
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="font-semibold text-primary text-base group-hover:text-white transition-colors duration-300">{item.role}</h3>
                  <span className="text-sm text-secondary group-hover:text-zinc-300 transition-colors duration-300">— {item.org}</span>
                </div>
                <div className="text-sm text-secondary mt-1 group-hover:text-zinc-300 transition-colors duration-300">{item.period}</div>
                <p className="mt-2 text-secondary text-base leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">{item.details}</p>
                
                {/* Hover indicator */}
                <motion.div 
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                >
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



