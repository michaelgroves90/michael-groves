import { useEffect, useState } from 'react'

const STORAGE_KEY = 'mg-theme'

export default function ThemeToggleButton() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light')
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      title={theme === 'dark' ? 'Light' : 'Dark'}
      onClick={toggle}
    >
      {theme === 'dark' ? '明' : '暗'}
    </button>
  )
}
