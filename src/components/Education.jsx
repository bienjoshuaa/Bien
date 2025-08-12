import { motion } from 'framer-motion'
import { education } from '../data/data'

export default function Education() {
  return (
    <section id="education" className="container-responsive section-padding">
      <h2 className="section-title">Education</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((e, index) => (
          <motion.div
            key={`${e.title}-${e.school}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
            whileHover={{ 
              scale: 1.03, 
              y: -5,
              rotateY: 3
            }}
            whileTap={{ scale: 0.98 }}
            className="card hover:border-zinc-700 hover:bg-zinc-800/50 transition-all duration-150 cursor-pointer group"
          >
            <h3 className="font-semibold text-primary text-base group-hover:text-white transition-colors duration-300">{e.title}</h3>
            <div className="text-sm text-secondary mt-1 group-hover:text-zinc-300 transition-colors duration-150">{e.school}</div>
            <div className="text-sm text-secondary group-hover:text-zinc-300 transition-colors duration-150">{e.period}</div>
            
            {/* Hover indicator */}
            <motion.div 
              className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
            >
              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}



