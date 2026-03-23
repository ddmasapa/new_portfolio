'use client'

import {
  certificates,
  SafeImage,
  SocialIcon,
  socials,
  usePortfolioState,
} from '../../back_end/portfolio_back_end'

function ContactModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null
  }

  return (
    <div className="contact-modal open" aria-hidden="false">
      <button
        type="button"
        className="contact-modal__backdrop"
        aria-label="Close contact modal"
        onClick={onClose}
      />
      <div className="contact-modal__content" role="dialog" aria-modal="true">
        <button
          type="button"
          className="contact-modal__close"
          aria-label="Close contact modal"
          onClick={onClose}
        >
          &#10005;
        </button>
        <h2>Contact Me</h2>
        <p>Reach out for an exploratory conversation.</p>
        <form className="contact-form">
          <input placeholder="Your name" />
          <input placeholder="Email address" type="email" />
          <textarea placeholder="Message" rows={5} />
          <button type="button" className="btn btn-primary" onClick={onClose}>
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default function DesktopSizePage() {
  const {
    isLightTheme,
    toggleTheme,
    activeCertificate,
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
    themeStorageKey: 'desktop-page-light-theme',
    autoRotateMs: 2600,
  })

  return (
    <div className={isLightTheme ? 'light-theme' : ''}>
      <header className="site-header">
        <nav className="top-nav">
          <a href="#about">About</a>
          <a href="#achievements">Certificates</a>
          <a href="#projects">Projects</a>
          <button type="button" onClick={openContactModal}>
            Contact
          </button>
          <button
            type="button"
            className="theme-toggle"
            aria-pressed={isLightTheme}
            title="Toggle theme"
            onClick={toggleTheme}
          >
            Theme
          </button>
        </nav>
      </header>

      <main className="container">
        <section className="hero">
          <div className="card card-left">
            <div className="accent-square" />
            <div className="profile-area">
              <div className="profile-frame">
                <SafeImage
                  src="/pfp/MASAPA draft pfp copy.png"
                  alt="Profile Picture"
                  label="Profile Picture"
                  fill={false}
                  width={360}
                  height={360}
                  className="profile-img"
                />
              </div>
            </div>

            <div className="profile-info">
              <h3 className="quick-title">Quick Info</h3>
              <dl className="quick-list">
                <div className="quick-item">
                  <dt>Experience</dt>
                  <dd>
                    <strong>6 months</strong>
                    <span className="muted">Web / UI / Apps</span>
                  </dd>
                </div>
                <div className="quick-item">
                  <dt>Featured</dt>
                  <dd>
                    <strong>3 Projects</strong>
                    <span className="muted">Team &amp; Solo</span>
                  </dd>
                </div>
              </dl>
              <div className="skills">
                <strong>Skills</strong>
                <p>HTML · CSS · JS · React · Figma · UX Design</p>
              </div>
            </div>
          </div>

          <div className="card card-center">
            <div className="meta">
              <span className="name-small">Daryll Masapa</span>
              <span className="roles">Web Developer • Designer • Programmer</span>
            </div>
            <h1 className="hero-title">
              The Project of
              <br />
              Daryll Masapa
            </h1>
            <div className="hero-blurb">
              <p>
                Throughout my college journey, I successfully completed a variety of
                projects that enhanced my skills in technology, design, and
                problem-solving. These include fully functional applications,
                interactive prototypes, and research-based outputs.
              </p>
            </div>
            <div className="hero-ctas">
              <a href="#projects" className="btn btn-primary">
                See Featured Works
              </a>
              <button type="button" className="btn btn-outline" onClick={openContactModal}>
                Contact Me
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="about-card">
          <h2 className="about-title">About me</h2>
          <h3 className="about-name">Hi, I&apos;m Daryll Dave R. Masapa - also known as Mira</h3>
          <p className="about-role">
            BSIS - 2nd Year · Aspiring Web Developer, Data Analyst and Information
            Systems Student
          </p>
          <p className="about-desc">
            6 months of experience in HTML, CSS, JavaScript, Java, Python, and C++.
            Throughout my college journey, I successfully completed a variety of
            projects that enhanced my skills in technology, design, and
            problem-solving.
          </p>
        </section>

        <section id="achievements" className="section-block">
          <h2>Certificate</h2>
          <div className="drag-root">
            <div id="drag-container">
              <div
                id="spin-container"
                style={{ transform: `rotateY(${-activeCertificate * certificateAngle}deg)` }}
              >
                {certificates.map((certificate, index) => (
                  <button
                    key={certificate.title}
                    type="button"
                    className="certificate-spinner-item"
                    style={{
                      transform: `rotateY(${index * certificateAngle}deg) translateZ(260px)`,
                    }}
                    onClick={() => openCertificate(certificate)}
                  >
                    <div className="certificate-spinner-image">
                      <SafeImage
                        src={certificate.src}
                        alt={certificate.title}
                        label={certificate.title}
                        fill
                        className="spinner-img"
                      />
                    </div>
                  </button>
                ))}
              </div>
              <div id="ground" />
            </div>
          </div>
        </section>

        <section id="projects" className="section-block">
          <h2>Projects</h2>
          <div className="carousel-wrap">
            <button type="button" className="carousel-btn prev-btn" onClick={previousProject}>
              &#8249;
            </button>
            <div className="carousel-viewport">
              <div className="carousel-track">
                {visibleProjects.map((project) => (
                  <button
                    key={`${project.title}-${project.linkUrl || 'local'}`}
                    type="button"
                    className="project-card"
                    onClick={() => openProject(project)}
                  >
                    <figure className="project-media">
                      <SafeImage
                        src={project.src}
                        alt={project.title}
                        label={project.title}
                        fill
                        className="project-media-img"
                      />
                    </figure>
                    <div className="project-info">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-desc">{project.description}</p>
                      <ul className="project-tags">
                        {project.tags.map((tag) => (
                          <li key={`${project.title}-${tag}`}>{tag}</li>
                        ))}
                      </ul>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <button type="button" className="carousel-btn next-btn" onClick={nextProject}>
              &#8250;
            </button>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-card contact-design">
            <div className="contact-left">
              <h2 className="contact-title">Let us help you.</h2>
              <p className="contact-sub">Reach out for an exploratory conversation.</p>
              <button type="button" className="btn btn-primary" id="open-contact" onClick={openContactModal}>
                Contact Us
              </button>

              <div className="contact-info">
                <div className="contact-item">
                  <strong>PHONE</strong>
                  <p>09948086975</p>
                </div>
                <div className="contact-item">
                  <strong>EMAIL</strong>
                  <p>
                    daryllmasapa21@gmail.com
                    <br />
                    daryllmasapa@gmail.com
                  </p>
                </div>
                <div className="contact-item">
                  <strong>SOCIAL</strong>
                  <div className="social-icons">
                    {socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="social-btn"
                        aria-label={social.label}
                        title={social.label}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <SocialIcon icon={social.icon} className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-right">
              <div className="contact-art" role="img" aria-label="decorative art" />
            </div>
          </div>
        </section>
      </main>

      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />

      {selectedCertificate ? (
        <div className="lightbox open" aria-hidden="false">
          <button
            type="button"
            className="lightbox-backdrop"
            aria-label="Close certificate"
            onClick={closeCertificate}
          />
          <div className="lightbox-content" role="dialog" aria-modal="true">
            <div className="lightbox-image-wrap">
              <div className="lightbox-image-box">
                <SafeImage
                  src={selectedCertificate.src}
                  alt={selectedCertificate.title}
                  label={selectedCertificate.title}
                  fill
                  className="lightbox-img"
                />
              </div>
            </div>
            <div className="lightbox-meta">
              <button
                type="button"
                className="lightbox-close"
                aria-label="Close certificate"
                onClick={closeCertificate}
              >
                &#10005;
              </button>
              <h2>{selectedCertificate.title}</h2>
              <p>Selected certificate preview from the 3D carousel.</p>
            </div>
          </div>
        </div>
      ) : null}

      {selectedProject ? (
        <div className="project-lightbox open" aria-hidden="false">
          <button
            type="button"
            className="project-lightbox__backdrop"
            aria-label="Close project view"
            onClick={closeProject}
          />
          <div className="project-lightbox__content" role="dialog" aria-modal="true">
            <button
              type="button"
              className="project-lightbox__close"
              aria-label="Close project view"
              onClick={closeProject}
            >
              &#10005;
            </button>
            <div className="project-lightbox__media">
              <div className="project-lightbox__media-box">
                <SafeImage
                  src={selectedProject.src}
                  alt={selectedProject.title}
                  label={selectedProject.title}
                  fill
                  className="project-lightbox__image"
                />
              </div>
            </div>
            <div className="project-lightbox__details">
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <ul className="project-lightbox__tags">
                {selectedProject.tags.map((tag) => (
                  <li key={`${selectedProject.title}-${tag}`}>{tag}</li>
                ))}
              </ul>
              {selectedProject.linkUrl ? (
                <div className="project-lightbox__link-row">
                  <span className="project-lightbox__link-label">Project link:</span>
                  <a
                    className="project-lightbox__link-anchor"
                    href={selectedProject.linkUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {selectedProject.linkLabel || 'Open project'}
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      <style jsx global>{`
        :root { --bg-1:#050505; --bg-2:#0b0b0b; --text:#e6e6e6; --muted:#9aa0a6; --accent:#00ff66; --glass-border:rgba(255,255,255,0.04); --container-max:1200px; }
        * { box-sizing:border-box; }
        html, body { height:100%; margin:0; font-family:Inter,system-ui,Arial,sans-serif; background:radial-gradient(1200px 500px at 10% 10%, rgba(0,0,0,0.35), transparent), linear-gradient(180deg,var(--bg-1),var(--bg-2)); color:var(--text); scroll-behavior:smooth; }
        .site-header { position:relative; height:0; }
        .top-nav { position:fixed; right:28px; top:18px; display:flex; gap:12px; z-index:30; align-items:center; flex-wrap:wrap; }
        .top-nav a, .top-nav button { color:var(--text); background:rgba(255,255,255,0.02); padding:8px 12px; border-radius:999px; text-decoration:none; font-size:.95rem; border:1px solid var(--glass-border); }
        .top-nav button { cursor:pointer; }
        .container { max-width:var(--container-max); width:calc(100% - 120px); margin:48px auto 80px; padding:32px; background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); border:1px solid rgba(255,255,255,0.03); border-radius:14px; box-shadow:0 30px 80px rgba(0,0,0,0.65); }
        .hero { display:grid; grid-template-columns:440px 1fr; gap:28px; align-items:start; margin-bottom:36px; }
        .card, .about-card { background:linear-gradient(180deg, rgba(255,255,255,0.015), rgba(255,255,255,0.01)); border-radius:14px; padding:22px; border:1px solid var(--glass-border); box-shadow:0 12px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.01); }
        .card-left { position:relative; display:flex; flex-direction:column; padding-bottom:20px; }
        .accent-square { width:36px; height:36px; background:var(--accent); border-radius:8px; position:absolute; left:18px; top:18px; box-shadow:0 6px 18px rgba(0,255,102,0.08); }
        .profile-area { display:flex; align-items:center; justify-content:center; padding-top:24px; }
        .profile-frame { width:360px; height:360px; border-radius:10px; overflow:hidden; background:#0b0b0b; box-shadow:0 8px 30px rgba(0,0,0,0.6); border:1px solid rgba(0,0,0,0.4); }
        .profile-img { width:100%; height:100%; object-fit:cover; }
        .profile-info, .hero-blurb, .contact-card.contact-design { background:rgba(0,0,0,0.45); }
        .profile-info { margin-top:20px; padding:18px; border-radius:12px; border:1px solid rgba(255,255,255,0.02); color:var(--muted); }
        .quick-title, .about-title { color:var(--accent); margin:0 0 12px; font-size:1.05rem; }
        .quick-list { margin:0; padding:0; }
        .quick-item { margin-bottom:12px; background:rgba(0,0,0,0.35); padding:10px; border-radius:8px; border:1px solid rgba(255,255,255,0.02); }
        .quick-item dt { font-size:.85rem; color:var(--muted); }
        .quick-item dd { margin:6px 0 0; font-weight:700; color:var(--text); display:flex; justify-content:space-between; align-items:center; }
        .muted { color:var(--muted); font-size:.85rem; margin-left:8px; }
        .skills { margin-top:10px; color:var(--muted); font-size:.95rem; }
        .card-center { display:flex; flex-direction:column; gap:18px; padding:28px; }
        .meta { display:flex; align-items:center; gap:14px; color:var(--muted); font-size:.95rem; flex-wrap:wrap; }
        .name-small { color:var(--accent); font-weight:700; }
        .roles { color:var(--muted); font-size:.85rem; }
        .hero-title { margin:0; font-size:2.1rem; line-height:1.02; color:var(--accent); font-weight:800; }
        .hero-blurb { padding:18px; border-radius:12px; border:1px solid rgba(255,255,255,0.02); color:var(--muted); }
        .hero-ctas { display:flex; gap:12px; margin-top:6px; flex-wrap:wrap; }
        .btn { display:inline-block; padding:12px 18px; border-radius:10px; text-decoration:none; font-weight:600; font-size:.95rem; border:1px solid var(--glass-border); cursor:pointer; }
        .btn-primary { background:var(--accent); color:#07120a; box-shadow:0 10px 30px rgba(0,255,102,0.12); }
        .btn-outline { background:transparent; color:var(--text); border:1px solid rgba(255,255,255,0.06); }
        .section-block { margin-top:28px; color:var(--text); }
        .section-block h2 { margin:0 0 12px; font-size:1.25rem; }
        .about-card { margin-top:24px; display:flex; flex-direction:column; gap:12px; }
        .about-name { margin:0; font-size:1.4rem; font-weight:700; }
        .about-role, .about-desc { margin:0; color:var(--muted); line-height:1.5; }
        #achievements { margin-top:110px; position:relative; }
        .drag-root { perspective:1000px; transform-style:preserve-3d; }
        #drag-container, #spin-container { position:relative; display:flex; margin:18px auto; transform-style:preserve-3d; width:100%; max-width:900px; min-height:260px; padding-top:36px; padding-bottom:40px; align-items:center; justify-content:center; }
        #spin-container { transition:transform .9s ease; }
        .certificate-spinner-item { position:absolute; left:50%; top:50%; width:320px; height:210px; margin-left:-160px; margin-top:-105px; border:0; padding:0; background:transparent; cursor:pointer; }
        .certificate-spinner-image { position:relative; width:100%; height:100%; overflow:hidden; border-radius:6px; background:#fff; box-shadow:0 18px 40px rgba(0,0,0,0.6); }
        .spinner-img { object-fit:cover; }
        #ground { position:absolute; left:50%; top:calc(100% - 10px); transform:translate(-50%, -50%) rotateX(90deg); width:900px; height:900px; background:radial-gradient(circle farthest-side, rgba(0,0,0,0.4), transparent); pointer-events:none; }
        #projects { margin-top:220px; padding-top:12px; }
        .carousel-wrap { position:relative; overflow:hidden; margin-top:28px; }
        .carousel-btn { z-index:2; background:rgba(0,0,0,0.6); color:var(--accent); border-radius:10px; width:44px; height:44px; display:flex; align-items:center; justify-content:center; cursor:pointer; border:0; position:absolute; top:50%; transform:translateY(-50%); }
        .prev-btn { left:0; }
        .next-btn { right:0; }
        .carousel-viewport { width:100%; padding-left:48px; padding-right:48px; }
        .carousel-track { display:flex; gap:32px; min-width:max-content; }
        .project-card { min-width:320px; max-width:320px; min-height:380px; display:flex; flex-direction:column; background:#111; border-radius:16px; box-shadow:0 4px 24px rgba(0,0,0,0.3); padding:24px 16px 16px; border:0; color:inherit; text-align:left; cursor:pointer; }
        .project-media { position:relative; width:100%; max-width:280px; margin:0 auto; aspect-ratio:16 / 9; border-radius:10px; overflow:hidden; background:linear-gradient(180deg, rgba(12,12,12,0.9), rgba(5,5,5,0.9)); box-shadow:0 12px 24px rgba(0,0,0,0.45); }
        .project-media-img { object-fit:contain; padding:12px; }
        .project-info { display:flex; flex-direction:column; gap:10px; margin-top:16px; }
        .project-title { margin:0; }
        .project-desc { margin:0; font-size:.9rem; line-height:1.45; color:var(--muted); }
        .project-tags, .project-lightbox__tags { margin:0; padding:0; list-style:none; display:flex; flex-wrap:wrap; gap:10px; }
        .project-tags li, .project-lightbox__tags li { padding:6px 14px; border-radius:999px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.08); font-weight:600; font-size:.85rem; color:var(--text); }
        .lightbox, .project-lightbox, .contact-modal { position:fixed; inset:0; z-index:1400; display:flex; align-items:center; justify-content:center; padding:24px; }
        .lightbox-backdrop, .project-lightbox__backdrop, .contact-modal__backdrop { position:absolute; inset:0; background:rgba(4,6,8,0.78); backdrop-filter:blur(10px); border:0; }
        .lightbox-content, .project-lightbox__content, .contact-modal__content { position:relative; z-index:2; }
        .lightbox-content { max-width:1300px; width:92vw; max-height:92vh; padding:20px; display:grid; grid-template-columns:1fr 480px; gap:26px; }
        .lightbox-image-wrap, .project-lightbox__media { position:relative; min-height:420px; }
        .lightbox-image-box, .project-lightbox__media-box { position:relative; width:100%; height:100%; min-height:inherit; border-radius:12px; overflow:hidden; background:#111; box-shadow:0 30px 80px rgba(0,0,0,0.65); }
        .lightbox-img, .project-lightbox__image { object-fit:contain; }
        .lightbox-meta, .contact-modal__content { background:linear-gradient(rgba(18,18,18,0.94), rgba(18,18,18,0.9)); padding:24px; border-radius:14px; color:var(--text); border:1px solid rgba(255,255,255,0.04); box-shadow:0 18px 50px rgba(0,0,0,0.55); }
        .lightbox-close, .project-lightbox__close, .contact-modal__close { position:absolute; top:12px; right:12px; background:transparent; color:var(--accent); border:0; width:40px; height:40px; font-size:18px; cursor:pointer; }
        .project-lightbox__content { width:min(1200px,96vw); max-height:92vh; padding:32px; display:grid; grid-template-columns:minmax(0,1.45fr) minmax(0,1fr); gap:32px; background:linear-gradient(135deg, rgba(18,18,20,0.94), rgba(10,10,12,0.92)); border:1px solid rgba(255,255,255,0.05); border-radius:20px; box-shadow:0 40px 120px rgba(0,0,0,0.72); overflow:hidden; }
        .project-lightbox__details { display:flex; flex-direction:column; gap:18px; }
        .project-lightbox__details h2, .lightbox-meta h2, .contact-modal__content h2 { margin:0; color:var(--accent); }
        .project-lightbox__details p, .lightbox-meta p, .contact-modal__content p { margin:0; color:var(--muted); line-height:1.5; }
        .project-lightbox__link-row { display:flex; gap:12px; align-items:center; flex-wrap:wrap; }
        .project-lightbox__link-label { font-size:.85rem; text-transform:uppercase; letter-spacing:.15em; color:var(--muted); }
        .project-lightbox__link-anchor { padding:8px 16px; border-radius:999px; background:rgba(0,0,0,0.55); color:var(--accent); font-weight:600; text-decoration:none; }
        .contact-section { margin:72px auto; padding:0 24px; width:100%; max-width:1200px; }
        .contact-card.contact-design { display:flex; gap:36px; align-items:center; padding:56px; border-radius:14px; box-shadow:0 30px 70px rgba(0,0,0,0.6); }
        .contact-left { flex:1 1 520px; max-width:620px; }
        .contact-title { margin:0 0 12px; font-size:2rem; font-weight:800; }
        .contact-sub { margin:0 0 20px; color:var(--muted); }
        .contact-info { display:flex; gap:24px; margin-top:28px; flex-wrap:wrap; }
        .contact-item { min-width:160px; }
        .contact-item strong { display:block; color:var(--accent); margin-bottom:8px; font-size:.85rem; letter-spacing:.03em; }
        .contact-item p { margin:0; }
        .social-icons { display:flex; gap:14px; margin-top:8px; flex-wrap:wrap; }
        .social-btn { display:inline-grid; place-items:center; width:56px; height:56px; border-radius:12px; text-decoration:none; background:rgba(0,0,0,0.55); color:var(--accent); border:1px solid rgba(255,255,255,0.04); box-shadow:0 6px 18px rgba(0,0,0,0.4); text-transform:uppercase; font-size:.72rem; font-weight:700; }
        .contact-right { flex:0 0 520px; display:flex; align-items:center; justify-content:center; }
        .contact-art { width:540px; height:420px; background:linear-gradient(135deg, rgba(10,140,90,0.95), rgba(0,40,80,0.85)); box-shadow:0 40px 100px rgba(0,0,0,0.7); clip-path:polygon(10% 0, 100% 0, 85% 100%, 20% 95%, 0 55%); transform:translateX(20px) rotate(-6deg); border-radius:8px; position:relative; overflow:hidden; }
        .contact-art::before { content:''; position:absolute; inset:0; background:radial-gradient(400px 140px at 30% 30%, rgba(255,255,255,0.06), transparent 20%), linear-gradient(180deg, rgba(255,255,255,0.02), transparent 40%); mix-blend-mode:overlay; }
        .theme-toggle[aria-pressed='true'] { background:var(--accent); color:#fff; border-color:transparent; }
        .light-theme { --bg-1:#fbf6ef; --bg-2:#ffffff; --text:#111111; --muted:#616161; --accent:#0b7bff; --glass-border:rgba(0,0,0,0.08); }
        .contact-form { display:grid; gap:14px; margin-top:20px; }
        .contact-form input, .contact-form textarea { width:100%; border-radius:12px; border:1px solid rgba(255,255,255,0.08); background:rgba(255,255,255,0.04); color:var(--text); padding:12px 14px; }
        @media (max-width:1024px) { .project-lightbox__content, .lightbox-content { grid-template-columns:1fr; } .project-lightbox__media, .lightbox-image-wrap { min-height:320px; } }
        @media (max-width:1000px) { .contact-card.contact-design { flex-direction:column; padding:36px; } .contact-left { max-width:100%; } .contact-right { width:100%; margin-top:18px; } .contact-art { width:80%; height:300px; transform:none; clip-path:polygon(6% 0, 100% 0, 92% 100%, 22% 96%, 0 55%); } }
        @media (max-width:980px) { .container { width:calc(100% - 48px); padding:20px; margin:28px auto; } .hero { grid-template-columns:1fr; gap:18px; } .top-nav { left:20px; right:20px; top:16px; } }
        @media (max-width:640px) { .project-card { min-width:100%; max-width:100%; } .contact-modal, .project-lightbox, .lightbox { padding:12px; } }
        @media (max-width:600px) { .contact-art { height:220px; width:100%; } .contact-info { flex-direction:column; gap:12px; } .container { width:calc(100% - 28px); } }
      `}</style>
    </div>
  )
}
