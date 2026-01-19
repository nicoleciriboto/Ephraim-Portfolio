import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';
import React from 'react'

const experiences = [
  {
    role: 'Digital Marketer',
    company: '',
    period: 'Jan 2025 - Present',
    responsibilities: [
      'Gained hands-on experience with all aspects of digital marketing, including social media marketing, SEO, Email marketing, web analytics, and search engine marketing.',
      'Managed social media accounts for the organization, increasing followers and engagement.',
      'Analyzed web traffic data to identify trends and areas for improvement.',
      'Developed and implemented digital marketing campaigns to promote the organization\'s mission and programs.',
    ],
  },
  {
    role: 'Youth Coding Instructor',
    company: 'Uncommon',
    period: 'Jan - June 2025',
    responsibilities: [
      'Involved in a youth coding program that aims to teach coding and game development to primary and secondary school students in our community.',
    ],
  },
  {
    role: 'Digital Marketing Intern',
    company: 'RedZone Digital',
    period: 'July - Dec 2025',
    responsibilities: [
      'Contributed to the development and execution of marketing strategies across diverse sectors, including insurance, food service, fitness, and ESG consulting.',
      'Conducted competitor research, developed marketing proposals, and created social media content plans that improved client engagement and brand visibility.',
      'Assisted with SEO optimization, Google Business registration, and analytics reporting, helping clients strengthen their online presence.',
      'Played a key role in event planning and communication for major initiatives such as the ESG Workshop and CyberZim Launch, managing registration platforms, outreach, and post-event engagement.',
      'Supported commercial production through scriptwriting, acting, storyboarding, and drone coordination.',
      'Led social media management for Play365, achieving rapid engagement growth on Instagram and Facebook.',
      'Created Standard Operating Procedures (SOPs) and used Notion to track project performance across teams, gaining hands-on experience in workflow management and operations.',
    ],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-32 bg-white text-black">
      <div ref={ref} className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="mb-4 tracking-widest uppercase opacity-70">Career</p>
          <h2 style={{ fontSize: '3rem', lineHeight: '1.2', fontWeight: '600' }}>
            Work Experience
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.role}-${exp.period}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="p-8 border border-black/20 rounded-2xl hover:border-black transition-all"
            >
              <div className="flex items-start gap-4 mb-6">
                <Briefcase className="w-6 h-6 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <div>
                      <h3 style={{ fontSize: '1.5rem' }}>{exp.role}</h3>
                      {exp.company && (
                        <p className="opacity-70 mt-1">{exp.company}</p>
                      )}
                    </div>
                    <p className="uppercase tracking-wider opacity-60" style={{ fontSize: '0.875rem' }}>
                      {exp.period}
                    </p>
                  </div>
                  <ul className="space-y-3 mt-6">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="opacity-80 pl-6 relative before:content-['•'] before:absolute before:left-0 before:opacity-50">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
