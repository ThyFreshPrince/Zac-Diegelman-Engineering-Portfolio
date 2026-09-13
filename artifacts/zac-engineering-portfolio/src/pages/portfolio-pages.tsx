import { useMemo, useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  ExternalLink,
  FileText,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { Link, useParams } from "wouter";
import { ButtonLink, SectionHeader } from "@/components/site-shell";
import {
  academicProjects,
  beyondClassroomProjects,
  coursework,
  handsOnBackground,
  internationalExperience,
  journey,
  personalEditorialImages,
  projectFilters,
  projects,
  site,
  stockImages,
  toolkit,
  type Project,
  type ProjectCategory,
} from "@/data/site";

function ImageBlock({
  src,
  alt,
  className = "",
  caption,
}: {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
}) {
  return (
    <figure className={`image-reveal relative min-w-0 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="block h-full w-full max-w-full object-cover"
      />
      {caption && (
        <figcaption className="absolute bottom-0 left-0 bg-[#1f2528]/90 px-3 py-2 font-mono text-[9px] uppercase tracking-[.1em] text-[#f4f1ea]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      data-testid={`card-project-${project.slug}`}
      className={`group grid overflow-hidden bg-[#f7f5ef] transition-shadow hover:shadow-[0_20px_50px_rgba(28,31,33,.13)] ${featured ? "lg:grid-cols-[1.18fr_.82fr]" : "md:grid-cols-[.95fr_1.05fr]"}`}
    >
      <ImageBlock
        src={project.image}
        alt={project.imageAlt}
        className={`${featured ? "min-h-[320px] lg:min-h-[500px]" : "min-h-[250px]"} w-full`}
        caption={`Temporary stock image · ${project.index}`}
      />
      <div className="flex min-h-[280px] flex-col justify-between p-7 sm:p-9">
        <div>
          <div className="mb-14 flex items-center justify-between gap-4 text-[10px] uppercase tracking-[.12em] text-[#747873]">
            <span className="border-b border-[#285d7c]/40 pb-1 font-mono">
              {project.context}
            </span>
            <span>
              {project.categories[0]} · {project.year}
            </span>
          </div>
          <h3
            className={`${featured ? "text-4xl sm:text-5xl" : "text-3xl"} max-w-lg font-semibold leading-[.98] tracking-[-.065em] text-[#1f2528] transition-colors group-hover:text-[#285d7c]`}
          >
            {project.title}
          </h3>
          <p className="mt-5 max-w-md text-[15px] leading-7 text-[#656b69]">
            {project.summary}
          </p>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-[#1f2528]/15 pt-4">
          <span className="text-xs text-[#747873]">{project.discipline}</span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1f2528] text-[#f4f1ea] transition-transform group-hover:translate-x-1">
            <ArrowDownRight size={17} />
          </span>
        </div>
      </div>
    </Link>
  );
}

function EditorialProjectLink({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block"
      data-testid={`feature-project-${project.slug}`}
    >
      <ImageBlock
        src={project.image}
        alt={project.imageAlt}
        className={large ? "h-[360px] sm:h-[520px]" : "h-[260px] sm:h-[340px]"}
        caption={project.context}
      />
      <div className="flex items-start justify-between gap-5 border-t border-[#1f2528]/15 pt-5">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[.12em] text-[#747873]">
            {project.categories[0]} · {project.year}
          </div>
          <h3
            className={`${large ? "text-3xl sm:text-4xl" : "text-2xl"} mt-3 font-semibold tracking-[-.05em] text-[#1f2528] transition-colors group-hover:text-[#285d7c]`}
          >
            {project.title}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#656b69]">
            {project.summary}
          </p>
        </div>
        <ArrowDownRight
          className="mt-1 shrink-0 text-[#285d7c] transition-transform group-hover:translate-x-1"
          size={18}
        />
      </div>
    </Link>
  );
}

export function HomePage() {
  return (
    <div>
      <section className="bg-[#f4f1ea]">
        <div className="mx-auto grid max-w-[1480px] gap-12 px-5 pb-16 pt-14 sm:px-8 md:pb-24 lg:grid-cols-[.88fr_1.12fr] lg:items-end lg:gap-20 lg:px-12 lg:pt-24">
          <div className="animate-rise">
            <div className="mb-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.14em] text-[#747873]">
              <span className="h-px w-9 bg-[#285d7c]" /> Mechanical engineering
              · UNC Charlotte
            </div>
            <h1 className="display-title max-w-3xl text-[#1f2528]">
              Engineering ideas into{" "}
              <span className="text-[#285d7c]">reality.</span>
            </h1>
            <p className="mt-9 max-w-xl text-lg leading-8 text-[#5f6663]">
              {site.intro}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/projects">View projects</ButtonLink>
              <ButtonLink href="/resume" secondary>
                Resume
              </ButtonLink>
            </div>
            <div className="mt-16 grid max-w-md grid-cols-2 gap-y-3 border-t border-[#1f2528]/15 pt-4 text-xs text-[#747873] sm:grid-cols-3">
              <span>Mechanical design</span>
              <span>Mechatronics</span>
              <span>Prototyping</span>
              <span className="col-span-2 mt-2 font-mono text-[10px] uppercase tracking-[.1em] text-[#285d7c] sm:col-span-3">
                Expected December 2027 · Charlotte, NC
              </span>
            </div>
          </div>
          <div className="relative">
            <ImageBlock
              src={stockImages.robotics.src}
              alt={stockImages.robotics.alt}
              className="h-[370px] sm:h-[540px] lg:h-[650px]"
              caption={stockImages.robotics.note}
            />
            <div className="absolute -bottom-5 -left-3 flex items-center gap-3 bg-[#1f2528] px-4 py-3 text-[#f4f1ea] sm:-left-6">
              <span className="font-mono text-[10px] text-[#b7cddd]">01</span>
              <span className="text-xs">Designing for the physical world</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1f2528] text-[#f4f1ea]">
        <div className="mx-auto grid max-w-[1480px] gap-12 px-5 py-20 sm:px-8 md:grid-cols-[.65fr_1.35fr] md:py-28 lg:px-12">
          <div>
            <div className="eyebrow mb-5 text-[#b7cddd]">
              A useful starting point
            </div>
            <p className="max-w-xs text-2xl leading-tight tracking-[-.035em]">
              Curious about how a thing works? I want to understand it well
              enough to make the next version better.
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            {[
              "Design with constraints in view.",
              "Build early. Learn honestly.",
              "Document what changed.",
            ].map((text, i) => (
              <div key={text} className="border-t border-[#f4f1ea]/25 pt-4">
                <div className="font-mono text-xs text-[#b7cddd]">0{i + 1}</div>
                <p className="mt-14 max-w-[190px] text-lg leading-7 text-[#d9d8d1]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ebe8e1]">
        <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
          <SectionHeader
            eyebrow="Selected engineering / 04"
            title="Small portfolio. Real design questions."
            copy="A few academic project directions that show how I approach motion, measurement, geometry, and the gap between a model and a working object."
          />
          <div className="grid gap-6">
            <ProjectCard project={academicProjects[0]} featured />
            <div className="grid gap-6 md:grid-cols-2">
              <ProjectCard project={academicProjects[1]} />
              <ProjectCard project={academicProjects[2]} />
            </div>
          </div>
          <div className="mt-10 flex justify-end">
            <ButtonLink href="/projects" secondary>
              Browse project archive
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f1ea]">
        <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <SectionHeader
            eyebrow="Beyond coursework / 03"
            title="Built beyond the classroom."
            copy="Personal and professional work that reflects the same curiosity: understand the problem, work with what is real, and keep improving the result."
          />
          <div className="grid gap-12 lg:grid-cols-[1.18fr_.82fr] lg:gap-7">
            <EditorialProjectLink project={beyondClassroomProjects[0]} large />
            <div className="grid gap-12 lg:gap-8">
              <EditorialProjectLink project={beyondClassroomProjects[1]} />
              <EditorialProjectLink project={beyondClassroomProjects[2]} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ebe8e1]">
        <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <SectionHeader
            eyebrow="How I work"
            title="From question to evidence."
            copy="The most interesting part of engineering is rarely the first idea. It is the loop that follows."
          />
          <div className="grid border-y border-[#1f2528]/15 sm:grid-cols-4">
            {["Frame", "Model", "Make", "Learn"].map((step, i) => (
              <div
                key={step}
                className="group border-b border-[#1f2528]/15 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:p-7 sm:last:border-r-0"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#285d7c]">
                    0{i + 1}
                  </span>
                  <ChevronRight
                    size={15}
                    className="text-[#747873] transition-transform group-hover:translate-x-1"
                  />
                </div>
                <h3 className="mt-16 text-2xl font-semibold tracking-[-.045em] text-[#1f2528]">
                  {step}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#656b69]">
                  {
                    [
                      "Clarify interfaces, constraints, and what needs to be true.",
                      "Make the design intent visible before detail gets expensive.",
                      "Put a physical object in the loop and see what the model missed.",
                      "Use observations to choose the next, better question.",
                    ][i]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#dfe5e7]">
        <div className="mx-auto flex max-w-[1480px] flex-col gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12 lg:py-20">
          <div>
            <div className="eyebrow mb-3 text-[#285d7c]">Next interface</div>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-[-.055em] text-[#1f2528] sm:text-4xl">
              If you are solving a physical problem, I would like to hear how
              you think about it.
            </h2>
          </div>
          <ButtonLink href="/contact">Get in touch</ButtonLink>
        </div>
      </section>
    </div>
  );
}

export function ProjectsPage() {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");
  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.categories.includes(filter)),
    [filter],
  );
  return (
    <div className="bg-[#f4f1ea]">
      <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
        <div className="mb-16 max-w-4xl">
          <div className="eyebrow mb-5">
            Project archive / {String(projects.length).padStart(2, "0")} entries
          </div>
          <h1 className="text-6xl font-semibold leading-[.92] tracking-[-.075em] text-[#1f2528] sm:text-8xl">
            Work in the loop.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#656b69]">
            Academic engineering remains the foundation, with personal builds
            and professional work adding a wider view of how I solve problems.
          </p>
        </div>
        <div
          className="mb-8 flex flex-wrap gap-x-7 gap-y-3 border-y border-[#1f2528]/15 py-5"
          role="group"
          aria-label="Filter projects"
        >
          {projectFilters.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              data-testid={`button-filter-${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className={`focus-ring border-b-2 pb-1 text-xs transition-colors ${filter === category ? "border-[#285d7c] text-[#285d7c]" : "border-transparent text-[#747873] hover:text-[#1f2528]"}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="mb-8 flex items-center justify-between font-mono text-[10px] uppercase tracking-[.1em] text-[#747873]">
          <span data-testid="text-project-count">
            {String(filtered.length).padStart(2, "0")} projects shown
          </span>
          <span className="hidden sm:block">
            Select a project to open its case study
          </span>
        </div>
        <div className="grid gap-6">
          {filtered.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featured={project.index === "01"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFound />;
  return (
    <article className="bg-[#f4f1ea]">
      <div className="mx-auto max-w-[1480px] px-5 py-8 sm:px-8 lg:px-12">
        <Link
          href="/projects"
          data-testid="link-back-projects"
          className="focus-ring inline-flex items-center gap-2 text-xs text-[#747873] hover:text-[#285d7c]"
        >
          <ArrowLeft size={15} /> Project archive
        </Link>
      </div>
      <section className="mx-auto grid max-w-[1480px] gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[.82fr_1.18fr] lg:items-end lg:px-12 lg:pb-32">
        <div>
          <div className="eyebrow mb-6">
            {project.index} / {project.context} / {project.categories[0]}
          </div>
          <h1 className="max-w-2xl text-6xl font-semibold leading-[.92] tracking-[-.075em] text-[#1f2528] sm:text-8xl">
            {project.title}
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#656b69]">
            {project.brief}
          </p>
          <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#747873]">
            {project.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
        <ImageBlock
          src={project.image}
          alt={project.imageAlt}
          className="h-[350px] sm:h-[520px]"
          caption="Temporary stock image — replace in src/data/site.ts"
        />
      </section>
      <section className="dark-panel">
        <div className="mx-auto grid max-w-[1480px] gap-8 px-5 py-12 sm:px-8 md:grid-cols-4 lg:px-12">
          <div>
            <div className="eyebrow mb-3 text-[#b7cddd]">Context</div>
            <p className="text-sm text-[#e1dfd7]">{project.context}</p>
          </div>
          <div>
            <div className="eyebrow mb-3 text-[#b7cddd]">Role</div>
            <p className="text-sm text-[#e1dfd7]">{project.role}</p>
          </div>
          <div>
            <div className="eyebrow mb-3 text-[#b7cddd]">Status</div>
            <p className="text-sm text-[#e1dfd7]">{project.status}</p>
          </div>
          <div>
            <div className="eyebrow mb-3 text-[#b7cddd]">Year</div>
            <p className="text-sm text-[#e1dfd7]">{project.year}</p>
          </div>
        </div>
      </section>
      {project.caseStudySections ? (
        <>
          <section className="mx-auto max-w-[1100px] px-5 py-20 sm:px-8 lg:py-32">
            <div className="grid gap-x-14 gap-y-12 md:grid-cols-2">
              {project.caseStudySections.map((section, i) => (
                <div
                  key={section.title}
                  className="border-t border-[#1f2528]/15 pt-5"
                >
                  <div className="font-mono text-[10px] text-[#285d7c]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h2 className="mt-7 text-2xl font-semibold tracking-[-.045em] text-[#1f2528]">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#656b69]">
                    {section.copy}
                  </p>
                </div>
              ))}
            </div>
          </section>
          {project.galleryImages && (
            <section className="bg-[#ebe8e1]">
              <div className="mx-auto max-w-[1100px] px-5 py-20 sm:px-8 lg:py-28">
                <div className="eyebrow mb-6">Temporary gallery</div>
                <div className="grid gap-5 sm:grid-cols-2">
                  {project.galleryImages.map((image) => (
                    <ImageBlock
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      className="h-[300px] sm:h-[420px]"
                      caption="Placeholder — real project imagery to come"
                    />
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      ) : (
        <>
          <section className="mx-auto grid max-w-[1100px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:py-32">
            <div>
              <div className="eyebrow mb-5">Design approach</div>
              <p className="text-2xl leading-tight tracking-[-.035em] text-[#1f2528]">
                The work is about making the unknowns visible early enough to do
                something useful with them.
              </p>
            </div>
            <div className="space-y-8">
              {project.approach.map((item, i) => (
                <div
                  key={item}
                  className="flex gap-5 border-b border-[#1f2528]/15 pb-8"
                >
                  <span className="font-mono text-xs text-[#285d7c]">
                    0{i + 1}
                  </span>
                  <p className="text-base leading-7 text-[#656b69]">{item}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="bg-[#ebe8e1]">
            <div className="mx-auto grid max-w-[1100px] gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 lg:py-28">
              <div>
                <div className="eyebrow mb-5">Deliverables</div>
                <ul className="space-y-4">
                  {project.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm text-[#3f4644]"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-[#285d7c]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="eyebrow mb-5">Outcomes / editable</div>
                <ul className="space-y-4">
                  {project.outcomes.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-[#656b69]"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#285d7c]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </>
      )}
      <div className="mx-auto flex max-w-[1100px] justify-between gap-4 px-5 py-12 sm:px-8">
        <Link
          href="/projects"
          data-testid="link-detail-back"
          className="focus-ring inline-flex items-center gap-2 text-xs text-[#747873] hover:text-[#285d7c]"
        >
          <ArrowLeft size={14} /> All projects
        </Link>
        <Link
          href="/contact"
          data-testid="link-detail-contact"
          className="focus-ring inline-flex items-center gap-2 text-xs text-[#285d7c]"
        >
          Discuss the work <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}

export function AboutPage() {
  return (
    <div className="bg-[#f4f1ea]">
      <section className="bg-[#1f2528] text-[#f4f1ea]">
        <div className="mx-auto grid max-w-[1480px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:px-12 lg:py-28">
          <div>
            <div className="eyebrow mb-6 text-[#b7cddd]">
              About / working profile
            </div>
            <h1 className="max-w-5xl text-6xl font-semibold leading-[.92] tracking-[-.075em] sm:text-8xl">
              A practical mind for{" "}
              <span className="text-[#b7cddd]">complicated things.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#d9d8d1]">
              I am Zac — a Mechanical Engineering student at UNC Charlotte who
              likes the part where a drawing becomes a thing you can touch,
              inspect, and improve.
            </p>
          </div>
          <ImageBlock
            src={stockImages.prototyping.src}
            alt={stockImages.prototyping.alt}
            className="h-[300px] sm:h-[440px]"
            caption={stockImages.prototyping.note}
          />
        </div>
      </section>
      <section className="mx-auto grid max-w-[1480px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-12 lg:py-32">
        <div>
          <div className="eyebrow mb-4">The short version</div>
          <div className="sticky top-28">
            <p className="text-3xl font-medium leading-tight tracking-[-.04em] text-[#1f2528]">
              I bring a builder’s attention to engineering work.
            </p>
            <div className="mt-8 flex items-center gap-3 text-xs text-[#747873]">
              <MapPin size={14} className="text-[#285d7c]" /> Charlotte, North
              Carolina
            </div>
          </div>
        </div>
        <div className="space-y-7 text-base leading-8 text-[#656b69]">
          <p>
            Before studying mechanical engineering, I spent time in cabinetry,
            construction, landscaping, home-service work, farm work, and
            mechanical work. That background taught me that a good solution has
            to survive contact with tools, weather, people, time, and the next
            repair.
          </p>
          <p>
            At UNC Charlotte, I am turning that intuition into engineering
            practice: clearer assumptions, better models, careful documentation,
            and tests that answer a real question. I am especially drawn to
            mechatronics, product development, and physical systems.
          </p>
          <p>
            I also bring perspective from Costa Rica and Honduras and Spanish
            proficiency. Working across language and context made me more
            observant, more adaptable, and more interested in the person on the
            other side of an interface.
          </p>
        </div>
      </section>

      <section className="bg-[#ebe8e1]">
        <div className="mx-auto grid max-w-[1480px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-stretch lg:px-12 lg:py-28">
          <ImageBlock
            src={stockImages.handsOn.src}
            alt={stockImages.handsOn.alt}
            className="min-h-[360px] sm:min-h-[520px]"
            caption={stockImages.handsOn.note}
          />
          <div className="flex flex-col justify-center">
            <div className="eyebrow mb-5">Hands-on background</div>
            <h2 className="max-w-xl text-4xl font-semibold leading-[.98] tracking-[-.065em] text-[#1f2528] sm:text-6xl">
              Before engineering school, I learned by building.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#656b69]">
              Cabinetry, construction, landscaping, home-service work, farm
              work, mechanical work, and crew leadership made practical
              constraints part of how I see a problem.
            </p>
            <div className="mt-10">
              {handsOnBackground.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-2 border-t border-[#1f2528]/15 py-5 sm:grid-cols-[140px_1fr]"
                >
                  <h3 className="text-sm font-semibold text-[#1f2528]">
                    {item.label}
                  </h3>
                  <p className="text-sm leading-6 text-[#656b69]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ebe8e1]">
        <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <SectionHeader
            eyebrow="Career journey"
            title="Useful experience compounds."
          />
          <div className="ml-3 border-l border-[#1f2528]/20">
            {journey.map((item) => (
              <div
                key={item.title}
                className="relative grid gap-4 border-b border-[#1f2528]/15 pb-10 pl-8 pt-2 last:border-0 md:grid-cols-[120px_1fr] md:gap-10"
              >
                <span className="absolute -left-[5px] top-3 h-2 w-2 rounded-full bg-[#285d7c]" />
                <span className="font-mono text-xs text-[#285d7c]">
                  {item.date}
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-.03em] text-[#1f2528]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#656b69]">
                    {item.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionHeader
          eyebrow="Engineering toolkit"
          title="A toolkit that starts with attention."
        />
        <div className="grid gap-x-12 md:grid-cols-2">
          {toolkit.map((item, i) => (
            <div key={item.label} className="border-t border-[#1f2528]/15 py-7">
              <div className="flex items-baseline gap-5">
                <span className="font-mono text-xs text-[#285d7c]">
                  0{i + 1}
                </span>
                <h3 className="text-xl font-semibold text-[#1f2528]">
                  {item.label}
                </h3>
              </div>
              <p className="mt-3 pl-9 text-sm leading-6 text-[#656b69]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1f2528] text-[#f4f1ea]">
        <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <div className="eyebrow mb-5 text-[#b7cddd]">
                International experience
              </div>
              <h2 className="max-w-md text-4xl font-semibold leading-none tracking-[-.06em] sm:text-5xl">
                Perspective shaped across environments.
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-[#c5c6c0]">
                Living in Costa Rica and Honduras broadened my cross-cultural
                perspective. Spanish proficiency and experience adapting to
                different environments help me communicate with greater
                awareness.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {internationalExperience.map((item) => (
                <article key={item.location}>
                  <ImageBlock
                    src={item.image.src}
                    alt={item.image.alt}
                    className="h-[260px] sm:h-[340px]"
                    caption={item.image.note}
                  />
                  <h3 className="mt-5 text-xl font-semibold">
                    {item.location}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#bfc1bb]">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionHeader
          eyebrow="Outside the coursework"
          title="A wider view of the work."
          copy="A restrained set of placeholders for the mechanical, building, and international experiences that shape how I approach engineering."
        />
        <div className="grid gap-5 sm:grid-cols-12">
          {personalEditorialImages.map((image, i) => (
            <div
              key={image.src}
              className={
                i === 0
                  ? "sm:col-span-7"
                  : i === 1
                    ? "sm:col-span-5"
                    : "sm:col-span-12"
              }
            >
              <ImageBlock
                src={image.src}
                alt={image.alt}
                className={
                  i === 2 ? "h-[300px] sm:h-[420px]" : "h-[340px] sm:h-[500px]"
                }
                caption={`${image.theme} · temporary image`}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function ResumePage() {
  return (
    <div className="bg-[#f4f1ea]">
      <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="eyebrow mb-5">Resume / one-page view</div>
            <h1 className="text-6xl font-semibold leading-[.92] tracking-[-.075em] text-[#1f2528] sm:text-8xl">
              The fast read.
            </h1>
            <p className="mt-7 max-w-md text-base leading-7 text-[#656b69]">
              A recruiter-friendly snapshot of where I am, what I have worked
              on, and the kind of opportunity I am preparing for.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href="/assets/resume/Zechariah-Diegelman-Resume.pdf"
                download
              >
                Download PDF
              </ButtonLink>
              <ButtonLink href="/contact" secondary>
                Contact Zac
              </ButtonLink>
            </div>
            <div className="mt-12 border-t border-[#1f2528]/15 pt-5 font-mono text-[10px] uppercase tracking-[.1em] text-[#747873]">
              Resume file path / assets/resume/
            </div>
          </div>
          <div className="dark-panel p-7 sm:p-11">
            <div className="mb-10 flex items-center justify-between border-b border-[#f4f1ea]/20 pb-5">
              <div className="flex items-center gap-3">
                <FileText size={19} className="text-[#b7cddd]" />
                <span className="font-mono text-xs text-[#f4f1ea]">
                  ZECHARIAH-DIEGELMAN-RESUME
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#b7cddd]">
                PREVIEW
              </span>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-semibold tracking-[-.05em]">
                  Zechariah “Zac” Diegelman
                </h2>
                <p className="mt-2 font-mono text-xs uppercase tracking-[.12em] text-[#b7cddd]">
                  Mechanical Engineering Student
                </p>
              </div>
              <div className="grid gap-6 border-y border-[#f4f1ea]/20 py-6 sm:grid-cols-2">
                <div>
                  <div className="eyebrow mb-2 text-[#b7cddd]">Education</div>
                  <p className="text-sm">UNC Charlotte</p>
                  <p className="text-sm text-[#b5b7b0]">
                    B.S. Mechanical Engineering · Expected Dec 2027
                  </p>
                  <p className="mt-2 text-sm text-[#b5b7b0]">
                    CPCC Associate in Engineering
                  </p>
                </div>
                <div>
                  <div className="eyebrow mb-2 text-[#b7cddd]">Contact</div>
                  <p className="text-sm">{site.email}</p>
                  <p className="text-sm text-[#b5b7b0]">{site.location}</p>
                  <p className="mt-2 text-sm text-[#b5b7b0]">
                    Spanish proficiency
                  </p>
                </div>
              </div>
              <div>
                <div className="eyebrow mb-3 text-[#b7cddd]">Focus</div>
                <p className="text-base leading-7 text-[#d9d8d1]">
                  Mechanical design · Mechatronics · Prototyping · Testing &
                  troubleshooting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CourseworkPage() {
  return (
    <div className="bg-[#f4f1ea]">
      <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
        <div className="max-w-3xl">
          <div className="eyebrow mb-5">Coursework / archive</div>
          <h1 className="text-6xl font-semibold tracking-[-.075em] text-[#1f2528] sm:text-8xl">
            The foundation under the work.
          </h1>
          <p className="mt-7 text-lg leading-8 text-[#656b69]">
            An editable archive for the engineering concepts, methods, and
            classes shaping the way I approach physical systems.
          </p>
        </div>
        <div className="mt-16 border-y border-[#1f2528]/15">
          {coursework.map((course) => (
            <div
              key={course.code + course.name}
              className="grid gap-4 border-b border-[#1f2528]/15 px-1 py-7 last:border-0 sm:grid-cols-[150px_1fr_1fr] sm:items-center sm:px-2"
            >
              <span className="font-mono text-xs text-[#285d7c]">
                {course.code}
              </span>
              <h2 className="text-xl font-medium tracking-[-.03em] text-[#1f2528]">
                {course.name}
              </h2>
              <p className="text-sm leading-6 text-[#656b69]">{course.note}</p>
            </div>
          ))}
        </div>
        <section className="mt-20 grid gap-10 border-t border-[#1f2528]/15 pt-12 md:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="eyebrow mb-4">Learning posture</div>
            <h2 className="text-3xl font-semibold tracking-[-.05em] text-[#1f2528]">
              Keep the model honest.
            </h2>
          </div>
          <div className="grid gap-x-10 sm:grid-cols-2">
            {[
              "Connect equations to a testable physical question.",
              "Treat assumptions as things to revisit.",
              "Write down what the system actually did.",
              "Keep learning visible in the next revision.",
            ].map((item, i) => (
              <div
                key={item}
                className="flex gap-4 border-t border-[#1f2528]/15 py-5"
              >
                <span className="font-mono text-xs text-[#285d7c]">
                  0{i + 1}
                </span>
                <p className="text-sm leading-6 text-[#656b69]">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }
  return (
    <div className="bg-[#f4f1ea]">
      <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="eyebrow mb-5">Contact</div>
            <h1 className="text-6xl font-semibold leading-[.92] tracking-[-.075em] text-[#1f2528] sm:text-8xl">
              Let’s talk about the work.
            </h1>
            <p className="mt-7 max-w-md text-lg leading-8 text-[#656b69]">
              I am open to internships, co-ops, and engineering opportunities
              where thoughtful design and practical problem solving matter.
            </p>
            <div className="mt-12 space-y-5">
              <a
                href={`mailto:${site.email}`}
                data-testid="link-contact-email"
                className="flex items-center gap-4 text-[#3f4644] hover:text-[#285d7c]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dfe5e7] text-[#285d7c]">
                  <Mail size={17} />
                </span>
                <span>
                  <span className="eyebrow mb-1 block">Email</span>
                  {site.email}
                </span>
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                data-testid="link-contact-linkedin"
                className="flex items-center gap-4 text-[#3f4644] hover:text-[#285d7c]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dfe5e7] text-[#285d7c]">
                  <Linkedin size={17} />
                </span>
                <span>
                  <span className="eyebrow mb-1 block">LinkedIn</span>Connect
                  with Zac
                </span>
                <ExternalLink size={14} className="ml-auto text-[#747873]" />
              </a>
            </div>
          </div>
          <div className="bg-[#ebe8e1] p-7 sm:p-11">
            <div className="mb-8 flex items-start justify-between">
              <div>
                <div className="eyebrow mb-3 text-[#285d7c]">Say hello</div>
                <h2 className="text-2xl font-semibold tracking-[-.04em] text-[#1f2528]">
                  Start with the problem.
                </h2>
              </div>
              <Send size={19} className="text-[#285d7c]" />
            </div>
            {sent ? (
              <div
                className="bg-[#dfe5e7] p-6"
                data-testid="status-message-sent"
              >
                <div className="mb-3 flex items-center gap-2 text-[#285d7c]">
                  <Check size={17} /> Ready to send
                </div>
                <p className="text-sm leading-6 text-[#656b69]">
                  This form is ready for a provider connection. For now, email
                  Zac directly at{" "}
                  <a
                    className="text-[#1f2528] underline"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  data-testid="button-send-another"
                  className="mt-5 text-xs text-[#285d7c] underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <label className="block">
                  <span className="eyebrow mb-2 block">Your name</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    data-testid="input-contact-name"
                    className="focus-ring w-full border-b border-[#1f2528]/25 bg-transparent px-0 py-3 text-sm text-[#1f2528] outline-none placeholder:text-[#929691]"
                    placeholder="Name"
                  />
                </label>
                <label className="block">
                  <span className="eyebrow mb-2 block">Email address</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    data-testid="input-contact-email"
                    className="focus-ring w-full border-b border-[#1f2528]/25 bg-transparent px-0 py-3 text-sm text-[#1f2528] outline-none placeholder:text-[#929691]"
                    placeholder="you@company.com"
                  />
                </label>
                <label className="block">
                  <span className="eyebrow mb-2 block">
                    What are you working on?
                  </span>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    data-testid="input-contact-message"
                    className="focus-ring w-full resize-y border-b border-[#1f2528]/25 bg-transparent px-0 py-3 text-sm leading-6 text-[#1f2528] outline-none placeholder:text-[#929691]"
                    placeholder="A few lines about the problem, team, or opportunity."
                  />
                </label>
                <button
                  type="submit"
                  data-testid="button-contact-submit"
                  className="focus-ring inline-flex items-center gap-2 bg-[#1f2528] px-5 py-3 text-xs text-[#f4f1ea] hover:bg-[#285d7c]"
                >
                  Prepare message <ArrowRight size={14} />
                </button>
                <p className="text-[11px] text-[#747873]">
                  Provider connection placeholder — no message is sent yet.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function NotFound() {
  return (
    <div className="flex min-h-[65vh] flex-col items-center justify-center bg-[#f4f1ea] px-5 py-20 text-center">
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#dfe5e7] text-2xl font-semibold text-[#285d7c]">
        404
      </div>
      <div className="eyebrow mb-5">Page not found</div>
      <h1 className="text-5xl font-semibold tracking-[-.07em] text-[#1f2528]">
        This page is off the drawing.
      </h1>
      <p className="mt-5 max-w-md text-[#656b69]">
        The route you requested does not exist. The useful next move is probably
        back to the project archive.
      </p>
      <div className="mt-8">
        <ButtonLink href="/">Return home</ButtonLink>
      </div>
    </div>
  );
}
