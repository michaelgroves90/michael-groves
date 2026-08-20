import { useState } from 'react'
import NextLink from 'next/link'
import ThemeToggleButton from './theme-toggle-button'

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/experience', label: 'Experience' },
  { href: '/qualifications', label: 'Qualifications' }
]

export default function Navbar({ path }) {
  const [open, setOpen] = useState(false)

  return (
    <header className={open ? 'nav open' : 'nav'}>
      <NextLink href="/" className="nav-mark" scroll={false}>
        Michael Groves
      </NextLink>
      <nav className="nav-links" aria-label="Primary">
        {links.map(link => (
          <NextLink
            key={link.href}
            href={link.href}
            className={path === link.href ? 'active' : undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NextLink>
        ))}
        <a href="https://github.com/michaelgroves90" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </nav>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          onClick={() => setOpen(value => !value)}
        >
          Menu
        </button>
        <ThemeToggleButton />
      </div>
    </header>
  )
}
