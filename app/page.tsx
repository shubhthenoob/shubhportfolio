'use client'

import { useEffect, useRef, useState } from 'react'

const navItems = [
  { label: 'Story', href: '#story' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Builds', href: '#builds' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

const proofPoints = [
  { value: '₹3L+', label: 'monthly recurring revenue from my agency' },
  { value: '0 → 1', label: 'enterprise products built and shipped' },
  { value: '25+', label: 'client requirements turned into shipped features' },
]

const projects = [
  {
    company: 'Taabi Mobility',
    eyebrow: 'Procurement workflow redesign',
    title: 'Redesigned a complex procurement workflow to cut turnaround from 4 weeks to under 1 week.',
    summary:
      'I simplified a complex enterprise procurement process into a clearer, role-based flow that teams could adopt faster and use with more confidence.',
    problem:
      'The existing process was too long, too manual, and difficult to manage across stakeholders, which slowed decisions and created operational friction.',
    role: 'Simplified the problem, designed user-friendly flows, and shaped the workflow for stronger adoption and compliance.',
    action:
      'Redesigned the end-to-end workflow around role clarity, faster decisions, and easier execution for enterprise users.',
    outcome:
      'Reduced procurement turnaround from 4 weeks to under 1 week.',
    tags: ['Workflow redesign', 'Enterprise SaaS', 'Compliance'],
    visual: 'procurement',
  },
  {
    company: 'Taabi Mobility',
    eyebrow: 'Auction platform',
    title: 'Designed an auction workflow that made complex bidding rules easier to use and manage.',
    summary:
      'This product needed to balance usability with control, so the focus was on making auction decisions clearer without losing rule complexity.',
    problem:
      'Auction logic, bidder ranking, and rule configuration were complex, making it harder for users to operate the system confidently.',
    role: 'Simplified the product problem and designed user-friendly flows that supported adoption while preserving compliance needs.',
    action:
      'Structured the workflow so core actions, ranking logic, and auction states were easier to understand and operate in real time.',
    outcome:
      'Turned a complex auction process into a more usable enterprise workflow for day-to-day decision-making.',
    tags: ['Auction systems', 'Product design', 'Enterprise workflows'],
    visual: 'auction',
  },
  {
    company: 'Taabi Mobility',
    eyebrow: 'Operator adoption redesign',
    title: 'Improved operator adoption by designing a WhatsApp workflow for 3PL and 4PL users.',
    summary:
      'I focused on reducing friction for frontline users by meeting them in a workflow they were already comfortable with.',
    problem:
      'Operators were struggling with adoption, and the existing product flow was not the easiest fit for how 3PL and 4PL teams actually worked.',
    role: 'Simplified the problem and designed a more user-friendly workflow aimed at maximum adoption and smoother operational compliance.',
    action:
      'Designed a WhatsApp-based workflow to streamline interactions for client-side 3PL and 4PL operations teams.',
    outcome:
      'Created a simpler operating experience aligned to real user behavior, with adoption as the primary success goal.',
    tags: ['Adoption', '3PL / 4PL', 'User flows'],
    visual: 'operations',
  },
]

const journey = [
  {
    year: 'Now',
    title: 'Product Manager (GET), Taabi Mobility',
    copy:
      'Building enterprise software for logistics operations, with a focus on workflow clarity, product judgment, and shipping useful systems.',
  },
  {
    year: '2025',
    title: 'APM Intern, HyperVerge',
    copy:
      'Learned how enterprise constraints, compliance, and customer needs shape what actually makes it into production.',
  },
  {
    year: '2024',
    title: 'Founder, Momento Media',
    copy:
      'Got an early education in ownership, customers, sales, and what it means to make something real enough that people pay for it.',
  },
  {
    year: '2021-2025',
    title: 'Computer Engineering, K.J. Somaiya College',
    copy:
      'Started in engineering, explored widely, and realized product let me sit at the intersection of technology, people, and decisions.',
  },
]

const principles = [
  'Start with the sharpest version of the problem.',
  'Make complex systems easier to read and act on.',
  'Use interaction and motion to support meaning, not show off.',
  'Ship the useful version first, then refine with evidence.',
]

const builds = [
  {
    label: 'N8N newsletter automation',
    title: 'Turn a noisy internet into useful reading.',
    copy:
      'A lightweight workflow that collects, filters, and delivers ideas worth attention instead of forwarding raw noise.',
    workflowSteps: [      'Normalize & Dedupe',  'Filter New Articles',  'Analyze Articles',  'Rank & Select',  'Build Newsletter',  'Send Newsletter',  'Prepare Records',  'Record Processed Article', ],    href: '#workflow',
    cta: 'Ask about the workflow',
    opensWorkflow: true,
  },
  {
    label: 'Corporatify Chrome extension',
    title: 'Turn rushed English into polished professional writing.',
    copy:
      'An AI writing assistant that rewrites broken, rushed, or fast English into clearer professional communication without changing the original meaning.',
    href: 'https://chromewebstore.google.com/detail/corporatify/mkhblilbfelnokifpjjmdplonolmldhm',
    cta: 'View Corporatify',
    opensWorkflow: false,
  },
]

const resumeGroups = [
  {
    title: 'What I do best',
    items: ['Product discovery', 'Roadmapping and prioritization', 'Workflow and systems thinking'],
  },
  {
    title: 'How I work',
    items: ['User empathy with business context', 'Cross-functional execution', 'Bias toward shipping useful things'],
  },
]

function DotField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: -999, y: -999 })
  const rafId = useRef<number>(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const DOT_COUNT = 42
    const CONNECT_DIST = 150
    const MOUSE_DIST = 180

    interface Dot {
      x: number
      y: number
      ox: number
      oy: number
      vx: number
      vy: number
      r: number
      a: number
    }

    let dots: Dot[] = []
    let w = 0
    let h = 0

    const reset = () => {
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w
      canvas.height = h
      dots = Array.from({ length: DOT_COUNT }, () => {
        const x = Math.random() * w
        const y = Math.random() * h
        return {
          x,
          y,
          ox: x,
          oy: y,
          vx: 0,
          vy: 0,
          r: Math.random() * 1.4 + 0.8,
          a: Math.random() * 0.18 + 0.06,
        }
      })
    }

    reset()
    const ro = new ResizeObserver(reset)
    ro.observe(canvas)

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.current = { x: event.clientX - rect.left, y: event.clientY - rect.top }
    }

    window.addEventListener('pointermove', onMove, { passive: true })

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const { x: mx, y: my } = mouse.current

      dots.forEach((dot) => {
        const dx = mx - dot.x
        const dy = my - dot.y
        const dist = Math.hypot(dx, dy)
        if (dist > 0 && dist < MOUSE_DIST) {
          const pull = (1 - dist / MOUSE_DIST) * 0.08
          dot.vx += (dx / dist) * pull
          dot.vy += (dy / dist) * pull
        }

        dot.vx += (dot.ox - dot.x) * 0.012
        dot.vy += (dot.oy - dot.y) * 0.012
        dot.vx *= 0.92
        dot.vy *= 0.92
        dot.x += dot.vx
        dot.y += dot.vy
      })

      for (let i = 0; i < dots.length; i += 1) {
        for (let j = i + 1; j < dots.length; j += 1) {
          const a = dots[i]
          const b = dots[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.08
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(222, 91, 56, ${alpha})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      dots.forEach((dot) => {
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(26, 29, 33, ${dot.a})`
        ctx.fill()
      })

      rafId.current = requestAnimationFrame(draw)
    }

    rafId.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafId.current)
      ro.disconnect()
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="dot-field" aria-hidden="true" />
}

function CursorGlow() {
  const [position, setPosition] = useState({ x: -200, y: -200 })

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const onMove = (event: PointerEvent) => setPosition({ x: event.clientX, y: event.clientY })
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div
      className="cursor-background"
      aria-hidden="true"
      style={{ '--cursor-x': `${position.x}px`, '--cursor-y': `${position.y}px` } as React.CSSProperties}
    />
  )
}

function StoryConstellation() {
  return (
    <div className="story-constellation" aria-hidden="true">
      <div className="constellation-card constellation-card-a">
        <span>Curiosity</span>
        <strong>Technology</strong>
      </div>
      <div className="constellation-card constellation-card-b">
        <span>Ownership</span>
        <strong>Execution</strong>
      </div>
      <div className="constellation-card constellation-card-c">
        <span>People</span>
        <strong>Decisions</strong>
      </div>
      <div className="constellation-center">
        <small>Connecting the dots</small>
        <b>Product management</b>
      </div>
      <svg viewBox="0 0 420 320" className="constellation-svg">
        <path d="M48 250 C120 160, 160 120, 215 150" />
        <path d="M215 150 C265 175, 310 130, 360 78" />
        <path d="M215 150 C270 205, 300 232, 358 245" />
      </svg>
    </div>
  )
}

function ProjectVisual({ type }: { type: string }) {
  if (type === 'operations') {
    return (
      <div className="project-visual visual-operations" aria-hidden="true">
        <div className="visual-shell">
          <div className="visual-row">
            <span>Route network</span>
            <b>Live</b>
          </div>
          <div className="route-card">
            <strong>DEL</strong>
            <i />
            <strong>BOM</strong>
            <span>+18.4%</span>
          </div>
          <div className="route-card">
            <strong>BLR</strong>
            <i />
            <strong>HYD</strong>
            <span>+11.2%</span>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'procurement') {
    return (
      <div className="project-visual visual-procurement" aria-hidden="true">
        <div className="form-card">
          <span>New procurement request</span>
          <b>What needs to move?</b>
          <div className="fake-input">Material category</div>
          <div className="fake-input">Destination</div>
          <div className="fake-button">Continue</div>
        </div>
      </div>
    )
  }

  return (
    <div className="project-visual visual-auction" aria-hidden="true">
      <div className="visual-row">
        <span>Auction</span>
        <b>Active</b>
      </div>
      <div className="bars">
        <i style={{ height: '52%' }} />
        <i style={{ height: '72%' }} />
        <i style={{ height: '34%' }} />
        <i style={{ height: '88%' }} />
        <i style={{ height: '58%' }} />
      </div>
      <div className="auction-total">
        <strong>INR 4,82,000</strong>
        <span>Leading bid</span>
      </div>
    </div>
  )
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isCompact, setIsCompact] = useState(false)

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        setScrolled(window.scrollY > 24)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // The nav collapses into a panel below this width, so track it to keep the
  // closed panel out of the tab order and to close on rotate / resize up.
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 980px)')
    const sync = () => {
      setIsCompact(mq.matches)
      if (!mq.matches) setMenuOpen(false)
    }
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    // Lock on <html>, not <body>: `html { overflow-x: hidden }` makes the root
    // the scroll container, so body overflow no longer propagates to the viewport.
    const root = document.documentElement
    const previousOverflow = root.style.overflow
    root.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      root.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const panelHidden = isCompact && !menuOpen

  return (
    <main>
      <DotField />
      <CursorGlow />

      <nav
        className={`site-nav ${scrolled ? 'site-nav-scrolled' : ''} ${menuOpen ? 'site-nav-open' : ''}`}
        aria-label="Main navigation"
      >
        <a className="wordmark" href="#top" onClick={() => setMenuOpen(false)}>
          SHUBH <span>RADIA</span>
        </a>
        <div
          id="site-nav-links"
          className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}
          inert={panelHidden || undefined}
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="nav-panel-cta" href="mailto:shubhradia33@gmail.com" onClick={() => setMenuOpen(false)}>
            Email me
          </a>
        </div>
        <a className="nav-cta" href="mailto:shubhradia33@gmail.com">
          Email me
        </a>
        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="site-nav-links"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        >
          <span />
          <span />
        </button>
      </nav>
      <button
        type="button"
        className={`nav-scrim ${menuOpen ? 'nav-scrim-open' : ''}`}
        onClick={() => setMenuOpen(false)}
        tabIndex={-1}
        aria-hidden="true"
      />

      <section className="hero section-pad" id="top">
        <div className="hero-copy">
          <p className="eyebrow">PRODUCT MANAGER / BUILDER</p>
          <h1>
            Connecting the dots
            <br />
            <em>between complexity and clarity.</em>
          </h1>
          <p className="hero-lede">
            I&apos;m Shubh Radia. I work on products where systems are messy, decisions matter, and the job is to make
            something genuinely useful for the people operating it.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#work">
              See selected work
            </a>
            <a className="secondary-link" href="https://drive.google.com/file/d/1OaGpVz7F6UDeIeHsFCyLnjjdgJm6yu_c/view?usp=sharing" target="_blank" rel="noreferrer">
              View resume
            </a>
          </div>
        </div>
        <StoryConstellation />
      </section>

      <section className="proof section-pad" aria-label="Key proof points">
        {proofPoints.map((point) => (
          <article key={point.label} className="proof-card">
            <strong>{point.value}</strong>
            <p>{point.label}</p>
          </article>
        ))}
      </section>

      <section className="story section-pad" id="story">
        <div className="section-heading story-heading">
          <div>
            <p className="eyebrow">01 - STORY</p>
            <h2>
              Why product,
              <br />
              <em>and why this story matters.</em>
            </h2>
          </div>
          <p>
            My background did not move in a straight line. Engineering gave me a systems lens. Running something of my
            own taught me ownership. Product became the place where those threads started making sense together.
          </p>
        </div>
        <div className="story-grid">
          <article className="story-card story-card-accent">
            <span className="story-label">The idea</span>
            <h3>Technology is only valuable when people can actually use it.</h3>
            <p>
              That is the core lens behind this portfolio and behind the products I like building. Not flash. Not
              abstraction. Utility with judgment.
            </p>
          </article>
          <article className="story-card">
            <span className="story-label">The fit</span>
            <h3>Product lets me work at the intersection of systems, people, and decisions.</h3>
            <p>
              I like understanding how something works, why it is breaking down, and what needs to change so a team can
              move forward with less friction.
            </p>
          </article>
        </div>
      </section>

      <section className="work section-pad" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 - SELECTED WORK</p>
            <h2>
              Case studies
              <br />
              <em>built for operators, not spectators.</em>
            </h2>
          </div>
          <p>
            Some details stay abstract because the products
            are confidential, but the scope, role, and outcomes are clear.
          </p>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <ProjectVisual type={project.visual} />
              <div className="project-copy">
                <p className="project-eyebrow">
                  {project.company} / {project.eyebrow}
                </p>
                <h3>{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <dl className="case-grid">
                  <div>
                    <dt>Problem</dt>
                    <dd>{project.problem}</dd>
                  </div>
                  <div>
                    <dt>Role</dt>
                    <dd>{project.role}</dd>
                  </div>
                  <div>
                    <dt>What I changed</dt>
                    <dd>{project.action}</dd>
                  </div>
                  <div>
                    <dt>Outcome</dt>
                    <dd>{project.outcome}</dd>
                  </div>
                </dl>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="confidential">
          Some work is confidential, so visuals and language are intentionally edited down to preserve the thinking
          without exposing the full operating playbook.
        </p>
      </section>

      <section className="experience section-pad" id="experience">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 - EXPERIENCE</p>
            <h2>
              The dots
              <br />
              <em>connect backwards.</em>
            </h2>
          </div>
          <p>
            This path makes more sense in hindsight than it did while I was living it. That is part of the point. The
            through-line has always been curiosity, ownership, and making complex things easier to act on.
          </p>
        </div>

        <div className="timeline">
          {journey.map((item) => (
            <article key={item.title} className="timeline-item">
              <span className="timeline-year">{item.year}</span>
              <div className="timeline-node" aria-hidden="true" />
              <div className="timeline-copy">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="builds section-pad" id="builds">
        <div className="section-heading builds-heading">
          <div>
            <p className="eyebrow">04 - BUILDS</p>
            <h2>
              Side builds
              <br />
              <em>that show the same instinct.</em>
            </h2>
          </div>
          <p>
            Outside core product work, I keep making small systems, tools, and experiments. They usually come from the
            same motivation: reduce noise, create clarity, and make something more usable.
          </p>
        </div>
        <div className="build-grid">
          {builds.map((build) => (
            <article className="build-card" key={build.title}>
              <span className="build-label">{build.label}</span>
              <h3>{build.title}</h3>
              <p>{build.copy}</p>
              {'workflowSteps' in build && build.workflowSteps ? (
                <div className="build-workflow-wrap">
                  <div
                    className="build-workflow-canvas"
                    role="group"
                    aria-label="Newsletter automation workflow, scroll horizontally to see every step"
                    tabIndex={0}
                  >
                    <div className="workflow-grid" />

                    <div className="workflow-flow">
                      {build.workflowSteps.map((step, index) => (
                        <div key={step} className="workflow-group">
                          <div className="workflow-node">
                            <div className="workflow-node-icon">
                              {step === 'Send Newsletter'
                                ? '✉'
                                : step === 'Record Processed Article'
                                  ? '▦'
                                  : step === 'Analyze Articles'
                                    ? '☷'
                                    : '{}'}
                            </div>
                          </div>

                          <span className="workflow-node-title">{step}</span>

                          {step === 'Analyze Articles' && (
                            <div className="workflow-subnodes">
                              <span>Model</span>
                              <span>Output Parser</span>
                            </div>
                          )}

                          {index < build.workflowSteps.length - 1 && <div className="workflow-connector" />}
                        </div>
                      ))}
                    </div>
                  </div>
                  <span className="workflow-scroll-hint" aria-hidden="true">
                    Swipe to follow the flow →
                  </span>
                </div>
              ) : null}
              {build.opensWorkflow ? null : (
                <a
                  className="build-link"
                  href={build.href}
                  target={build.href.startsWith('http') ? '_blank' : undefined}
                  rel={build.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {build.cta}
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="principles-section section-pad">
        <div className="section-heading">
          <div>
            <p className="eyebrow">05 - APPROACH</p>
            <h2>
              How I think
              <br />
              <em>when building products.</em>
            </h2>
          </div>
          <p>
            The connecting-the-dots idea is not just visual. It is how I work: identify signal, connect context, and
            shape a better next move for the team and the user.
          </p>
        </div>
        <div className="principles-list">
          {principles.map((principle, index) => (
            <div key={principle} className="principle-item">
              <span>{`0${index + 1}`}</span>
              <p>{principle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="resume section-pad" id="resume">
        <div className="resume-intro">
          <p className="eyebrow">06 - RESUME</p>
          <h2>
            What I bring
            <br />
            <em>to product teams.</em>
          </h2>
          <p className="resume-kicker">A quick snapshot of the strengths, habits, and execution style behind the work.</p>
        </div>
        <div className="resume-grid">
          {resumeGroups.map((group) => (
            <article key={group.title} className="resume-card">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
          <a
            className="resume-link"
            href="https://drive.google.com/file/d/1OaGpVz7F6UDeIeHsFCyLnjjdgJm6yu_c/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Open full resume
          </a>
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="contact-panel">
          <p className="eyebrow">07 - CONTACT</p>
          <h2>
            If you have a real problem,
            <br />
            <em>I&apos;d like to hear it.</em>
          </h2>
          <p>
            I&apos;m most energized by ambiguous product problems that need clearer structure, sharper decisions, and a
            more useful user experience.
          </p>
          <div className="contact-actions">
            <a className="contact-button" href="https://www.linkedin.com/in/shubhradia" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="contact-text-link" href="tel:+917506977922">
              +91 75069 77922
            </a>
            <a className="contact-text-link" href="mailto:shubhradia33@gmail.com">
              shubhradia33@gmail.com
            </a>
          </div>
        </div>
      </section>

      <footer className="footer section-pad">
        <a className="wordmark" href="#top">
          SHUBH <span>RADIA</span>
        </a>
        <p>Designed around the same idea that shapes the work: connect the dots, then make them easier to use.</p>
      </footer>
    </main>
  )
}
