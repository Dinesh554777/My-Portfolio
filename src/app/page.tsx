"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Code2,
  Download,
  Mail,
  MessageCircleMore,
  MonitorSmartphone,
  Sparkles,
  Trophy,
  Send,
  Cpu,
  Database,
  Cloud,
  Layers3,
  BriefcaseBusiness,
  ScrollText,
  Globe2,
  SquareTerminal,
} from 'lucide-react';

const rotatingTitles = [
  'Full Stack Developer',
  'GenAI Developer',
  'FastAPI Developer',
  'React Developer',
  'CSE Student',
];

const skillGroups = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'shadcn/ui'],
  },
  {
    title: 'Backend',
    items: ['FastAPI', 'Python', 'Java', 'PHP'],
  },
  {
    title: 'Database',
    items: ['MySQL', 'Qdrant'],
  },
  {
    title: 'AI',
    items: ['OpenAI', 'LlamaIndex', 'RAG', 'Prompt Engineering'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'Swagger UI', 'VS Code'],
  },
  {
    title: 'Cloud',
    items: ['Azure AI', 'Oracle OCI AI'],
  },
];

const experiences = [
  {
    company: 'Magizh Tech',
    role: 'Full Stack + GenAI Intern',
    description: 'Built a Blood Bank Management System with secure workflows and AI-assisted insights.',
    stack: ['React', 'FastAPI', 'MySQL'],
    highlights: ['REST APIs', 'Database Integration', 'Responsive UI', 'Authentication'],
  },
  {
    company: 'Techsnapie',
    role: 'Developer Intern',
    description: 'Delivered an online flower shop experience with inventory flows and backend integrations.',
    stack: ['React', 'Backend Integration', 'Inventory Management'],
    highlights: ['Responsive UI', 'Backend Integration', 'Inventory Management'],
  },
];

const projects = [
  {
    title: 'Blood Bank Management System',
    description: 'A secure and responsive platform to manage donors, requests, and blood inventory with modern UX.',
    stack: ['React', 'FastAPI', 'MySQL', 'Tailwind CSS'],
    link: '#',
  },
  {
    title: 'Student Management System',
    description: 'A CRUD-driven admin portal for managing student records and academic workflows.',
    stack: ['React', 'FastAPI', 'CRUD', 'REST API'],
    link: '#',
  },
  {
    title: 'DocLink',
    description: 'A healthcare platform with appointment booking, payment integration, and analytics insights.',
    stack: ['Healthcare Platform', 'Appointment Booking', 'Payment Integration', 'Analytics Dashboard'],
    link: '#',
  },
];

const certifications = [
  'Programming in Java (NPTEL)',
  'Azure AI Fundamentals',
  'Oracle OCI AI Foundations',
  'Python with Data Science',
  'Full Stack Development',
];

const achievements = [
  { label: 'Internships Completed', value: '2+' },
  { label: 'Projects Built', value: '8+' },
  { label: 'Technologies Learned', value: '20+' },
  { label: 'CGPA', value: '8.4' },
  { label: 'LeetCode Problems Solved', value: '150+' },
  { label: 'GitHub Repositories', value: '12+' },
];

const journey = ['2024', 'Started Programming', 'Python', 'Java', 'Frontend', 'React', 'Backend', 'FastAPI', 'GenAI', 'RAG', 'Building Production Projects'];

const socials = [
  { icon: SquareTerminal, href: 'https://github.com', label: 'GitHub' },
  { icon: Globe2, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: MessageCircleMore, href: 'https://leetcode.com', label: 'LeetCode' },
  { icon: Mail, href: 'mailto:dineshd@example.com', label: 'Email' },
];

export default function Home() {
  const [currentTitle, setCurrentTitle] = useState(rotatingTitles[0]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentTitle((previous) => {
        const currentIndex = rotatingTitles.indexOf(previous);
        const nextIndex = (currentIndex + 1) % rotatingTitles.length;
        return rotatingTitles[nextIndex];
      });
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);
  return (
    <main className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.2),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_45%,_#111827_100%)] text-slate-100">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-[-8%] h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle,_rgba(255,255,255,0.15)_1px,_transparent_1px)] [background-size:28px_28px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
          <div className="text-lg font-semibold tracking-[0.25em] text-cyan-300">DINESH D</div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-cyan-300">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="home" className="section-shell relative z-10 min-h-screen justify-center">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              <Sparkles size={16} /> Available for innovative product builds
            </div>
            <div className="space-y-4">
              <p className="text-lg uppercase tracking-[0.35em] text-slate-400">Hello, I&apos;m</p>
              <h1 className="text-5xl font-black leading-[0.9] sm:text-6xl lg:text-7xl">
                Dinesh D
              </h1>
              <div className="min-h-16 text-2xl font-semibold text-cyan-300 sm:text-3xl">
                <motion.span key={currentTitle} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                  {currentTitle}
                </motion.span>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                I build scalable full-stack experiences and AI-driven products with a sharp eye for elegant interfaces and production-ready architecture.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <motion.a whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.25)]">
                View Projects <ArrowRight size={18} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} href="/my-resume.pdf" download className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 font-semibold text-slate-100">
                <Download size={18} /> Download Resume
              </motion.a>
              <motion.a whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} href="#contact" className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-6 py-3 font-semibold text-purple-200">
                <Send size={18} /> Hire Me
              </motion.a>
            </div>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a key={label} whileHover={{ y: -4, scale: 1.06 }} href={href} target="_blank" rel="noreferrer" className="glass-panel flex h-12 w-12 items-center justify-center text-slate-100">
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative mx-auto flex w-full max-w-md justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 via-slate-900/0 to-purple-500/30 blur-3xl" />
            <div className="glass-panel relative overflow-hidden p-4">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.2),_transparent_50%)]" />
              <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
                <div className="absolute right-4 top-4 h-3 w-3 rounded-full bg-cyan-300" />
                <div className="flex h-full items-center justify-center rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 p-4">
                  <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-cyan-400/60 bg-[radial-gradient(circle,_rgba(34,211,238,0.25),_transparent_70%)] p-2 shadow-[0_0_40px_rgba(34,211,238,0.2)]">
                    <img
                      src="/profile.jpeg"
                      alt="Dinesh D"
                      className="h-full w-full rounded-full object-cover object-[center_12%]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -left-4 top-8 rounded-full border border-white/10 bg-slate-900/70 p-3 text-cyan-300">
              <Cpu size={20} />
            </div>
            <div className="absolute -right-2 bottom-8 rounded-full border border-white/10 bg-slate-900/70 p-3 text-purple-300">
              <Database size={20} />
            </div>
            <div className="absolute bottom-0 left-12 rounded-full border border-white/10 bg-slate-900/70 p-3 text-cyan-300">
              <Cloud size={20} />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section-shell relative z-10">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">About</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">A story shaped by curiosity and impact</h2>
          </div>
          <div className="hidden rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 md:block">Computer Science Engineering student</div>
        </div>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div whileHover={{ y: -8, rotateX: 3, rotateY: -3 }} className="glass-panel p-8">
            <p className="text-lg leading-8 text-slate-300">
              I&apos;m a Computer Science Engineering student who loves turning ambitious ideas into scalable software. My work sits at the intersection of full-stack engineering, AI systems, and thoughtful product design. I enjoy solving real-world problems through clean architecture, modern interfaces, and practical automation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['RAG', 'LLMs', 'FastAPI', 'System Design', 'Cloud Deployment'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
          <div className="space-y-4">
            {[
              ['2024', 'Started building software with Python and Java'],
              ['2025', 'Explored React, FastAPI, and database-driven applications'],
              ['Now', 'Building intelligent experiences with GenAI and cloud deployment'],
            ].map(([year, text]) => (
              <motion.div key={year} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} className="glass-panel flex items-start gap-4 p-5">
                <div className="rounded-full bg-cyan-400/15 p-3 text-cyan-300"><BriefcaseBusiness size={18} /></div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{year}</p>
                  <p className="mt-1 text-slate-200">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell relative z-10">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">Skills</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Crafting solutions with modern tools and thoughtful systems</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} whileHover={{ y: -8, scale: 1.01 }} className="glass-panel p-6">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                <div className="rounded-full bg-cyan-400/10 p-2 text-cyan-300"><Layers3 size={16} /></div>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-200">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="experience" className="section-shell relative z-10">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">Experience</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Building with teams that value execution and learning</h2>
        </div>
        <div className="space-y-6">
          {experiences.map((item, index) => (
            <motion.div key={item.company} initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} className="glass-panel grid gap-6 p-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">{item.company}</p>
                <h3 className="mt-2 text-2xl font-semibold">{item.role}</h3>
                <p className="mt-4 text-slate-300">{item.description}</p>
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-200">{tech}</span>
                  ))}
                </div>
                <ul className="space-y-2 text-slate-300">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2"><ArrowRight size={16} className="text-cyan-300" /> {h}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="section-shell relative z-10">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">Featured Projects</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Selected work with thoughtful UX and real-world impact</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} whileHover={{ y: -10, scale: 1.02 }} className="glass-panel overflow-hidden">
              <div className="border-b border-white/10 bg-slate-900/80 p-6">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="rounded-xl border border-cyan-400/20 bg-slate-950/80 p-4 text-sm text-slate-300">
                    <div className="mb-3 h-24 rounded-lg bg-gradient-to-br from-cyan-500/20 via-slate-900 to-purple-500/20" />
                    <div className="space-y-2">
                      <div className="h-2 w-3/4 rounded-full bg-white/10" />
                      <div className="h-2 w-1/2 rounded-full bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="rounded-full bg-cyan-400/10 p-2 text-cyan-300"><MonitorSmartphone size={16} /></div>
                </div>
                <p className="text-slate-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1.5 text-xs text-slate-200">{tech}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2 text-sm text-cyan-300">
                  <a href={project.link} className="inline-flex items-center gap-2 hover:text-cyan-200">Live preview <ArrowRight size={14} /></a>
                  <a href={project.link} className="inline-flex items-center gap-2 hover:text-cyan-200">GitHub <Code2 size={14} /></a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="certifications" className="section-shell relative z-10">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">Certifications</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Recognitions that reinforce my craft</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((item, index) => (
            <motion.div key={item} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} whileHover={{ y: -8, rotateX: 5, rotateY: -5 }} className="glass-panel p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-full bg-purple-500/10 p-3 text-purple-300"><Trophy size={18} /></div>
                <span className="text-sm text-slate-400">0{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-white">{item}</h3>
              <p className="mt-3 text-slate-300">Verified learning milestone in modern engineering and AI foundations.</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="achievements" className="section-shell relative z-10">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">Achievements</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Measurable momentum across learning and building</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((item) => (
            <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="glass-panel p-8 text-center">
              <p className="text-4xl font-black text-cyan-300">{item.value}</p>
              <p className="mt-3 text-slate-300">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="journey" className="section-shell relative z-10">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">Tech Journey</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">A steady path from curiosity to production-ready engineering</h2>
        </div>
        <div className="glass-panel flex flex-wrap items-center justify-center gap-4 p-8">
          {journey.map((step, index) => (
            <div key={`${step}-${index}`} className="flex items-center gap-4">
              <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">{step}</div>
              {index < journey.length - 1 && <ArrowRight size={16} className="text-slate-400" />}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} className="glass-panel p-8">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">Contact</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">Let&apos;s build something meaningful together</h2>
            <p className="mt-5 text-slate-300">I&apos;m always interested in ambitious ideas, collaborations, and product challenges that push me to grow.</p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4"><Mail size={18} className="text-cyan-300" /> dineshd@example.com</div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4"><BriefcaseBusiness size={18} className="text-cyan-300" /> Open to internships and freelance work</div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4"><ScrollText size={18} className="text-cyan-300" /> Based in India</div>
            </div>
          </motion.div>
          <motion.form initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} className="glass-panel p-8">
            <div className="grid gap-4">
              <input className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 outline-none ring-0" placeholder="Name" />
              <input className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 outline-none ring-0" placeholder="Email" />
              <textarea rows={5} className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 outline-none ring-0" placeholder="Message" />
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-5 py-3 font-semibold text-white">Send Message <Send size={16} /></button>
            </div>
          </motion.form>
        </div>
      </section>

      <footer className="section-shell relative z-10 border-t border-white/10 py-8 text-center text-slate-400">
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xl font-semibold text-cyan-200">“Building solutions that make an impact.”</motion.p>
        <div className="mt-6 flex justify-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/10 p-3 text-slate-200 hover:text-cyan-200">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
