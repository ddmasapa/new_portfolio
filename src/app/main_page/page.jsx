'use client'

import { useEffect, useRef, useState } from 'react'
import {
  certificates,
  SafeImage,
  SocialIcon,
  socials,
  usePortfolioState,
} from '../back_end/portfolio_back_end'

function ContactModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
      <button
        type="button"
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        aria-label="Close contact modal"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-3xl rounded-[2rem] border border-white/10 bg-stone-950 p-6 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 text-xl transition hover:border-amber-300 hover:text-amber-300"
        >
          &#10005;
        </button>
        <h2 className="text-3xl font-semibold text-amber-300">Contact Me</h2>
        <p className="mt-3 text-stone-300">
          Reach out for a project, collaboration, or quick conversation.
        </p>
        <form className="mt-8 grid gap-4 md:grid-cols-2">
          <input
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-stone-500"
            placeholder="Your name"
          />
          <input
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-stone-500"
            placeholder="Email address"
            type="email"
          />
          <textarea
            className="min-h-40 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-stone-500 md:col-span-2"
            placeholder="Message"
          />
          <div className="md:col-span-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-amber-300 px-6 py-3 font-semibold text-stone-950 transition hover:bg-amber-200"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function MainPage() {
  const {
    isLightTheme,
    toggleTheme,
    visibleProjects,
    selectedCertificate,
    selectedProject,
    isContactModalOpen,
    openCertificate,
    closeCertificate,
    openProject,
    closeProject,
    openContactModal,
    closeContactModal,
    nextProject,
    previousProject,
    certificateAngle,
  } = usePortfolioState({
    initialLightTheme: false,
    themeStorageKey: 'main-page-light-theme',
    autoRotateMs: null,
  })

  const [certificateOffset, setCertificateOffset] = useState(0)
  const [isGrabbingCertificates, setIsGrabbingCertificates] = useState(false)
  const certificateRadius = 390
  const certificateCardWidth = 420
  const certificateCardHeight = 280
  const [isAutoSpinPaused, setIsAutoSpinPaused] = useState(false)
  const certificateOffsetRef = useRef(0)
  const certificateRotationRef = useRef(null)
  const dragStateRef = useRef({
    isDragging: false,
    lastClientX: 0,
    totalDeltaX: 0,
    cleanup: null,
  })
  const suppressCertificateClickRef = useRef(false)

  const handleCertificatePointerDown = (event) => {
    if (dragStateRef.current.cleanup) {
      dragStateRef.current.cleanup()
    }

    dragStateRef.current.isDragging = true
    dragStateRef.current.lastClientX = event.clientX
    dragStateRef.current.totalDeltaX = 0
    setIsGrabbingCertificates(true)
    setIsAutoSpinPaused(true)
    event.preventDefault()

    const handlePointerMove = (moveEvent) => {
      if (!dragStateRef.current.isDragging) {
        return
      }

      const deltaX = moveEvent.clientX - dragStateRef.current.lastClientX
      dragStateRef.current.lastClientX = moveEvent.clientX
      dragStateRef.current.totalDeltaX += Math.abs(deltaX)
      certificateOffsetRef.current += deltaX * 0.12

      if (certificateRotationRef.current) {
        certificateRotationRef.current.style.transform = `rotateY(${certificateOffsetRef.current}deg)`
      }
    }

    const handlePointerEnd = () => {
      dragStateRef.current.isDragging = false
      setIsGrabbingCertificates(false)
      setIsAutoSpinPaused(false)
      setCertificateOffset(certificateOffsetRef.current)

      if (dragStateRef.current.totalDeltaX > 6) {
        suppressCertificateClickRef.current = true
        window.setTimeout(() => {
          suppressCertificateClickRef.current = false
        }, 120)
      }

      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerEnd)
      window.removeEventListener('pointercancel', handlePointerEnd)
      dragStateRef.current.cleanup = null
    }

    dragStateRef.current.cleanup = handlePointerEnd
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerEnd)
    window.addEventListener('pointercancel', handlePointerEnd)
  }

  const adjustCertificateOffset = (delta) => {
    certificateOffsetRef.current += delta

    if (certificateRotationRef.current) {
      certificateRotationRef.current.style.transform = `rotateY(${certificateOffsetRef.current}deg)`
    }

    setCertificateOffset(certificateOffsetRef.current)
  }

  useEffect(() => {
    const dragRef = dragStateRef

    return () => {
      if (dragRef.current.cleanup) {
        dragRef.current.cleanup()
      }
    }
  }, [])

  useEffect(() => {
    certificateOffsetRef.current = certificateOffset

    if (certificateRotationRef.current) {
      certificateRotationRef.current.style.transform = `rotateY(${certificateOffset}deg)`
    }
  }, [certificateOffset])

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${
        !isLightTheme
          ? 'bg-[radial-gradient(circle_at_top,#1d2238,#0f1118_48%,#090a0f)] text-stone-100'
          : 'bg-[radial-gradient(circle_at_top,#fff6d6,#f6efe2_45%,#ebe6db)] text-stone-900'
      }`}
    >
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
            Mira
          </div>
          <div className="flex flex-wrap items-center justify-end gap-3 text-sm md:gap-5">
            <a href="#about" className="transition hover:text-amber-300">
              About
            </a>
            <a href="#achievements" className="transition hover:text-amber-300">
              Certificates
            </a>
            <a href="#projects" className="transition hover:text-amber-300">
              Projects
            </a>
            <button
              type="button"
              onClick={openContactModal}
              className="transition hover:text-amber-300"
            >
              Contact
            </button>
            <button
              type="button"
              aria-pressed={isLightTheme}
              title="Toggle theme"
              onClick={toggleTheme}
              className="rounded-full border border-amber-300/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300 transition hover:bg-amber-300 hover:text-stone-950"
            >
              Theme
            </button>
          </div>
        </nav>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <section className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <article className="rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-2xl shadow-black/15 backdrop-blur-xl">
            <div className="mx-auto mb-6 h-56 w-56 overflow-hidden rounded-[2rem] bg-black/20">
              <div className="relative h-full w-full">
                <SafeImage
                  src="/pfp/MASAPA draft pfp copy.png"
                  alt="Profile Picture"
                  label="Profile"
                  priority
                />
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <h3 className="mb-4 text-lg font-semibold text-amber-300">Quick Info</h3>
                <dl className="space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-black/15 p-4">
                    <dt className="text-sm uppercase tracking-[0.25em] text-stone-400">
                      Experience
                    </dt>
                    <dd className="mt-1 flex items-end justify-between gap-3">
                      <strong className="text-xl">6 months</strong>
                      <span className="text-sm text-stone-400">Web / UI / Apps</span>
                    </dd>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/15 p-4">
                    <dt className="text-sm uppercase tracking-[0.25em] text-stone-400">
                      Featured
                    </dt>
                    <dd className="mt-1 flex items-end justify-between gap-3">
                      <strong className="text-xl">3 Projects</strong>
                      <span className="text-sm text-stone-400">Team &amp; Solo</span>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/15 p-4">
                <strong className="block text-sm uppercase tracking-[0.25em] text-amber-300">
                  Skills
                </strong>
                <p className="mt-2 leading-7 text-stone-300">
                  HTML · CSS · JS · React · Figma · UX Design
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-white/8 p-8 shadow-2xl shadow-black/15 backdrop-blur-xl">
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.25em] text-stone-400">
              <span>Daryll Masapa</span>
              <span className="h-1 w-1 rounded-full bg-amber-300" />
              <span>Web Developer • Designer • Programmer</span>
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              The Project of
              <br />
              Daryll Masapa
            </h1>

            <div className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
              <p>
                Throughout my college journey, I successfully completed a variety of
                projects that enhanced my skills in technology, design, and
                problem-solving. These include fully functional applications,
                interactive prototypes, and research-based outputs.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-amber-300 px-6 py-3 font-semibold text-stone-950 transition hover:bg-amber-200"
              >
                See Featured Works
              </a>
              <button
                type="button"
                onClick={openContactModal}
                className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-amber-300 hover:text-amber-300"
              >
                Contact Me
              </button>
            </div>
          </article>
        </section>

        <section
          id="about"
          className="mt-10 rounded-[2rem] border border-white/10 bg-white/8 p-8 shadow-2xl shadow-black/10 backdrop-blur-xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            About me
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Hi, I&apos;m Daryll Dave R. Masapa - also known as Mira
          </h2>
          <p className="mt-3 text-lg text-stone-300">
            BSIS - 2nd Year · Aspiring Web Developer, Data Analyst and Information
            Systems Student
          </p>
          <p className="mt-6 max-w-4xl leading-8 text-stone-300">
            6 months of experience in HTML, CSS, JavaScript, Java, Python, and C++.
            Throughout my college journey, I successfully completed a variety of
            projects that enhanced my skills in technology, design, and
            problem-solving. These include fully functional applications,
            interactive prototypes, and research-based outputs.
          </p>
        </section>

        <section id="achievements" className="mt-10 mb-10 scroll-mt-24">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Certificates</h2>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => adjustCertificateOffset(certificateAngle)}
                className="rounded-full border border-white/15 px-4 py-2 transition hover:border-amber-300 hover:text-amber-300"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={() => adjustCertificateOffset(-certificateAngle)}
                className="rounded-full border border-white/15 px-4 py-2 transition hover:border-amber-300 hover:text-amber-300"
              >
                Next
              </button>
            </div>
          </div>

          <div
            className="relative h-[47rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 backdrop-blur-xl"
            onPointerDown={handleCertificatePointerDown}
          >
            <div className="absolute inset-x-0 bottom-12 mx-auto h-32 w-[84%] rounded-full bg-black/30 blur-3xl" />
            <div className="absolute inset-0 flex items-center justify-center px-10 [perspective:1400px] md:px-14">
              <div
                ref={certificateRotationRef}
                className={`relative touch-none transition-transform duration-700 [transform-style:preserve-3d] ${
                  isGrabbingCertificates ? 'cursor-grabbing' : 'cursor-grab'
                }`}
                style={{
                  height: `${certificateCardHeight}px`,
                  width: `${certificateCardWidth}px`,
                  transform: `rotateY(${certificateOffset}deg)`,
                }}
              >
                <div
                  className="relative [transform-style:preserve-3d]"
                  style={{
                    height: `${certificateCardHeight}px`,
                    width: `${certificateCardWidth}px`,
                    animation: isAutoSpinPaused ? 'none' : 'certificateSpin 24s linear infinite',
                  }}
                >
                  {certificates.map((certificate, index) => (
                    <button
                      key={certificate.title}
                      type="button"
                      onClick={() => {
                        if (suppressCertificateClickRef.current) {
                          return
                        }
                        openCertificate(certificate)
                      }}
                      className="absolute left-0 top-0 overflow-hidden rounded-xl border border-white/10 bg-white shadow-[0_18px_40px_rgba(0,0,0,0.45)] outline-none transition hover:scale-[1.02]"
                      style={{
                        height: `${certificateCardHeight}px`,
                        width: `${certificateCardWidth}px`,
                        transform: `rotateY(${index * certificateAngle}deg) translateZ(${certificateRadius}px)`,
                      }}
                    >
                      <div className="relative h-full w-full">
                        <SafeImage
                          src={certificate.src}
                          alt={certificate.title}
                          label={certificate.title}
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-10">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Projects</h2>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={previousProject}
                className="rounded-full border border-white/15 px-4 py-2 text-2xl leading-none transition hover:border-amber-300 hover:text-amber-300"
              >
                &#8249;
              </button>
              <button
                type="button"
                onClick={nextProject}
                className="rounded-full border border-white/15 px-4 py-2 text-2xl leading-none transition hover:border-amber-300 hover:text-amber-300"
              >
                &#8250;
              </button>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <button
                key={`${project.title}-${project.linkUrl || 'local'}`}
                type="button"
                onClick={() => openProject(project)}
                className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/8 p-4 text-left shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-amber-300/50 focus:outline-none"
              >
                <figure className="relative h-56 overflow-hidden rounded-[1.25rem] bg-black/15 p-4">
                  <SafeImage
                    src={project.src}
                    alt={project.title}
                    label={project.title}
                    className="object-contain p-2"
                  />
                </figure>

                <div className="flex flex-1 flex-col pt-5">
                  <h3 className="min-h-[4rem] text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-3 min-h-[8.5rem] leading-7 text-stone-300">
                    {project.description}
                  </p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag) => (
                      <li
                        key={`${project.title}-${tag}`}
                        className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-10">
          <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 shadow-2xl shadow-black/10 backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-10">
              <h2 className="text-4xl font-semibold">Let us help you.</h2>
              <p className="mt-3 text-lg text-stone-300">
                Reach out for an exploratory conversation.
              </p>

              <button
                type="button"
                onClick={openContactModal}
                className="mt-8 inline-flex rounded-full bg-amber-300 px-6 py-3 font-semibold text-stone-950 transition hover:bg-amber-200"
              >
                Contact Us
              </button>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                <div>
                  <strong className="text-sm uppercase tracking-[0.25em] text-amber-300">
                    Phone
                  </strong>
                  <p className="mt-2 leading-7">09948086975</p>
                </div>
                <div>
                  <strong className="text-sm uppercase tracking-[0.25em] text-amber-300">
                    Email
                  </strong>
                  <p className="mt-2 leading-7">
                    daryllmasapa21@gmail.com
                    <br />
                    daryllmasapa@gmail.com
                  </p>
                </div>
                <div>
                  <strong className="text-sm uppercase tracking-[0.25em] text-amber-300">
                    Social
                  </strong>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        title={social.label}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/15 text-xs font-bold uppercase transition hover:border-amber-300 hover:text-amber-300"
                      >
                        <SocialIcon icon={social.icon} className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[22rem] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,215,0,0.55),transparent_25%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.22),transparent_18%),linear-gradient(140deg,#7f4f24,#c58f53,#f5deb3)]" />
              <div className="absolute inset-[12%] rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-md" />
              <div className="absolute bottom-[-10%] left-[8%] h-40 w-40 rounded-full bg-black/20 blur-2xl" />
              <div className="absolute right-[-6%] top-[10%] h-52 w-52 rounded-full bg-white/15 blur-3xl" />
            </div>
          </div>
        </section>
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />

      {selectedCertificate ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <button
            type="button"
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            aria-label="Close certificate"
            onClick={closeCertificate}
          />
          <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-stone-950 p-4 shadow-2xl">
            <button
              type="button"
              onClick={closeCertificate}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 text-xl transition hover:border-amber-300 hover:text-amber-300"
            >
              &#10005;
            </button>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.5rem]">
              <SafeImage
                src={selectedCertificate.src}
                alt={selectedCertificate.title}
                label={selectedCertificate.title}
              />
            </div>
          </div>
        </div>
      ) : null}

      {selectedProject ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <button
            type="button"
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            aria-label="Close project view"
            onClick={closeProject}
          />
          <div className="relative z-10 grid w-full max-w-6xl gap-6 overflow-hidden rounded-[2rem] border border-white/10 bg-stone-950 p-6 shadow-2xl lg:grid-cols-[1fr_0.8fr]">
            <button
              type="button"
              onClick={closeProject}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 text-xl transition hover:border-amber-300 hover:text-amber-300"
            >
              &#10005;
            </button>

            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
              <SafeImage
                src={selectedProject.src}
                alt={selectedProject.title}
                label={selectedProject.title}
              />
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-semibold">{selectedProject.title}</h2>
              <p className="mt-4 leading-8 text-stone-300">{selectedProject.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <li
                    key={`${selectedProject.title}-${tag}`}
                    className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {selectedProject.linkUrl ? (
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm uppercase tracking-[0.25em] text-stone-400">
                    Project link
                  </p>
                  <a
                    href={selectedProject.linkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex text-lg font-semibold text-amber-300 transition hover:text-amber-200"
                  >
                    {selectedProject.linkLabel || 'Open project'}
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

    </main>
  )
}
