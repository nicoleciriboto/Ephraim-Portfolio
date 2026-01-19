import { motion } from 'motion/react';
import React from 'react'
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Target, TrendingUp, PenTool, BarChart3, Mail, Share2 } from 'lucide-react';
import { Hero3DBackground } from './Hero3DBackground';

const skills = [
  {
    icon: Target,
    title: 'SEO Strategy',
    description: 'Technical & on-page optimization for maximum visibility',
  },
  {
    icon: TrendingUp,
    title: 'PPC Campaigns',
    description: 'High-ROI paid advertising across Google & Meta platforms',
  },
  {
    icon: PenTool,
    title: 'Content Marketing',
    description: 'Compelling narratives that engage and convert audiences',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Data-driven decision making with actionable metrics',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Automated campaigns that nurture and retain customers',
  },
  {
    icon: Share2,
    title: 'Social Media',
    description: 'Strategic content and community management',
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center px-6 py-32 bg-black text-white overflow-hidden"
    >
      {/* Particle background */}
      <Hero3DBackground />

      {/* Content */}
      <div ref={ref} className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="mb-4 tracking-widest uppercase opacity-70">Expertise</p>
          <h2 style={{ fontSize: '3rem', lineHeight: '1.2', fontWeight: '600' }}>
            Skills & Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-8 border border-white/20 rounded-2xl hover:border-white/40 transition-all group"
            >
              <skill.icon className="w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="mb-3" style={{ fontSize: '1.5rem' }}>{skill.title}</h3>
              <p className="opacity-70">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}