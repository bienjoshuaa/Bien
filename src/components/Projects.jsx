import { motion } from 'framer-motion'
import { projects } from '../data/data'

export default function Projects() {
  return (
    <section id="projects" className="container-responsive section-padding">
      <h2 className="section-title">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, index) => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.03, 
              y: -8,
              rotateY: 3
            }}
            whileTap={{ scale: 0.98 }}
            className="card hover:border-zinc-700 hover:bg-zinc-800/50 transition-all duration-150 cursor-pointer group"
          >
            <motion.div 
              className="aspect-video bg-zinc-800 mb-4 rounded group-hover:bg-zinc-700 transition-colors duration-150"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.15 }}
            />
            <div className="text-sm text-accent font-medium group-hover:text-blue-300 transition-colors duration-150">{p.tech}</div>
            <h3 className="mt-2 font-semibold text-primary text-base group-hover:text-white transition-colors duration-150">{p.title}</h3>
            <p className="mt-2 text-secondary text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-150">{p.desc}</p>
            
            {/* Hover indicator */}
            <motion.div 
              className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
            >
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </motion.div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}



