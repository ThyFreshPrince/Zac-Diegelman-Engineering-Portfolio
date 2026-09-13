import { useMemo, useState } from 'react';
import { Link, useParams } from 'wouter';
import { ArrowDownRight, ArrowLeft, ArrowRight, Check, ChevronRight, Clock3, ExternalLink, FileText, Linkedin, Mail, MapPin, Send, Wrench } from 'lucide-react';
import { EngineeringVisual } from '@/components/engineering-visual';
import { ButtonLink, SectionHeader } from '@/components/site-shell';
import { coursework, journey, projects, site, toolkit, type ProjectCategory } from '@/data/site';

const visualBySlug: Record<string, 'rotary' | 'beam' | 'cad' | 'prototype'> = {
  'robotic-manipulator': 'rotary',
  'mechatronics-vibration': 'beam',
  'additive-manufacturing': 'cad',
  'engineering-design-prototyping': 'prototype',
};

function ProjectCard({ slug, featured = false }: { slug: string; featured?: boolean }) {
  const project = projects.find((item) => item.slug === slug) ?? projects[0];
  return (
    <Link href={`/projects/${project.slug}`} data-testid={`card-project-${project.slug}`} className={`group grid border border-[#263742] bg-[#0d151d] transition-colors hover:border-[#59d8ef]/70 ${featured ? 'lg:grid-cols-[1.05fr_.95fr]' : 'md:grid-cols-[.9fr_1.1fr]'}`}>
      <EngineeringVisual variant={visualBySlug[project.slug]} className={`${featured ? 'min-h-[270px] lg:min-h-[390px]' : 'min-h-[220px]'} w-full`} label={`${project.title} technical diagram`} />
      <div className="flex flex-col justify-between p-5 sm:p-7">
        <div>
          <div className="mb-8 flex items-center justify-between font-mono text-[10px] uppercase tracking-[.15em] text-slate-500"><span className="text-[#59d8ef]">{project.index} / {project.category}</span><span>{project.year}</span></div>
          <h3 className={`${featured ? 'text-3xl sm:text-4xl' : 'text-2xl'} font-semibold leading-[1.02] tracking-[-.055em] text-slate-100 group-hover:text-[#b3edf6]`}>{project.title}</h3>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">{project.summary}</p>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-[#263742] pt-4"><span className="font-mono text-[10px] uppercase tracking-[.12em] text-slate-500">{project.discipline}</span><span className="flex h-8 w-8 items-center justify-center border border-[#334451] text-[#59d8ef] transition-colors group-hover:bg-[#59d8ef] group-hover:text-[#071017]"><ArrowUpRightIcon /></span></div>
      </div>
    </Link>
  );
}

function ArrowUpRightIcon() { return <ArrowRight size={15} className="-rotate-45" />; }

export function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-[#22303a]">
        <div className="absolute inset-0 engineering-grid opacity-40" />
        <div className="absolute right-[-10%] top-[-10%] h-[480px] w-[480px] rounded-full border border-[#59d8ef]/10 sm:h-[700px] sm:w-[700px]" />
        <div className="absolute right-[4%] top-[10%] hidden h-[420px] w-[420px] rounded-full border border-dashed border-[#59d8ef]/20 md:block" />
        <div className="relative mx-auto grid min-h-[680px] max-w-[1440px] items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1.2fr_.8fr] lg:px-12 lg:py-28">
          <div className="animate-rise">
            <div className="eyebrow mb-5 flex items-center gap-3"><span className="h-px w-10 bg-[#59d8ef]" /> Mechanical engineering / UNC Charlotte</div>
            <div className="mb-6 font-mono text-xs uppercase tracking-[.14em] text-slate-400">Zechariah “Zac” Diegelman <span className="text-slate-600">·</span> B.S.M.E. candidate <span className="text-slate-600">·</span> Expected December 2027</div>
            <h1 className="display-title max-w-4xl text-slate-100">I work where <span className="text-[#59d8ef]">ideas</span> meet the physical world.</h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">{site.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3"><ButtonLink href="/projects">View selected work</ButtonLink><ButtonLink href="/contact" secondary>Let’s connect</ButtonLink></div>
            <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-[.12em] text-slate-500"><span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#8bdc9f]" /> Available for opportunities</span><span className="flex items-center gap-2"><MapPin size={12} className="text-[#59d8ef]" /> Charlotte, NC</span></div>
          </div>
          <div className="relative hidden min-h-[380px] lg:block">
            <EngineeringVisual variant="rotary" className="animate-drift h-[390px] w-full border border-[#2b4553]" label="Rotary engineering diagram" />
            <div className="absolute -bottom-5 -left-9 border border-[#334451] bg-[#0b1219] px-4 py-3 font-mono text-[10px] uppercase tracking-[.1em] text-slate-400"><span className="text-[#59d8ef]">01</span> / design intent → physical system</div>
            <div className="absolute -right-5 top-8 flex h-14 w-14 items-center justify-center border border-[#59d8ef]/60 bg-[#0b1219] text-[#59d8ef]"><ArrowDownRight size={23} /></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div><div className="eyebrow mb-4">A useful starting point</div><p className="max-w-xs text-xl leading-8 text-slate-300">Curious about how a thing works? I want to understand it well enough to make the next version better.</p></div>
          <div className="grid gap-5 sm:grid-cols-3">
            {['Design with constraints in view.', 'Build early. Learn honestly.', 'Document what changed.'].map((text, i) => <div key={text} className="border-l border-[#59d8ef] pl-5"><div className="font-mono text-xs text-[#59d8ef]">0{i + 1}</div><p className="mt-8 text-lg font-medium leading-7 text-slate-200">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="border-y border-[#22303a] bg-[#0b1219]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <SectionHeader eyebrow="Selected work / 04" title="Small portfolio. Real design questions." copy="A few project directions that show how I approach motion, measurement, geometry, and the gap between a model and a working object." />
          <div className="grid gap-5"><ProjectCard slug="robotic-manipulator" featured /><div className="grid gap-5 md:grid-cols-2"><ProjectCard slug="mechatronics-vibration" /><ProjectCard slug="additive-manufacturing" /></div></div>
          <div className="mt-8 flex justify-end"><ButtonLink href="/projects" secondary>Browse the project archive</ButtonLink></div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionHeader eyebrow="How I work" title="From question to evidence." copy="The most interesting part of engineering is rarely the first idea. It is the loop that follows." />
        <div className="grid border-y border-[#263742] sm:grid-cols-4">
          {['Frame', 'Model', 'Make', 'Learn'].map((step, i) => <div key={step} className="group border-b border-[#263742] p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:p-7 sm:last:border-r-0"><div className="flex items-center justify-between"><span className="font-mono text-[10px] text-[#59d8ef]">0{i + 1}</span><ChevronRight size={14} className="text-slate-600 transition-transform group-hover:translate-x-1 group-hover:text-[#59d8ef]" /></div><h3 className="mt-14 text-2xl font-semibold tracking-[-.04em] text-slate-100">{step}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{['Clarify interfaces, constraints, and what needs to be true.', 'Make the design intent visible before detail gets expensive.', 'Put a physical object in the loop and see what the model missed.', 'Use observations to choose the next, better question.'][i]}</p></div>)}
        </div>
      </section>

      <section className="border-y border-[#22303a] bg-[#10202a]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div><div className="eyebrow mb-3">Next interface</div><h2 className="max-w-2xl text-3xl font-semibold tracking-[-.055em] text-slate-100 sm:text-4xl">If you are solving a physical problem, I would like to hear how you think about it.</h2></div>
          <ButtonLink href="/contact">Get in touch</ButtonLink>
        </div>
      </section>
    </div>
  );
}

export function ProjectsPage() {
  const [filter, setFilter] = useState<'All' | ProjectCategory>('All');
  const categories: Array<'All' | ProjectCategory> = ['All', 'Mechatronics', 'Design', 'Manufacturing', 'Prototyping'];
  const filtered = useMemo(() => filter === 'All' ? projects : projects.filter((project) => project.category === filter), [filter]);
  return <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
    <div className="mb-16 max-w-3xl"><div className="eyebrow mb-5">Project archive / 04 entries</div><h1 className="text-5xl font-semibold tracking-[-.07em] text-slate-100 sm:text-7xl">Work in the loop.</h1><p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">A growing record of designing, making, testing, and asking a better question next.</p></div>
    <div className="mb-10 flex flex-wrap gap-2 border-y border-[#263742] py-4" role="group" aria-label="Filter projects">{categories.map((category) => <button key={category} type="button" onClick={() => setFilter(category)} data-testid={`button-filter-${category.toLowerCase()}`} className={`focus-ring border px-3 py-2 font-mono text-[10px] uppercase tracking-[.12em] transition-colors ${filter === category ? 'border-[#59d8ef] bg-[#59d8ef] text-[#071017]' : 'border-[#334451] text-slate-400 hover:border-[#59d8ef] hover:text-[#59d8ef]'}`}>{category}</button>)}</div>
    <div className="mb-7 flex items-center justify-between font-mono text-[10px] uppercase tracking-[.12em] text-slate-600"><span data-testid="text-project-count">{String(filtered.length).padStart(2, '0')} projects shown</span><span>Click a project to open its case study</span></div>
    <div className="grid gap-5">{filtered.map((project) => <ProjectCard key={project.slug} slug={project.slug} featured={project.index === '01'} />)}</div>
  </div>;
}

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFound />;
  return <article>
    <div className="border-b border-[#22303a] bg-[#0b1219]"><div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-12"><Link href="/projects" data-testid="link-back-projects" className="focus-ring inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.13em] text-slate-500 hover:text-[#59d8ef]"><ArrowLeft size={14} /> Project archive</Link></div></div>
    <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-12 lg:py-24">
      <div><div className="eyebrow mb-5">{project.index} / {project.category}</div><h1 className="text-5xl font-semibold leading-[.95] tracking-[-.07em] text-slate-100 sm:text-7xl">{project.title}</h1><p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">{project.brief}</p><div className="mt-9 flex flex-wrap gap-2">{project.tools.map((tool) => <span key={tool} className="border border-[#334451] px-3 py-2 font-mono text-[10px] uppercase tracking-[.1em] text-slate-400">{tool}</span>)}</div></div>
      <EngineeringVisual variant={visualBySlug[project.slug]} className="min-h-[300px] w-full border border-[#2b4553] sm:min-h-[430px]" label={`${project.title} case study diagram`} />
    </section>
    <section className="border-y border-[#22303a] bg-[#0b1219]"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 sm:px-8 md:grid-cols-3 lg:px-12"><div><div className="eyebrow mb-3">Role</div><p className="text-sm text-slate-300">{project.role}</p></div><div><div className="eyebrow mb-3">Status</div><p className="text-sm text-slate-300">{project.status}</p></div><div><div className="eyebrow mb-3">Year</div><p className="font-mono text-sm text-slate-300">{project.year}</p></div></div></section>
    <section className="mx-auto grid max-w-[1100px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:py-28">
      <div><div className="eyebrow mb-4">Design approach</div><p className="text-xl leading-8 text-slate-300">The work is about making the unknowns visible early enough to do something useful with them.</p></div>
      <div className="space-y-9">{project.approach.map((item, i) => <div key={item} className="flex gap-5 border-b border-[#263742] pb-8"><span className="font-mono text-xs text-[#59d8ef]">0{i + 1}</span><p className="text-base leading-7 text-slate-400">{item}</p></div>)}</div>
    </section>
    <section className="border-y border-[#22303a] bg-[#0b1219]"><div className="mx-auto grid max-w-[1100px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:py-24"><div><div className="eyebrow mb-5">Deliverables</div><ul className="space-y-4">{project.deliverables.map((item) => <li key={item} className="flex gap-3 text-sm text-slate-300"><Check size={16} className="mt-0.5 shrink-0 text-[#59d8ef]" />{item}</li>)}</ul></div><div><div className="eyebrow mb-5">Outcomes / editable</div><ul className="space-y-4">{project.outcomes.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-400"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f2b963]" />{item}</li>)}</ul></div></div></section>
    <div className="mx-auto flex max-w-[1100px] justify-between gap-4 px-5 py-12 sm:px-8"><Link href="/projects" data-testid="link-detail-back" className="focus-ring inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.13em] text-slate-500 hover:text-[#59d8ef]"><ArrowLeft size={14} /> All projects</Link><Link href="/contact" data-testid="link-detail-contact" className="focus-ring inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.13em] text-[#59d8ef]">Discuss the work <ArrowRight size={14} /></Link></div>
  </article>;
}

export function AboutPage() {
  return <div>
    <section className="border-b border-[#22303a] bg-[#0b1219]"><div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24"><div className="eyebrow mb-5">About / working profile</div><h1 className="max-w-5xl text-5xl font-semibold leading-[.95] tracking-[-.07em] text-slate-100 sm:text-8xl">A practical mind for <span className="text-[#59d8ef]">complicated things.</span></h1><p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">I am Zac — a Mechanical Engineering senior at UNC Charlotte who likes the part where the drawing becomes a thing you can touch, inspect, and improve.</p></div></section>
    <section className="mx-auto grid max-w-[1440px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-12 lg:py-28"><div><div className="eyebrow mb-4">The short version</div><div className="sticky top-28"><p className="text-3xl font-medium leading-tight tracking-[-.04em] text-slate-200">I bring a builder’s attention to engineering work.</p><div className="mt-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.12em] text-slate-500"><MapPin size={14} className="text-[#59d8ef]" /> Charlotte, North Carolina</div></div></div><div className="space-y-7 text-base leading-8 text-slate-400"><p>Before studying mechanical engineering, I spent time in cabinetry, construction, landscaping, home-service work, farm work, and mechanical work. That background taught me that a good solution has to survive contact with tools, weather, people, time, and the next repair.</p><p>At UNC Charlotte, I am turning that intuition into engineering practice: clearer assumptions, better models, careful documentation, and tests that answer a real question. I am especially drawn to mechatronics, product development, and the design of physical systems.</p><p>I also bring perspective from time in Costa Rica and Honduras and Spanish proficiency. Working across language and context made me more observant, more adaptable, and more interested in the person on the other side of an interface.</p></div></section>
    <section className="border-y border-[#22303a] bg-[#0b1219]"><div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12"><SectionHeader eyebrow="Career journey" title="Useful experience compounds." /><div className="ml-3 border-l border-[#334451]">{journey.map((item) => <div key={item.title} className="relative grid gap-4 border-b border-[#263742] pb-10 pl-8 pt-2 last:border-0 md:grid-cols-[120px_1fr] md:gap-10"><span className="absolute -left-[5px] top-3 h-2 w-2 rounded-full bg-[#59d8ef]" /><div className="font-mono text-xs uppercase tracking-[.12em] text-[#59d8ef]">{item.date}</div><div><h3 className="text-xl font-semibold tracking-[-.03em] text-slate-100">{item.title}</h3><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">{item.copy}</p></div></div>)}</div></div></section>
    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><SectionHeader eyebrow="Engineering toolkit" title="A toolkit that starts with attention." /><div className="grid gap-4 md:grid-cols-2">{toolkit.map((item, i) => <div key={item.label} className="group border border-[#263742] p-6 transition-colors hover:border-[#59d8ef]/60"><div className="flex items-start justify-between"><Wrench size={18} className="text-[#59d8ef]" /><span className="font-mono text-[10px] text-slate-600">0{i + 1}</span></div><h3 className="mt-12 text-xl font-semibold text-slate-100">{item.label}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{item.detail}</p></div>)}</div></section>
  </div>;
}

export function ResumePage() {
  return <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24"><div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><div className="eyebrow mb-5">Resume / one-page view</div><h1 className="text-5xl font-semibold leading-[.95] tracking-[-.07em] text-slate-100 sm:text-7xl">The fast read.</h1><p className="mt-7 max-w-md text-base leading-7 text-slate-400">A recruiter-friendly snapshot of where I am, what I have worked on, and the kind of opportunity I am preparing for.</p><div className="mt-8 flex flex-wrap gap-3"><ButtonLink href="/assets/resume/Zechariah-Diegelman-Resume.pdf" download>Download PDF</ButtonLink><ButtonLink href="/contact" secondary>Contact Zac</ButtonLink></div><div className="mt-12 border-t border-[#263742] pt-5 font-mono text-[10px] uppercase tracking-[.12em] text-slate-600">Resume file path / assets/resume/</div></div><div className="border border-[#334451] bg-[#101a22] p-6 sm:p-10"><div className="mb-8 flex items-center justify-between border-b border-[#334451] pb-5"><div className="flex items-center gap-3"><FileText size={19} className="text-[#59d8ef]" /><span className="font-mono text-xs text-slate-300">ZECHARIAH-DIEGELMAN-RESUME</span></div><span className="font-mono text-[10px] text-slate-500">PREVIEW</span></div><div className="space-y-8"><div><h2 className="text-3xl font-semibold tracking-[-.05em] text-slate-100">Zechariah “Zac” Diegelman</h2><p className="mt-2 font-mono text-xs uppercase tracking-[.12em] text-[#59d8ef]">Mechanical Engineering Student</p></div><div className="grid gap-6 border-y border-[#263742] py-6 sm:grid-cols-2"><div><div className="eyebrow mb-2">Education</div><p className="text-sm text-slate-300">UNC Charlotte</p><p className="text-sm text-slate-500">B.S. Mechanical Engineering · Expected Dec 2027</p><p className="mt-2 text-sm text-slate-500">CPCC Associate in Engineering</p></div><div><div className="eyebrow mb-2">Contact</div><p className="text-sm text-slate-300">{site.email}</p><p className="text-sm text-slate-500">{site.location}</p><p className="mt-2 text-sm text-slate-500">Spanish proficiency</p></div></div><div><div className="eyebrow mb-3">Focus</div><div className="flex flex-wrap gap-2">{['Mechanical design', 'Mechatronics', 'Prototyping', 'Testing & troubleshooting'].map((item) => <span key={item} className="border border-[#334451] px-3 py-2 text-xs text-slate-400">{item}</span>)}</div></div><div className="border-l-2 border-[#f2b963] pl-4 text-sm leading-7 text-slate-400">Full resume PDF is the editable source of truth. This preview keeps the key context visible when a recruiter is moving quickly.</div></div></div></div></div>;
}

export function CourseworkPage() {
  return <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24"><div className="max-w-3xl"><div className="eyebrow mb-5">Coursework / archive</div><h1 className="text-5xl font-semibold tracking-[-.07em] text-slate-100 sm:text-7xl">The foundation under the work.</h1><p className="mt-7 text-lg leading-8 text-slate-400">An editable archive for the engineering concepts, methods, and classes shaping the way I approach physical systems.</p></div><div className="mt-16 border-y border-[#263742]">{coursework.map((course, i) => <div key={course.code + course.name} className="grid gap-4 border-b border-[#263742] px-4 py-6 last:border-0 sm:grid-cols-[150px_1fr_1fr] sm:items-center sm:px-6"><span className="font-mono text-xs text-[#59d8ef]">{course.code}</span><h2 className="text-xl font-medium tracking-[-.03em] text-slate-200">{course.name}</h2><p className="text-sm leading-6 text-slate-500">{course.note}</p></div>)}</div><section className="mt-20 grid gap-10 border-t border-[#263742] pt-12 md:grid-cols-[.8fr_1.2fr]"><div><div className="eyebrow mb-4">Learning posture</div><h2 className="text-3xl font-semibold tracking-[-.05em] text-slate-100">Keep the model honest.</h2></div><div className="grid gap-4 sm:grid-cols-2">{['Connect equations to a testable physical question.', 'Treat assumptions as things to revisit.', 'Write down what the system actually did.', 'Keep learning visible in the next revision.'].map((item, i) => <div key={item} className="flex gap-4 border border-[#263742] p-5"><span className="font-mono text-xs text-[#f2b963]">0{i + 1}</span><p className="text-sm leading-6 text-slate-400">{item}</p></div>)}</div></section></div>;
}

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  return <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24"><div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]"><div><div className="eyebrow mb-5">Contact / open channel</div><h1 className="text-5xl font-semibold leading-[.95] tracking-[-.07em] text-slate-100 sm:text-7xl">Let’s talk about the work.</h1><p className="mt-7 max-w-md text-lg leading-8 text-slate-400">I am open to internships, co-ops, and engineering opportunities where thoughtful design and practical problem solving matter.</p><div className="mt-12 space-y-5"><a href={`mailto:${site.email}`} data-testid="link-contact-email" className="flex items-center gap-4 text-slate-300 hover:text-[#59d8ef]"><span className="flex h-10 w-10 items-center justify-center border border-[#334451] text-[#59d8ef]"><Mail size={17} /></span><span><span className="eyebrow block mb-1">Email</span>{site.email}</span></a><a href={site.linkedin} target="_blank" rel="noreferrer" data-testid="link-contact-linkedin" className="flex items-center gap-4 text-slate-300 hover:text-[#59d8ef]"><span className="flex h-10 w-10 items-center justify-center border border-[#334451] text-[#59d8ef]"><Linkedin size={17} /></span><span><span className="eyebrow block mb-1">LinkedIn</span>Connect with Zac</span><ExternalLink size={14} className="ml-auto text-slate-600" /></a></div></div><div className="border border-[#334451] bg-[#0d151d] p-6 sm:p-10"><div className="mb-8 flex items-start justify-between"><div><div className="eyebrow mb-3">Message intake</div><h2 className="text-2xl font-semibold tracking-[-.04em] text-slate-100">Start with the problem.</h2></div><Send size={19} className="text-[#59d8ef]" /></div>{sent ? <div className="border border-[#8bdc9f]/40 bg-[#8bdc9f]/5 p-6" data-testid="status-message-sent"><div className="mb-3 flex items-center gap-2 text-[#8bdc9f]"><Check size={17} /> Ready to send</div><p className="text-sm leading-6 text-slate-400">This form is ready for a provider connection. For now, email Zac directly at <a className="text-slate-200 underline" href={`mailto:${site.email}`}>{site.email}</a>.</p><button type="button" onClick={() => setSent(false)} data-testid="button-send-another" className="mt-5 font-mono text-[10px] uppercase tracking-[.12em] text-[#59d8ef]">Send another message</button></div> : <form onSubmit={handleSubmit} className="space-y-6"><label className="block"><span className="eyebrow mb-2 block">Your name</span><input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} data-testid="input-contact-name" className="focus-ring w-full border border-[#334451] bg-[#0a1118] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600" placeholder="Name" /></label><label className="block"><span className="eyebrow mb-2 block">Email address</span><input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} data-testid="input-contact-email" className="focus-ring w-full border border-[#334451] bg-[#0a1118] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600" placeholder="you@company.com" /></label><label className="block"><span className="eyebrow mb-2 block">What are you working on?</span><textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} data-testid="input-contact-message" className="focus-ring w-full resize-y border border-[#334451] bg-[#0a1118] px-4 py-3 text-sm leading-6 text-slate-200 placeholder:text-slate-600" placeholder="A few lines about the problem, team, or opportunity." /></label><button type="submit" data-testid="button-contact-submit" className="focus-ring inline-flex items-center gap-2 bg-[#59d8ef] px-4 py-3 font-mono text-[10px] uppercase tracking-[.13em] text-[#071017] hover:bg-[#b3edf6]">Prepare message <ArrowRight size={14} /></button><p className="font-mono text-[10px] leading-5 text-slate-600">Provider connection placeholder — no message is sent yet.</p></form>}</div></div></div>;
}

export function NotFound() {
  return <div className="mx-auto flex min-h-[65vh] max-w-[900px] flex-col items-center justify-center px-5 py-20 text-center"><EngineeringVisual variant="signal" className="mb-10 h-52 w-full max-w-xl border border-[#334451]" label="Signal not found diagram" /><div className="eyebrow mb-5">404 / signal lost</div><h1 className="text-5xl font-semibold tracking-[-.07em] text-slate-100">This page is off the drawing.</h1><p className="mt-5 max-w-md text-slate-500">The route you requested does not exist. The useful next move is probably back to the project archive.</p><div className="mt-8"><ButtonLink href="/">Return home</ButtonLink></div></div>;
}
