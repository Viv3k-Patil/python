import React from 'react'
import { Link } from 'react-router-dom'

const animations = [
  {
    title: 'How a Program Runs',
    description: 'Follow an executable from SSD to RAM to CPU through the fetch-decode-execute cycle.',
    href: '/animations/computer-architecture/index.html',
    topic: 'Computer Architecture',
  },
  {
    title: 'Python Memory Model',
    description: 'Explore namespaces, heap objects, addresses, and pointer references in Python.',
    href: '/animations/python-fundamentals/index.html',
    topic: 'Python Fundamentals',
  },
  {
    title: 'Python Data Structures',
    description: 'Watch lists, tuples, sets, and dictionaries allocate, update, and release memory slots.',
    href: '/animations/python-memory-visualizer/index.html',
    topic: 'Python Fundamentals',
  },
  {
    title: 'Object-Oriented Programming',
    description: 'Interactive visualizations for classes, inheritance, and encapsulation.',
    href: '/animations/oop/index.html',
    topic: 'OOP',
  },
  {
    title: 'REST APIs',
    description: 'Explore HTTP methods, CRUD operations, and request-response flows.',
    href: '/animations/rest-api/index.html',
    topic: 'Web Development',
  },
]

export default function AnimationsPage() {
  return (
    <div>
      <header>
        <div className="header-inner">
          <Link to="/" className="back-link">← Back to Syllabus</Link>
          <h1>Interactive Animations</h1>
          <p className="sub">Visualize key computer science concepts in action.</p>
        </div>
      </header>

      <div className="layout">
        <main className="animations-main">
          <section className="animation-catalog" aria-labelledby="animation-catalog-title">
            <div className="animation-header">
              <h2 id="animation-catalog-title">Choose an animation</h2>
              <div className="meta">Open a focused interactive lesson in a new tab.</div>
            </div>
            <div className="animation-list">
              {animations.map((animation) => (
                <a
                  className="animation-card"
                  href={animation.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={animation.href}
                >
                  <div className="animation-card-index" aria-hidden="true">↗</div>
                  <div className="animation-card-content">
                    <div className="animation-card-topic">{animation.topic}</div>
                    <h3>{animation.title}</h3>
                    <p>{animation.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </main>
      </div>

      <footer>Interactive Learning · Full-Stack Development</footer>
    </div>
  )
}
