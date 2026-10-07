import {
  ArrowUpRight,
  CodeXml,
  ExternalLink,
  GraduationCap,
} from 'lucide-react'
import { site } from '../data/site'

const currentYear = new Date().getFullYear()

function PortfolioSections() {
  const github = site.socialLinks.find((link) => link.label === 'GitHub')
  const otherSocialLinks = site.socialLinks.filter(
    (link) => link.label !== 'GitHub' && link.href.trim(),
  )

  return (
    <>
      <section
        id="about"
        className="content-section content-section--split"
        aria-labelledby="about-title"
      >
        <h2 id="about-title" className="section-title">
          About
        </h2>
        <div className="section-copy">
          <p>
            I&apos;m {site.name}, a computer science student at{' '}
            {site.education.institution}. I&apos;m interested in building
            practical software through full stack development and exploring
            artificial intelligence and machine learning.
          </p>
          <p>
            I&apos;m based in {site.location} and open to opportunities where I
            can keep learning and contribute to useful work.
          </p>
        </div>
      </section>

      <section
        id="skills"
        className="content-section"
        aria-labelledby="skills-title"
      >
        <div className="section-intro">
          <h2 id="skills-title" className="section-title">
            Skills &amp; interests
          </h2>
          <p className="section-lede">
            Focus areas, without unverified tool or proficiency claims.
          </p>
        </div>
        <div className="focus-list">
          {site.skillCategories.map((category, index) => (
            <div className="focus-row" key={category.name}>
              <span className="focus-row__index" aria-hidden="true">
                0{index + 1}
              </span>
              <h3>{category.name}</h3>
              <span className="focus-row__description">
                {category.description}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="content-section"
        aria-labelledby="projects-title"
      >
        <div className="section-intro">
          <h2 id="projects-title" className="section-title">
            Selected projects
          </h2>
          <p className="section-lede">
            Project entries are kept to confirmed details.
          </p>
        </div>
        <div className="project-list">
          {site.projects.map((project, index) => (
            <article className="project-row" key={project.name}>
              <div className="project-row__heading">
                <span className="project-row__index" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{project.name}</h3>
              </div>
              <p>{project.description}</p>
              <span className="project-status">{project.status}</span>
              {project.href && (
                <a
                  className="text-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.name}`}
                >
                  View project <ExternalLink aria-hidden="true" size={15} />
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section
        id="journey"
        className="content-section content-section--split"
        aria-labelledby="journey-title"
      >
        <h2 id="journey-title" className="section-title">
          Journey
        </h2>
        <div className="journey-entry">
          <span className="journey-entry__years">{site.education.years}</span>
          <div>
            <h3>Computer science undergraduate</h3>
            <p>
              Pursuing a B.Tech in Computer Science &amp; Engineering at{' '}
              {site.education.institution}.
            </p>
          </div>
        </div>
      </section>

      <section
        id="education"
        className="content-section content-section--split"
        aria-labelledby="education-title"
      >
        <h2 id="education-title" className="section-title">
          Education
        </h2>
        <div className="education-entry">
          <GraduationCap aria-hidden="true" size={22} />
          <div>
            <h3>{site.education.degree}</h3>
            <p>{site.education.institution}</p>
            <span>{site.education.years}</span>
          </div>
        </div>
      </section>

      <section
        id="current-focus"
        className="content-section content-section--split"
        aria-labelledby="current-focus-title"
      >
        <h2 id="current-focus-title" className="section-title">
          Current focus
        </h2>
        <p className="section-copy section-copy--single">
          {site.currentFocus}
        </p>
      </section>

      <section
        id="github"
        className="content-section content-section--split"
        aria-labelledby="github-title"
      >
        <h2 id="github-title" className="section-title">
          GitHub
        </h2>
        <div className="profile-links">
          {github?.href ? (
            <a
              className="profile-link"
              href={github.href}
              target="_blank"
              rel="noreferrer"
            >
              <CodeXml aria-hidden="true" size={18} />
              Visit GitHub profile
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          ) : (
            <p>GitHub profile URL has not been added yet.</p>
          )}
          {otherSocialLinks.map((link) => (
            <a
              className="profile-link"
              href={link.href}
              key={link.label}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="content-section contact-section"
        aria-labelledby="contact-title"
      >
        <h2 id="contact-title" className="contact-section__title">
          Let&apos;s connect.
        </h2>
        <p>
          {site.availability}. I&apos;m based in {site.location}.
        </p>
        {site.email ? (
          <a className="button button--primary" href={`mailto:${site.email}`}>
            Contact Dipak
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        ) : (
          <p className="contact-section__note">
            Contact details will be added when available.
          </p>
        )}
      </section>

      <footer className="site-footer">
        <span>
          © {currentYear} {site.name}
        </span>
        <a href="#home">
          Back to top <ArrowUpRight aria-hidden="true" size={14} />
        </a>
      </footer>
    </>
  )
}

export default PortfolioSections
