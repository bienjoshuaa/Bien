import { motion } from 'framer-motion'
import { profile } from '../data/data'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-24">
      <div className="container-responsive py-10 text-base text-secondary flex flex-wrap items-center justify-between gap-4">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer"
        >
          © {new Date().getFullYear()} {profile.name}
        </motion.div>
        <div className="flex gap-6">
          <motion.a 
            href="#hero" 
            className="hover:text-accent transition-colors relative group"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative">
              Back to top
              <motion.div 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </span>
          </motion.a>
          
          {/* Additional interactive links */}
          <motion.a 
            href="#about" 
            className="hover:text-accent transition-colors relative group"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative">
              About
              <motion.div 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </span>
          </motion.a>
          
          <motion.a 
            href="#contact" 
            className="hover:text-accent transition-colors relative group"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative">
              Contact
              <motion.div 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </span>
          </motion.a>
        </div>
      </div>
    </footer>
  )
}



