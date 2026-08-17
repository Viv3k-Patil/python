import React from 'react'
import { Link } from 'react-router-dom'
import AnimationFrame from '../components/AnimationFrame'

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
          <section className="animation-section">
            <div className="animation-header">
              <h2>Python Memory Model</h2>
              <div className="meta">Where do variables actually live? Explore namespaces, heap, and pointers.</div>
            </div>
            <AnimationFrame 
              src="/animations/python-fundamentals/"
              title="Python Memory Model"
              description="Interactive visualization showing how Python stores variables in memory, including namespace vs heap allocation and pointer references."
            />
          </section>

          <section className="animation-section">
            <div className="animation-header">
              <h2>How Programs Run</h2>
              <div className="meta">Journey from disk to RAM to CPU: Watch an executable travel the fetch-decode-execute cycle.</div>
            </div>
            <AnimationFrame 
              src="/animations/computer-architecture/"
              title="How Programs Run: SSD → RAM → CPU"
              description="Step through the complete lifecycle of program execution, from loading from storage through the CPU pipeline."
            />
          </section>

          <div className="coming-soon">
            <h3>Coming Soon</h3>
            <p>More animations for OOP, SQL, APIs, JavaScript, React, and the Capstone project.</p>
          </div>
        </main>
      </div>

      <footer>Interactive Learning · Full-Stack Development</footer>
    </div>
  )
}
