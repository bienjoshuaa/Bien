import { motion } from 'framer-motion'
import { certificates } from '../data/data'

export default function Certificates() {
  return (
    <section id="certificates" className="container-responsive section-padding">
      <h2 className="section-title">Certificates</h2>
      <div className="flex flex-wrap gap-4">
        {certificates.map((c, index) => (
          <motion.div
            key={`${c.title}-${c.date}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.1, 
              y: -5,
              rotateY: 10
            }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300 px-6 py-3 text-base hover:border-zinc-700 hover:bg-zinc-800 hover:text-white transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-xl"
          >
            <span className="group-hover:scale-105 transition-transform duration-300 inline-block">
              {c.title} — {c.date}
            </span>
            
            {/* Hover glow effect */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1.2 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}


