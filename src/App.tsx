import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  GraduationCap,
  MapPin,
} from 'lucide-react'
import Navigation from './components/Navigation'
import ProfileTerminal from './components/ProfileTerminal'
import PortfolioSections from './components/PortfolioSections'
import { site } from './data/site'

function App() {
  const reduceMotion = useReducedMotion()

  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <Navigation />

      <main id="home" className="page-main" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__content">
            <div className="availability">
              <span className="availability__indicator" aria-hidden="true" />
              <span>{site.availability}</span>
            </div>

            <h1 id="hero-title" className="hero__title">
              {site.headline}
            </h1>

            <p className="hero__introduction">
              {site.introduction}
            </p>

            <p className="hero__roles">
              {site.title}
            </p>

            <div className="hero__actions">
              <a className="button button--primary" href="#projects">
                View My Work
                <ArrowDownRight aria-hidden="true" size={17} />
              </a>
              {site.resumeHref && (
                <a
                  className="button button--quiet"
                  href={site.resumeHref}
                  download
                >
                  Download Resume
                  <ArrowDown aria-hidden="true" size={16} />
                </a>
              )}
            </div>

            <a className="connect-link" href="#contact">
              Let&apos;s Connect
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>

            <div className="hero__details">
              <div className="hero__detail">
                <MapPin aria-hidden="true" size={16} />
                <span>{site.location}</span>
              </div>
              <div className="hero__detail">
                <GraduationCap aria-hidden="true" size={17} />
                <span>
                  {site.education.degree}
                  <span className="hero__detail-secondary">
                    {site.education.institution} · {site.education.years}
                  </span>
                </span>
              </div>
            </div>

          </div>

          <motion.div
            className="hero__visual"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProfileTerminal />
          </motion.div>

          <p className="hero__index" aria-hidden="true">
            <span>01</span> / PORTFOLIO
          </p>
        </section>
        <PortfolioSections />
      </main>
    </>
  )
}

export default App
