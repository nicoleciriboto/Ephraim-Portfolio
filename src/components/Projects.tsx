import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';

const projects = [
  {
    title: 'Health & Fitness Website',
    category: 'SEO',
    description: 'Increased organic traffic by 10% through strategic SEO optimization.',
    url: 'http://www.Spclub.co.zw',
    metrics: [
      { label: 'Traffic Increase', value: '10%' },
      
    ],
  },
  {
    title: 'Content Plan for Play365',
    category: 'Content Marketing',
    description: 'Developed comprehensive content strategy resulting in 10+ qualified leads per month and industry thought leadership.',
    url: 'https://www.canva.com/design/DAG1xZndIt4/VKf_zx09Q64Cd8YJxw2KSA/view?utm_content=DAG1xZndIt4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h913ed36374',
    metrics: [
      { label: 'Monthly Leads', value: '10+' },
      { label: 'Engagement Rate', value: '8.2%' },
    ],
  },
  {
    title: 'Play365 Campaign',
    category: 'Social Media',
    description: 'Executed multi-platform social strategy that grew audience by 100% and increased engagement by 200%.',
    url: 'https://www.instagram.com/play365zw?igsh=NHQwdGc0aGIxMWo4',
    metrics: [
      { label: 'Audience Growth', value: '100%' },
      { label: 'Engagement', value: '200%' },
    ],
  },
  {
    title: 'Competitive Analysis',
    category: 'Analytics & Insights',
    description: 'Identified clear gaps in Coghlan Villas strategy and proposed actionable solutions based on competitors..',
    url: 'https://www.canva.com/design/DAGtOb2Vsyc/LbWYS6TVR-nbHNQwYNoX8A/view?utm_content=DAGtOb2Vsyc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h54cfe193bc',
    metrics: [
      { label: 'Content Implementation', value: '5+' },
      { label: 'Market Research', value: '5x' },
    ],
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-32">
      <div ref={ref} className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="mb-4 tracking-widest uppercase opacity-70">Portfolio</p>
          <h2 style={{ fontSize: '3rem', lineHeight: '1.2', fontWeight: '600' }}>
            Featured Projects
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="p-8 border border-black/20 rounded-2xl hover:border-black transition-all group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="uppercase tracking-wider mb-2 opacity-60">
                        {project.category}
                      </p>
                      <h3 style={{ fontSize: '1.75rem' }} className="mb-3">
                        {project.title}
                      </h3>
                    </div>
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title}`}
                        className="p-1 rounded hover:bg-black/5"
                      >
                        <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    ) : (
                      <ArrowUpRight
                        className="w-6 h-6 opacity-40"
                        aria-hidden
                      />
                    )}
                  </div>
                  <p className="opacity-70 mb-6">{project.description}</p>
                  <div className="flex gap-8">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p style={{ fontSize: '1.75rem', fontWeight: '600' }}>{metric.value}</p>
                        <p className="opacity-60">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
