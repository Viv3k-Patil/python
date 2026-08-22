import React from 'react'
import { Link } from 'react-router-dom'
import { syllabusModules, type Lesson, type Module } from '../data/syllabusData'

function ResourceLinks({ resources }: Pick<Lesson, 'resources'>) {
  if (!resources) return null

  const links = [
    ...(resources.recordings || []).map((link) => ({ ...link, icon: 'play_circle', primary: true })),
    ...(resources.notes || []).map((link) => ({ ...link, icon: 'description', primary: false })),
    ...(resources.cheatsheets || []).map((link) => ({ ...link, icon: 'article', primary: false })),
    ...(resources.animations || []).map((link) => ({ ...link, icon: 'code', primary: false })),
  ]

  return (
    <div className="lesson-resources" aria-label="Session resources">
      {links.map((link) => <a className={link.primary ? 'resource-primary' : ''} href={link.url} target="_blank" rel="noreferrer" key={link.url}>
        <span className="material-symbols-rounded" aria-hidden="true">{link.icon}</span>{link.label}
      </a>)}
    </div>
  )
}

function LessonRow({ lesson }: { lesson: Lesson }) {
  return (
    <article className="day session-card">
      <div className="tag"><span className="material-symbols-rounded" aria-hidden="true">event</span>{lesson.day}</div>
      <div className="lesson-content">
        <div className="lesson-heading">
          <h3>{lesson.title}</h3>
          {lesson.flag && <span className={`flag ${lesson.flag.toLowerCase()}`}>{lesson.flag}</span>}
        </div>
        <div className="session-meta">
          <span><span className="material-symbols-rounded" aria-hidden="true">calendar_month</span>{lesson.day}</span>
          <span><span className="material-symbols-rounded" aria-hidden="true">groups</span>Self-paced</span>
        </div>
        <ul>{lesson.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
        <ResourceLinks resources={lesson.resources} />
      </div>
    </article>
  )
}

function ModuleSection({ module }: { module: Module }) {
  return (
    <details id={module.id} className={`module ${module.className}`} open={module.number === 1}>
      <summary className="module-head">
        <div className="idx">{module.number}</div>
        <div className="titles">
          <h2>{module.title}</h2>
          <div className="meta">{module.range} · {module.summary}</div>
        </div>
        <div className="chev material-symbols-rounded" aria-hidden="true">chevron_right</div>
      </summary>
      <div className="day-list">
        {module.lessons.map((lesson) => <LessonRow key={lesson.day} lesson={lesson} />)}
      </div>
    </details>
  )
}

export default function HomePage() {
  return (
    <div>
      <header>
        <div className="header-inner">
          <div className="eyebrow"><span className="material-symbols-rounded" aria-hidden="true">school</span>Syllabus · Compressed Track</div>
          <h1>Full-Stack Development</h1>
          <p className="sub">Python · SQL · REST APIs · FastAPI · HTML/CSS/JS · React - condensed from the 120-day master curriculum for a daily, 1.5-hour class running 7 days a week.</p>
          <div className="stat-row">
            <div className="stat"><div className="num">{syllabusModules.length}</div><div className="label">Modules</div></div>
            <div className="stat"><div className="num">{syllabusModules[0].lessons.length}</div><div className="label">Sessions</div></div>
            <div className="stat"><div className="num">{syllabusModules[0].lessons.filter((lesson) => lesson.resources).length}</div><div className="label">With resources</div></div>
          </div>
          <div className="tech-chips" aria-hidden="false">
            {['Python', 'JavaScript', 'React', 'FastAPI', 'HTML', 'CSS', 'REST API', 'Postman', 'SQL'].map((technology) => <span className="chip" key={technology}>{technology}</span>)}
          </div>
        </div>
      </header>

      <div className="layout">
        <nav className="spine" aria-label="Course modules">
          {syllabusModules.map((module) => <Link to={`/#${module.id}`} key={module.id}><span className="dot nav-dot-python"></span>{module.title}<span className="dayrange">{module.range.replace('Days ', '')}</span></Link>)}
          <Link to="/animations" className="animations-link"><span className="material-symbols-rounded" aria-hidden="true">movie</span>Animations</Link>
        </nav>

        <main>
          {syllabusModules.map((module) => <ModuleSection key={module.id} module={module} />)}
        </main>
      </div>

      <footer>Full-Stack Development · 1.5 hrs/day, 7 days/week</footer>
    </div>
  )
}
