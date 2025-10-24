import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { Hero3DBackground } from './Hero3DBackground';
import React from 'react'

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
       {/* 3D Background */}
      <Hero3DBackground />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 tracking-widest uppercase"
          >
            Digital Marketing Specialist & UI/UX Designer
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', lineHeight: '1.1', fontWeight: '600' }}
          >
            Transforming Brands
            <br />
            <span className="italic">Into Digital Success</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-12 max-w-2xl mx-auto opacity-70"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}
          >
            Strategic digital marketing solutions that drive growth, engagement, and measurable results for forward-thinking brands.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-black text-white rounded-full hover:opacity-80 cursor-pointer transition-opacity"
              style={{pointerEvents: 'auto' , zIndex: 40}}
            >
              Get In Touch
            </button>
            <a
              href="/Ephraim%20T.O%20Buruvuru%20Resume%202025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="px-8 py-4 border border-black rounded-full hover:bg-black hover:text-white cursor-pointer transition-all"
              style={{pointerEvents: 'auto' , zIndex: 40}}
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>
        
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={scrollToAbout}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce"
          style={{pointerEvents: 'auto' , zIndex: 40}}

        >
          <ArrowDown className="w-6 h-6"
           />
        </motion.button>
      </div>
    </section>
  );
}
