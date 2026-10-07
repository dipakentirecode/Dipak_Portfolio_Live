import { site } from '../data/site'

function ProfileTerminal() {
  return (
    <aside
      className="terminal"
      aria-label="Profile snapshot styled as a code editor"
    >
      <div className="terminal__topbar">
        <div className="terminal__window-controls" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="terminal__filename">profile.ts</span>
        <span className="terminal__language">TypeScript</span>
      </div>

      <div className="terminal__editor">
        <div className="terminal__line">
          <span className="terminal__number">1</span>
          <code>
            <span className="syntax-keyword">const</span>{' '}
            <span className="syntax-name">developer</span> = {'{'}
          </code>
        </div>
        <div className="terminal__line">
          <span className="terminal__number">2</span>
          <code>
            <span className="syntax-property">name</span>:{' '}
            <span className="syntax-string">"{site.name}"</span>,
          </code>
        </div>
        <div className="terminal__line">
          <span className="terminal__number">3</span>
          <code>
            <span className="syntax-property">focus</span>:{' '}
            <span className="syntax-bracket">[</span>
          </code>
        </div>
        {site.roles.map((role, index) => (
          <div className="terminal__line terminal__line--indent" key={role}>
            <span className="terminal__number">{index + 4}</span>
            <code>
              <span className="syntax-string">"{role}"</span>
              {index < site.roles.length - 1 ? ',' : ''}
            </code>
          </div>
        ))}
        <div className="terminal__line">
          <span className="terminal__number">6</span>
          <code>
            <span className="syntax-bracket">]</span>,
          </code>
        </div>
        <div className="terminal__line">
          <span className="terminal__number">7</span>
          <code>
            <span className="syntax-property">education</span>:{' '}
            <span className="syntax-string">"{site.education.degree}"</span>,
          </code>
        </div>
        <div className="terminal__line">
          <span className="terminal__number">8</span>
          <code>
            <span className="syntax-property">years</span>:{' '}
            <span className="syntax-string">"{site.education.years}"</span>,
          </code>
        </div>
        <div className="terminal__line">
          <span className="terminal__number">9</span>
          <code>
            <span className="syntax-property">location</span>:{' '}
            <span className="syntax-string">"{site.location}"</span>,
          </code>
        </div>
        <div className="terminal__line">
          <span className="terminal__number">10</span>
          <code>
            <span className="syntax-property">status</span>:{' '}
            <span className="syntax-string">"{site.availability}"</span>,
          </code>
        </div>
        <div className="terminal__line">
          <span className="terminal__number">11</span>
          <code>{'}'}</code>
        </div>
        <div className="terminal__cursor" aria-hidden="true" />
      </div>

      <div className="terminal__statusbar" aria-hidden="true">
        <span>dipak.dev</span>
        <span>UTF-8&nbsp; · &nbsp;TypeScript</span>
      </div>
    </aside>
  )
}

export default ProfileTerminal
