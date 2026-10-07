import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { site } from '../data/site'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('home')
  const [hasScrolled, setHasScrolled] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const updateScrollState = () => {
      setHasScrolled(window.scrollY > 8)
      const activeTarget = site.navigation.reduce(
        (active, item) => {
          const target = document.getElementById(item.targetId)
          return target && target.getBoundingClientRect().top <= 160
            ? item.targetId
            : active
        },
        site.navigation[0].targetId,
      )
      setActiveItem(activeTarget)
    }
    const updateActiveItem = () => {
      const targetId = window.location.hash.slice(1)
      if (site.navigation.some((item) => item.targetId === targetId)) {
        setActiveItem(targetId)
      }
    }

    updateScrollState()
    updateActiveItem()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('hashchange', updateActiveItem)

    return () => {
      window.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('hashchange', updateActiveItem)
    }
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen])

  const closeMenu = () => {
    setIsMenuOpen(false)
    menuButtonRef.current?.focus()
  }

  return (
    <header className={`site-header${hasScrolled ? ' is-elevated' : ''}`}>
      <div className="site-header__inner">
        <a
          className="brand"
          href="#home"
          aria-label={`${site.name} — home`}
          onClick={() => setActiveItem('home')}
        >
          <span className="brand__mark" aria-hidden="true">
            {site.monogram}
          </span>
          <span className="brand__name">{site.name}</span>
        </a>

        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav
          id="primary-navigation"
          className={`primary-navigation${isMenuOpen ? ' is-open' : ''}`}
          aria-label="Primary navigation"
        >
          {site.navigation.map((item) => (
            <a
              key={item.targetId}
              className={`primary-navigation__link${activeItem === item.targetId ? ' is-active' : ''}`}
              href={item.href}
              aria-current={activeItem === item.targetId ? 'location' : undefined}
              onClick={() => {
                setActiveItem(item.targetId)
                if (isMenuOpen) closeMenu()
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navigation
