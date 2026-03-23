'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

export const certificates = [
  {
    title: 'Certificate 1',
    src: '/certificates_images/Screenshot 2025-11-28 171926.png',
  },
  {
    title: 'Certificate 2',
    src: '/certificates_images/Screenshot 2025-11-28 171949.png',
  },
  {
    title: 'Certificate 3',
    src: '/certificates_images/Screenshot 2025-11-28 171900.png',
  },
  {
    title: 'Certificate 4',
    src: '/certificates_images/Screenshot 2025-11-28 172008.png',
  },
  {
    title: 'Certificate 5',
    src: '/certificates_images/Screenshot 2025-11-28 172042.png',
  },
  {
    title: 'Certificate 6',
    src: '/certificates_images/Screenshot 2025-11-28 172108.png',
  },
]

export const projects = [
  {
    title: 'Shell Co.',
    description:
      'Shell Co. is a modern web platform that enhances business operations and user engagement through an efficient and user-friendly interface.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    src: '/project_images/ShellCo-Logo.png',
    linkUrl: 'https://shell-co.vercel.app/',
    linkLabel: 'View Shell Co.',
  },
  {
    title: 'GreenSense Dashboard',
    description:
      'Reserved slot for the upcoming sustainability monitoring tool currently in design.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    src: '/project_images/Greensense.png',
    linkUrl: 'https://m1r4-cle.github.io/Green_Sense/',
    linkLabel: 'View GreenSense',
  },
  {
    title: 'M1-FA3 - Pill Choice',
    description:
      'Interactive visual piece inspired by The Matrix - choose the red or blue pill. Built with HTML, CSS, and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    src: '/project_images/M1-FA3.png',
    linkUrl: 'https://masapa1.github.io/M1-FA3/',
    linkLabel: 'View M1-FA3',
  },
  {
    title: 'Smart Payroll - Employee View',
    description:
      'Employee-side WinForms dashboard handling attendance, time logs, and profile management.',
    tags: ['C#', 'WinForms', 'SQL Server'],
    src: '/project_images/SPR EMP Dashboard.png',
  },
  {
    title: 'Smart Payroll - Admin View',
    description:
      'Administrative module providing overview metrics and controls for payroll operations.',
    tags: ['C#', 'Entity Framework', 'Admin UX'],
    src: '/project_images/SPR Admin Dasboard.png',
  },
  {
    title: 'Smart Payroll - Login',
    description:
      'Credential gate with layered validation and role-based routing into the payroll suite.',
    tags: ['Security', '.NET', 'UX'],
    src: '/project_images/SPR Login.png',
  },
  {
    title: 'Kitako Mobile Dashboard',
    description:
      'Mobile-first analytics overview designed to summarize cooperative KPIs at a glance.',
    tags: ['Java', 'Java GUI', 'Mobile UI'],
    src: '/project_images/KITAKO MOBILE DASHBOARD.png',
  },
  {
    title: 'Kitako Inventory Screen',
    description:
      'Detailed stock management view supporting inline edits and quick inventory adjustments.',
    tags: ['Java', 'Java GUI', 'Mobile UI'],
    src: '/project_images/KITAKO MOBILE DASBOARD 2.png',
  },
]

export const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/https.mimim1rcle.com.ph',
    icon: 'facebook',
  },
  {
    label: 'Telegram',
    href: '#',
    icon: 'telegram',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/M1R4-CLE',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/masapa/',
    icon: 'linkedin',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/https.mimim1r4cle.is/',
    icon: 'instagram',
  },
]

export function SocialIcon({ icon, className = '' }) {
  const sharedProps = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true,
  }

  switch (icon) {
    case 'facebook':
      return (
        <svg {...sharedProps}>
          <path
            d="M13.5 21V12.8H16.2L16.6 9.6H13.5V7.56C13.5 6.64 13.76 6 15.08 6H16.7V3.14C15.91 3.05 15.12 3 14.33 3C11.99 3 10.4 4.43 10.4 7.06V9.6H7.75V12.8H10.4V21H13.5Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'telegram':
      return (
        <svg {...sharedProps}>
          <path
            d="M21.4 4.6L18.5 19.02C18.28 20.04 17.7 20.28 16.83 19.8L12.17 16.36L9.92 18.53C9.67 18.78 9.46 18.99 8.98 18.99L9.31 14.24L17.96 6.43C18.34 6.09 17.88 5.9 17.38 6.24L6.69 12.97L2.1 11.53C1.1 11.21 1.08 10.53 2.31 10.05L20.23 3.14C21.06 2.84 21.79 3.32 21.4 4.6Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'github':
      return (
        <svg {...sharedProps}>
          <path
            d="M12 2.75C6.89 2.75 2.75 6.89 2.75 12C2.75 16.09 5.4 19.55 9.08 20.77C9.54 20.85 9.71 20.58 9.71 20.35V18.73C7.16 19.29 6.62 17.5 6.62 17.5C6.2 16.45 5.59 16.17 5.59 16.17C4.75 15.59 5.66 15.6 5.66 15.6C6.58 15.67 7.06 16.55 7.06 16.55C7.89 17.95 9.22 17.55 9.74 17.3C9.82 16.71 10.07 16.31 10.35 16.08C8.31 15.85 6.17 15.06 6.17 11.56C6.17 10.56 6.53 9.74 7.11 9.08C7.02 8.85 6.7 7.91 7.2 6.64C7.2 6.64 7.98 6.39 9.69 7.55C10.42 7.35 11.19 7.25 11.96 7.25C12.73 7.25 13.51 7.35 14.24 7.55C15.95 6.39 16.73 6.64 16.73 6.64C17.23 7.91 16.91 8.85 16.82 9.08C17.4 9.74 17.76 10.56 17.76 11.56C17.76 15.07 15.61 15.84 13.57 16.07C13.93 16.38 14.24 16.99 14.24 17.93V20.35C14.24 20.58 14.41 20.86 14.88 20.77C18.56 19.55 21.21 16.09 21.21 12C21.21 6.89 17.07 2.75 12 2.75Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'linkedin':
      return (
        <svg {...sharedProps}>
          <path
            d="M6.34 8.18H3.52V21H6.34V8.18ZM4.93 3C4.03 3 3.3 3.75 3.3 4.66C3.3 5.56 4.02 6.31 4.9 6.31H4.93C5.85 6.31 6.56 5.56 6.56 4.66C6.54 3.75 5.85 3 4.93 3ZM20.7 13.06C20.7 9.13 18.6 7.3 15.79 7.3C13.52 7.3 12.51 8.55 11.94 9.42V8.18H9.12C9.16 9 9.12 21 9.12 21H11.94V13.85C11.94 13.47 11.97 13.09 12.08 12.82C12.38 12.06 13.06 11.27 14.2 11.27C15.7 11.27 16.3 12.41 16.3 14.09V21H19.12V13.76C19.12 13.37 19.11 13.22 19.09 13.06H20.7Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'instagram':
      return (
        <svg {...sharedProps}>
          <path
            d="M12 7.84A4.16 4.16 0 1 0 16.16 12 4.17 4.17 0 0 0 12 7.84ZM12 14.7A2.7 2.7 0 1 1 14.7 12 2.7 2.7 0 0 1 12 14.7ZM17.3 7.67A.97.97 0 1 1 16.33 6.7.97.97 0 0 1 17.3 7.67ZM20.06 8.65A5.73 5.73 0 0 0 18.5 4.6A5.77 5.77 0 0 0 14.44 3.04C12.84 2.95 11.16 2.95 9.56 3.04A5.76 5.76 0 0 0 5.5 4.59A5.76 5.76 0 0 0 3.94 8.65C3.85 10.25 3.85 11.93 3.94 13.53A5.73 5.73 0 0 0 5.5 17.58A5.78 5.78 0 0 0 9.56 19.15C11.16 19.24 12.84 19.24 14.44 19.15A5.73 5.73 0 0 0 18.5 17.58A5.77 5.77 0 0 0 20.06 13.53C20.15 11.93 20.15 10.26 20.06 8.65ZM18.32 15.9A3.26 3.26 0 0 1 16.49 17.73C15.22 18.23 12.21 18.12 10.86 18.12C9.51 18.12 6.5 18.23 5.23 17.73A3.26 3.26 0 0 1 3.4 15.9C2.9 14.63 3.01 11.62 3.01 10.27C3.01 8.92 2.9 5.91 3.4 4.64A3.26 3.26 0 0 1 5.23 2.81C6.5 2.31 9.51 2.42 10.86 2.42C12.21 2.42 15.22 2.31 16.49 2.81A3.26 3.26 0 0 1 18.32 4.64C18.82 5.91 18.71 8.92 18.71 10.27C18.71 11.62 18.82 14.63 18.32 15.9Z"
            fill="currentColor"
          />
        </svg>
      )
    default:
      return null
  }
}

function MediaFallback({ label, className = '' }) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-200 via-amber-100 to-orange-200 px-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-stone-700 ${className}`}
    >
      <span>{label}</span>
    </div>
  )
}

export function SafeImage({
  src,
  alt,
  label,
  priority = false,
  fill = true,
  width,
  height,
  className = '',
  sizes = '(max-width: 768px) 100vw, 50vw',
}) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return <MediaFallback label={label} className={className} />
  }

  return (
    <Image
      src={src}
      alt={alt}
      priority={priority}
      unoptimized
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      sizes={sizes}
      className={className}
      onError={() => setHasError(true)}
    />
  )
}

export function usePortfolioState({
  themeStorageKey = 'site-theme-light',
  initialLightTheme = false,
  autoRotateMs = 2800,
  visibleProjectCount = 3,
} = {}) {
  const [isLightTheme, setIsLightTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return initialLightTheme
    }

    const saved = window.localStorage.getItem(themeStorageKey)
    if (saved === '1') {
      return true
    }
    if (saved === '0') {
      return false
    }
    return initialLightTheme
  })
  const [activeCertificate, setActiveCertificate] = useState(0)
  const [projectStart, setProjectStart] = useState(0)
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(themeStorageKey, isLightTheme ? '1' : '0')
  }, [isLightTheme, themeStorageKey])

  useEffect(() => {
    if (!autoRotateMs) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setActiveCertificate((current) => (current + 1) % certificates.length)
    }, autoRotateMs)

    return () => window.clearInterval(timer)
  }, [autoRotateMs])

  useEffect(() => {
    const previousDocumentOverflow = document.documentElement.style.overflow
    const previousBodyOverflow = document.body.style.overflow
    const isLocked = Boolean(
      selectedCertificate || selectedProject || isContactModalOpen
    )

    if (isLocked) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.documentElement.style.overflow = previousDocumentOverflow
      document.body.style.overflow = previousBodyOverflow
    }
  }, [isContactModalOpen, selectedCertificate, selectedProject])

  const visibleProjects = useMemo(() => {
    const count = Math.min(visibleProjectCount, projects.length)
    return Array.from({ length: count }, (_, offset) => {
      return projects[(projectStart + offset) % projects.length]
    })
  }, [projectStart, visibleProjectCount])

  return {
    isLightTheme,
    setIsLightTheme,
    toggleTheme: () => setIsLightTheme((current) => !current),
    activeCertificate,
    setActiveCertificate,
    nextCertificate: () =>
      setActiveCertificate((current) => (current + 1) % certificates.length),
    previousCertificate: () =>
      setActiveCertificate(
        (current) => (current - 1 + certificates.length) % certificates.length
      ),
    projectStart,
    setProjectStart,
    nextProject: () =>
      setProjectStart((current) => (current + 1) % projects.length),
    previousProject: () =>
      setProjectStart((current) => (current - 1 + projects.length) % projects.length),
    visibleProjects,
    selectedCertificate,
    openCertificate: setSelectedCertificate,
    closeCertificate: () => setSelectedCertificate(null),
    selectedProject,
    openProject: setSelectedProject,
    closeProject: () => setSelectedProject(null),
    isContactModalOpen,
    openContactModal: () => setIsContactModalOpen(true),
    closeContactModal: () => setIsContactModalOpen(false),
    certificateAngle: 360 / certificates.length,
  }
}
