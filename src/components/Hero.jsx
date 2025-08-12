import { motion } from 'framer-motion'
import { profile } from '../data/data'
import bienImage from '../assets/Bien.jpg'

export default function Hero() {
  return (
    <section id="hero" className="container-responsive section-padding">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm uppercase tracking-widest text-blue-400 font-medium"
            >
              Hello, I am
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl font-bold text-white leading-tight"
            >
              {profile.name}
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-xl text-zinc-300 leading-relaxed max-w-2xl">
              {profile.summary}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-zinc-300 font-medium">Available for opportunities</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-zinc-300 font-medium">Based in {profile.location}</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://drive.google.com/file/d/1zJzOCvZjTfvV8x0nqg7p3Dx8I4QvBJJ7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-zinc-600 hover:border-zinc-500 text-zinc-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Contact Me
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center md:justify-start md:pl-8"
        >
          <div className="relative group">
            {/* Single Image */}
            <motion.div 
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5
              }}
              transition={{ duration: 0.3 }}
              className="relative w-[400px] h-[560px] rounded-xl overflow-hidden border-2 border-zinc-800 shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer"
            >
              <img 
                src={bienImage} 
                alt="Bien Joshua Macuha" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
            
            {/* Floating accent elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -left-2 w-4 h-4 bg-blue-400 rounded-full opacity-60 blur-sm"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-2 -right-2 w-3 h-3 bg-green-400 rounded-full opacity-60 blur-sm"
            />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 -right-3 w-2 h-2 bg-purple-400 rounded-full opacity-60 blur-sm"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

