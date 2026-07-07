import { profile, experience, projects, education, skills } from './data'
import './App.css'

const navLinks = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#educacion', label: 'Educación' },
  { href: '#contacto', label: 'Contacto' },
]

function App() {
  const year = new Date().getFullYear()

  return (
    <>
      <header className="nav">
        <a className="nav__brand" href="#top">
          LFMV
        </a>
        <nav className="nav__links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero" id="sobre-mi">
          <p className="hero__eyebrow">Hola, soy</p>
          <h1>{profile.name}</h1>
          <p className="hero__title">{profile.title}</p>
          <p className="hero__summary">{profile.summary}</p>
          <div className="hero__actions">
            <a className="button button--primary" href={profile.cv} target="_blank" rel="noreferrer">
              Descargar CV
            </a>
            <a className="button" href="#contacto">
              Contáctame
            </a>
          </div>
          <p className="hero__meta">
            📍 {profile.location} · ✉️ {profile.email}
          </p>
        </section>

        <section id="experiencia">
          <h2>Experiencia laboral</h2>
          <div className="timeline">
            {experience.map((job) => (
              <article className="card" key={job.role + job.org}>
                <div className="card__header">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="card__subtitle">{job.org}</p>
                  </div>
                  <span className="card__period">{job.period}</span>
                </div>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="tag-list">
                  {job.stack.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="proyectos">
          <h2>Proyectos destacados</h2>
          <div className="grid">
            {projects.map((project) => (
              <article className="card" key={project.name}>
                <div className="card__header">
                  <div>
                    <h3>{project.name}</h3>
                    <p className="card__subtitle">{project.tagline}</p>
                  </div>
                  <span className="card__period">{project.period}</span>
                </div>
                <ul>
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="tag-list">
                  {project.stack.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="habilidades">
          <h2>Habilidades técnicas</h2>
          <div className="skills">
            {skills.map((group) => (
              <div className="skills__group" key={group.category}>
                <h3>{group.category}</h3>
                <div className="tag-list">
                  {group.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="educacion">
          <h2>Educación</h2>
          <div className="timeline">
            {education.map((item) => (
              <article className="card card--compact" key={item.degree}>
                <div className="card__header">
                  <div>
                    <h3>{item.degree}</h3>
                    <p className="card__subtitle">{item.school}</p>
                  </div>
                  <span className="card__period">{item.period}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contacto" className="contact">
          <h2>Hablemos</h2>
          <p>¿Tienes un proyecto en mente o una vacante disponible? Estoy abierto a nuevas oportunidades.</p>
          <div className="contact__links">
            <a href={`mailto:${profile.email}`}>✉️ {profile.email}</a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>📞 {profile.phone}</a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              🐙 GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {year} {profile.name}
        </p>
      </footer>
    </>
  )
}

export default App
