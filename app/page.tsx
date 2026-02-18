'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import userData from '@/data/userData';
import type { UserData } from '@/types/userData';
import { Navbar } from '@/components/Navbar';
import { Reveal } from '@/components/Reveal';
import { AnimatedCounter } from '@/components/AnimatedCounter';

const data = userData as UserData;

export default function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className="bg-hero-gradient pb-20"
    >
      <div className="mx-auto max-w-6xl px-4 pt-5 md:px-6">
        <Navbar />

        <section id="about" className="grid items-center gap-8 py-12 md:grid-cols-[1.3fr_1fr] md:py-20">
          <div>
            <motion.p
              className="mb-3 text-sm uppercase tracking-[0.24em] text-indigo-300"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.65 }}
            >
              {data.personal.goal}
            </motion.p>
            <motion.h1
              className="text-4xl font-semibold tracking-tight text-slate-100 md:text-6xl"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12 } }
              }}
            >
              {data.personal.name.split(' ').map((word) => (
                <motion.span
                  key={word}
                  className="mr-3 inline-block"
                  variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              className="mt-5 max-w-2xl text-base text-slate-300 md:text-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.65 }}
            >
              {data.personal.title}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, duration: 0.65 }}
            >
              {[{ label: 'View Projects', href: '#projects' }, { label: 'Contact', href: '#contact' }].map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  className="rounded-full border border-indigo-400/30 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 px-5 py-2.5 text-sm font-medium text-slate-100 transition duration-300 hover:scale-[1.03] hover:from-indigo-500/35 hover:to-purple-500/35"
                >
                  {btn.label}
                </a>
              ))}
            </motion.div>
          </div>

          <div className="section-shell gradient-border justify-self-center">
            <Image
              src={data.personal.headshot}
              alt={data.personal.name}
              width={300}
              height={300}
              className="mx-auto h-64 w-64 rounded-full object-cover shadow-2xl shadow-indigo-500/20"
            />
            <div className="mt-5 space-y-2 text-sm text-slate-300">
              <p>{data.education.degree}</p>
              <p>{data.education.institution}</p>
              <p>{data.education.duration}</p>
              <p>CGPA: {data.education.cgpa}</p>
            </div>
          </div>
        </section>

        <Reveal className="section-shell" >
          <h2 className="text-2xl font-semibold">Achievements</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {data.achievements.map((item) => (
              <p key={item} className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-slate-300">
                {item}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-8 section-shell" >
          <section id="experience">
            <h2 className="text-2xl font-semibold">Experience</h2>
            <div className="mt-6 space-y-4">
              {data.experience.map((job) => (
                <article key={job.company} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-medium">{job.role} · {job.company}</h3>
                    <p className="text-sm text-indigo-200">{job.duration}</p>
                  </div>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
                    {job.highlights.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal className="mt-8" >
          <section id="projects" className="space-y-5">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="grid gap-5 lg:grid-cols-2">
              {data.projects.map((project) => (
                <motion.article
                  key={project.id}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="group section-shell gradient-border overflow-hidden"
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                      <p className="text-sm font-medium">{project.title}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold">{project.title} {project.featured && <span className="text-sm text-indigo-300">(Featured)</span>}</h3>
                    <p className="mt-2 text-sm text-slate-300">{project.description}</p>
                    <p className="mt-3 text-xs uppercase tracking-wide text-indigo-200">{project.techStack.join(' · ')}</p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
                      {project.achievements.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                    {project.architecture && (
                      <div className="mt-4 rounded-xl border border-indigo-400/20 bg-indigo-500/[0.07] p-3">
                        <p className="text-xs uppercase tracking-[0.2em] text-indigo-200">{project.architecture.title}</p>
                        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-200">
                          {project.architecture.flow.map((node, index) => (
                            <div key={node} className="flex items-center gap-2">
                              <span className="rounded-lg border border-white/10 px-2 py-1">{node}</span>
                              {index < project.architecture.flow.length - 1 && <span>→</span>}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="mt-4 flex gap-3 text-sm">
                      <a href={project.githubUrl} className="rounded-lg border border-white/20 px-3 py-1.5 hover:border-indigo-300/40">GitHub</a>
                      <a href={project.liveUrl} className="rounded-lg border border-white/20 px-3 py-1.5 hover:border-indigo-300/40">Live Demo</a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal className="mt-8 section-shell" >
          <section id="profiles">
            <h2 className="text-2xl font-semibold">Coding Profiles</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.profiles.map((profile) => (
                <motion.a
                  key={profile.platform}
                  href={profile.url}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 14 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, ease: 'easeOut' }}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
                >
                  <p className="text-sm uppercase tracking-[0.16em] text-indigo-300">{profile.platform}</p>
                  <p className="mt-2 font-semibold">{profile.username}</p>
                  <p className="mt-1 text-sm text-slate-400">{profile.stats}</p>
                </motion.a>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal className="mt-8 section-shell" >
          <section id="leadership">
            <h2 className="text-2xl font-semibold">Leadership</h2>
            <p className="mt-3 text-slate-300">{data.leadership.role} · {data.leadership.organization}</p>
            <p className="mt-2 max-w-3xl text-sm text-slate-400">{data.leadership.summary}</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {data.leadership.metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-3xl font-semibold text-indigo-200">
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-slate-300">{metric.label}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal className="mt-8 section-shell" >
          <section id="contact">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <div className="mt-4 grid gap-6 md:grid-cols-[1fr_1.2fr]">
              <div className="space-y-3 text-sm text-slate-300">
                <p>Email: <a href={`mailto:${data.contacts.email}`} className="text-indigo-300">{data.contacts.email}</a></p>
                <p>LinkedIn: <a href={data.contacts.linkedin} className="text-indigo-300">Profile</a></p>
                <p>GitHub: <a href={data.contacts.github} className="text-indigo-300">Repository</a></p>
                <a
                  href={data.personal.resumeUrl}
                  className="inline-block rounded-lg border border-indigo-400/30 bg-indigo-500/20 px-4 py-2 transition duration-300 hover:scale-[1.03]"
                >
                  Download Resume
                </a>
              </div>
              <form className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <input placeholder="Name" className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none focus:border-indigo-300/50" />
                <input placeholder="Email" type="email" className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none focus:border-indigo-300/50" />
                <textarea placeholder="Message" rows={4} className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none focus:border-indigo-300/50" />
                <button type="button" className="rounded-lg bg-gradient-to-r from-indigo-500/50 to-purple-500/50 px-4 py-2 text-sm transition duration-300 hover:scale-[1.03]">
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </Reveal>
      </div>
    </motion.main>
  );
}
