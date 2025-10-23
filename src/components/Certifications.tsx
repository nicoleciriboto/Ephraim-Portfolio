import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award } from 'lucide-react';
import React from 'react'

const certifications = [
  {
    provider: 'UNCOMMON',
    certs: ['Digital Marketing',
      'Entrepreneurship',
    ],
  },
  {
    provider: 'GOOGLE GARAGE',
    certs: [
      'Fundamentals of Digital Marketing',
      'Google Analytics',
      'Foundations of UX Design',
    ],
  },
  {
    provider: 'HUBSPOT ACADEMY',
    certs: [
      'Digital Marketing',
      'Email Marketing',
      'Social Media Marketing',
    ],
  },
  {
    provider: 'eMarketing Institute',
    certs: ['Search Engine Optimization'],
  },
];

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="certifications" className="min-h-screen flex items-center justify-center px-6 py-32 bg-black text-white">
      <div ref={ref} className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="mb-4 tracking-widest uppercase opacity-70">Credentials</p>
          <h2 style={{ fontSize: '3rem', lineHeight: '1.2', fontWeight: '600' }}>
            Certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((group, index) => (
            <motion.div
              key={group.provider}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-8 border border-white/20 rounded-2xl hover:border-white/40 transition-all"
            >
              <div className="flex items-start gap-4 mb-6">
                <Award className="w-6 h-6 mt-1 flex-shrink-0" />
                <h3 className="uppercase tracking-wider" style={{ fontSize: '1.125rem' }}>
                  {group.provider}
                </h3>
              </div>
              <ul className="space-y-3">
                {group.certs.map((cert) => (
                  <li key={cert} className="opacity-80 pl-10 relative before:content-['•'] before:absolute before:left-0 before:opacity-50">
                    {cert}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
