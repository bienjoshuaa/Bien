import { motion } from 'framer-motion'
import * as Si from 'react-icons/si'
import * as Fa from 'react-icons/fa'
import { skills } from '../data/data'

const iconMap = { ...Si, ...Fa }

export default function Skills() {
  return (
    <section id="skills" className="container-responsive section-padding">
      <h2 className="section-title">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map(({ name, icon }, index) => {
          const Icon = iconMap[icon]
          return (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                rotateY: 5
              }}
              whileTap={{ scale: 0.95 }}
              className="card flex items-center gap-3 hover:border-zinc-700 hover:bg-zinc-800/50 transition-all duration-300 cursor-pointer group"
            >
              <motion.div 
                className="text-accent text-xl group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {Icon ? <Icon /> : <Fa.FaCheck />}
              </motion.div>
              <div className="font-medium text-primary text-sm group-hover:text-white transition-colors duration-300">{name}</div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}



