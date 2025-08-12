import { motion } from 'framer-motion'
import { profile } from '../data/data'

export default function About() {
  return (
    <section id="about" className="container-responsive section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <motion.h2 
          className="section-title"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          About Me
        </motion.h2>
        <motion.div 
          className="card hover:border-zinc-700 hover:bg-zinc-800/50 transition-all duration-300 cursor-pointer group"
          whileHover={{ 
            scale: 1.01, 
            y: -3,
            rotateY: 2
          }}
          whileTap={{ scale: 0.98 }}
        >
          <p className="section-subtitle group-hover:text-white transition-colors duration-300">
            {profile.summary}
          </p>
          
          {/* Interactive elements */}
          <motion.div 
            className="flex items-center gap-4 mt-6 pt-4 border-t border-zinc-800"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <motion.div 
              className="flex items-center gap-2 text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Passionate Developer</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Problem Solver</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>Team Player</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}



