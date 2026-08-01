import React from 'react'

export default function App() {
  return (
    <div>
      <header>
        <div className="header-inner">
          <div className="eyebrow">Syllabus · Compressed Track</div>
          <h1>Full-Stack Development</h1>
          <p className="sub">Python · SQL · REST APIs · FastAPI · HTML/CSS/JS · React — condensed from the 120-day master curriculum for a daily, 1.5-hour class running 7 days a week.</p>
          <div className="stat-row">
            <div className="stat"><div className="num">9</div><div className="label">Modules</div></div>
            <div className="stat"><div className="num">4</div><div className="label">Built projects</div></div>
            <div className="stat"><div className="num">1</div><div className="label">Capstone portal</div></div>
          </div>
          <div className="tech-chips" aria-hidden="false">
            <span className="chip"><img className="chip-icon" src="https://cdn.simpleicons.org/python/3B6EA5" alt="Python"/><span>Python</span></span>
            <span className="chip"><img className="chip-icon" src="https://cdn.simpleicons.org/javascript/000000" alt="JavaScript"/><span>JavaScript</span></span>
            <span className="chip"><img className="chip-icon" src="https://cdn.simpleicons.org/react/61DAFB" alt="React"/><span>React</span></span>
            <span className="chip"><img className="chip-icon" src="https://cdn.simpleicons.org/fastapi/009688" alt="FastAPI"/><span>FastAPI</span></span>
            <span className="chip"><img className="chip-icon" src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML5"/><span>HTML</span></span>
            <span className="chip"><img className="chip-icon" src="https://cdn.simpleicons.org/css3/1572B6" alt="CSS3"/><span>CSS</span></span>
            <span className="chip"><img className="chip-icon" src="https://cdn.simpleicons.org/openapi/6CC24A" alt="OpenAPI"/><span>REST API</span></span>
            <span className="chip"><img className="chip-icon" src="https://cdn.simpleicons.org/postman/FF6C37" alt="Postman"/><span>Postman</span></span>
            <span className="chip"><img className="chip-icon" src="https://cdn.simpleicons.org/postgresql/31648A" alt="PostgreSQL"/><span>SQL</span></span>
          </div>
        </div>
      </header>

      <div className="layout">
        <nav className="spine">
          <a href="#m1"><span className="dot nav-dot-python"></span>🐍 Python Foundations<span className="dayrange">1–9</span></a>
          <a href="#m2"><span className="dot nav-dot-oop"></span>🧭 OOP in Python<span className="dayrange">10–14</span></a>
          <a href="#m3"><span className="dot nav-dot-oop"></span>🛠️ Python Essentials<span className="dayrange">15–17</span></a>
          <a href="#m4"><span className="dot nav-dot-sql"></span>🗄️ SQL & Databases<span className="dayrange">18–22</span></a>
          <a href="#m5"><span className="dot nav-dot-api"></span>🚀 REST API & FastAPI<span className="dayrange">23–29</span></a>
          <a href="#m6"><span className="dot nav-dot-web"></span>🌐 HTML & CSS<span className="dayrange">30–34</span></a>
          <a href="#m7"><span className="dot nav-dot-js"></span>🟨 JavaScript & DOM<span className="dayrange">35–39</span></a>
          <a href="#m8"><span className="dot nav-dot-react"></span>⚛️ React Fundamentals<span className="dayrange">40–45</span></a>
          <a href="#m9"><span className="dot nav-dot-capstone"></span>🏁 Integration & Capstone<span className="dayrange">46–60</span></a>
        </nav>

        <main>
          {/* Removed the "What changed" section per request. Advanced list retained at bottom. */}

          <details id="m1" className="module m-python" open>
            <summary className="module-head">
              <div className="idx">1</div>
              <div className="titles">
                <h2>Python Foundations</h2>
                <div className="meta">Days 1–9 · Core syntax, data structures, functions</div>
              </div>
              <div className="chev">▶</div>
            </summary>
            <div className="day-list">
              <div className="day"><div className="tag">DAY 1</div><div><h3>Python Setup & First Script</h3><ul><li>Why Python, ecosystem overview</li><li>Installing Python + VS Code setup</li><li>Writing & running your first script</li></ul></div></div>
              <div className="day"><div className="tag">DAY 2</div><div><h3>Variables, Data Types & Operators</h3><ul><li>Variables, identifiers, reserved keywords</li><li>Type casting</li><li>Arithmetic, comparison, logical operators</li></ul></div></div>
              <div className="day"><div className="tag">DAY 3</div><div><h3>Control Flow</h3><ul><li>if / elif / else</li><li>for and while loops</li><li>break, continue, nested loops</li></ul></div></div>
              <div className="day"><div className="tag">DAY 4</div><div><h3>Strings</h3><ul><li>String operations & methods</li><li>Indexing and slicing</li><li>f-strings and formatting</li></ul></div></div>
              <div className="day"><div className="tag">DAY 5</div><div><h3>Lists & Tuples</h3><ul><li>List methods and operations</li><li>Tuples and immutability</li><li>When to use which</li></ul></div></div>
              <div className="day"><div className="tag">DAY 6</div><div><h3>Dictionaries & Sets</h3><ul><li>Key-value pairs, nested dicts</li><li>Set operations</li><li>Practice: combine all data structures</li></ul></div></div>
              <div className="day"><div className="tag">DAY 7</div><div><h3>Functions</h3><ul><li>Defining & calling functions</li><li>Parameters, return values, default args</li><li>Local vs global scope</li></ul></div></div>
              <div className="day"><div className="tag">DAY 8</div><div><h3>Files & Exceptions</h3><ul><li>Reading/writing text & JSON files</li><li>try / except / finally basics</li><li>Common built-in exceptions</li></ul></div></div>
              <div className="day"><div className="tag">DAY 9</div><div><h3 style={{display:'inline'}}>Build: Console Utility App</h3><span className="flag">PROJECT</span><ul><li>Combine syntax, structures, functions, files into one small CLI tool (e.g. contact book / expense tracker)</li></ul></div></div>
            </div>
          </details>

          {/* Modules 2..9 (omitted for brevity in code view, but included in final file) */}

          <details id="m2" className="module m-oop">
            <summary className="module-head">
              <div className="idx">2</div>
              <div className="titles">
                <h2>Object-Oriented Programming</h2>
                <div className="meta">Days 10–14 · Classes, inheritance, encapsulation</div>
              </div>
              <div className="chev">▶</div>
            </summary>
            <div className="day-list">
              <div className="day"><div className="tag">DAY 10</div><div><h3>Classes & Objects</h3><ul><li>Instance variables and methods</li><li>The __init__ constructor</li><li>Creating and using objects</li></ul></div></div>
              <div className="day"><div className="tag">DAY 11</div><div><h3>Inheritance</h3><ul><li>Is-a relationships</li><li>Parent/child classes</li><li>Overriding base behavior</li></ul></div></div>
              <div className="day"><div className="tag">DAY 12</div><div><h3>Encapsulation & Polymorphism</h3><ul><li>Public, private, protected members</li><li>Method overriding</li><li>Polymorphism with real examples</li></ul></div></div>
              <div className="day"><div className="tag">DAY 13</div><div><h3>Abstraction</h3><ul><li>Abstract classes with the abc module</li><li>super() and calling parent methods</li><li>Inheritance vs composition — when to use which</li></ul></div></div>
              <div className="day"><div className="tag">DAY 14</div><div><h3 style={{display:'inline'}}>Build: OOP Console System</h3><span className="flag">PROJECT</span><ul><li>Student/Employee management system applying inheritance, encapsulation & polymorphism</li></ul></div></div>
            </div>
          </details>

          <details id="m3" className="module m-oop">
            <summary className="module-head">
              <div className="idx">3</div>
              <div className="titles">
                <h2>Python Essentials for Real Projects</h2>
                <div className="meta">Days 15–17 · Exceptions, regex, practical decorators</div>
              </div>
              <div className="chev">▶</div>
            </summary>
            <div className="day-list">
              <div className="day"><div className="tag">DAY 15</div><div><h3>Custom Exceptions & Logging</h3><ul><li>Creating custom exception classes</li><li>Python's logging module basics</li><li>Why logging matters in real apps</li></ul></div></div>
              <div className="day"><div className="tag">DAY 16</div><div><h3>Regex for Validation</h3><ul><li>The re module — search, match, findall</li><li>Practical patterns: email, phone, name validation</li></ul></div></div>
              <div className="day"><div className="tag">DAY 17</div><div><h3>Decorators (Practical Use Only)</h3><ul><li>What a decorator is and why it's useful</li><li>Writing a simple logging/validation decorator</li><li><em>(Chaining, parameterized decorators skipped — not needed for this track)</em></li></ul></div></div>
            </div>
          </details>

          <details id="m4" className="module m-sql">
            <summary className="module-head">
              <div className="idx">4</div>
              <div className="titles">
                <h2>SQL & Databases</h2>
                <div className="meta">Days 18–22 · Schema design, queries, joins</div>
              </div>
              <div className="chev">▶</div>
            </summary>
            <div className="day-list">
              <div className="day"><div className="tag">DAY 18</div><div><h3>SQL Basics & DDL</h3><ul><li>RDBMS & schema concepts</li><li>CREATE TABLE, ALTER TABLE, DROP TABLE</li><li>Data types & constraints (PK, FK, NOT NULL, UNIQUE)</li></ul></div></div>
              <div className="day"><div className="tag">DAY 19</div><div><h3>DML — Modifying Data</h3><ul><li>INSERT, UPDATE, DELETE</li><li>Designing simple schemas (students, employees, customers)</li></ul></div></div>
              <div className="day"><div className="tag">DAY 20</div><div><h3>Filtering Data</h3><ul><li>SELECT with WHERE, BETWEEN, IN, LIKE, IS NULL</li></ul></div></div>
              <div className="day"><div className="tag">DAY 21</div><div><h3>Aggregation</h3><ul><li>COUNT, SUM, AVG, MAX, MIN</li><li>GROUP BY and HAVING</li></ul></div></div>
              <div className="day"><div className="tag">DAY 22</div><div><h3>Joins & Practice</h3><ul><li>INNER JOIN, LEFT JOIN</li><li>Practical exercises on related tables (employee-department, customer-orders)</li></ul></div></div>
            </div>
          </details>

          <details id="m5" className="module m-api">
            <summary className="module-head">
              <div className="idx">5</div>
              <div className="titles">
                <h2>REST APIs & FastAPI</h2>
                <div className="meta">Days 23–29 · API design, FastAPI, database-backed CRUD</div>
              </div>
              <div className="chev">▶</div>
            </summary>
            <div className="day-list">
              <div className="day"><div className="tag">DAY 23</div><div><h3>REST API Concepts</h3><ul><li>What is an API / REST API</li><li>HTTP methods (GET/POST/PUT/DELETE) & status codes</li><li>Testing with Postman / Thunder Client</li></ul></div></div>
              <div className="day"><div className="tag">DAY 24</div><div><h3>FastAPI Introduction</h3><ul><li>Why FastAPI, setup, uvicorn</li><li>Path & query parameters</li><li>Auto-docs with Swagger</li></ul></div></div>
              <div className="day"><div className="tag">DAY 25</div><div><h3>Request Validation</h3><ul><li>Pydantic models for request/response</li><li>Type-safe inputs & outputs</li></ul></div></div>
              <div className="day"><div className="tag">DAY 26</div><div><h3>Database Integration</h3><ul><li>Connecting FastAPI to SQL via SQLAlchemy</li><li>Designing ORM models, managing DB sessions</li></ul></div></div>
              <div className="day"><div className="tag">DAY 27</div><div><h3>CRUD Endpoints</h3><ul><li>Full Create/Read/Update/Delete against the database</li><li>API modularization with routers</li></ul></div></div>
              <div className="day"><div className="tag">DAY 28</div><div><h3>Error Handling & Auth Basics</h3><ul><li>Custom exception handlers, proper status codes</li><li>JWT-based login — the essentials only</li></ul></div></div>
              <div className="day"><div className="tag">DAY 29</div><div><h3 style={{display:'inline'}}>Build: Task Manager API</h3><span className="flag">PROJECT</span><ul><li>FastAPI + SQL + JWT auth, employee → multiple tasks relation</li></ul></div></div>
            </div>
          </details>

          <details id="m6" className="module m-web">
            <summary className="module-head">
              <div className="idx">6</div>
              <div className="titles">
                <h2>HTML & CSS</h2>
                <div className="meta">Days 30–34 · Structure, styling, responsive layout</div>
              </div>
              <div className="chev">▶</div>
            </summary>
            <div className="day-list">
              <div className="day"><div className="tag">DAY 30</div><div><h3>HTML Structure</h3><ul><li>Document structure, headings, links, images, lists, tables</li><li>Semantic elements (header, nav, main, section, footer)</li></ul></div></div>
              <div className="day"><div className="tag">DAY 31</div><div><h3>Forms</h3><ul><li>form, input, label, select, textarea, button</li><li>HTML5 validation attributes</li></ul></div></div>
              <div className="day"><div className="tag">DAY 32</div><div><h3>CSS Basics</h3><ul><li>Selectors, box model, display types</li><li>Including CSS (inline/internal/external)</li></ul></div></div>
              <div className="day"><div className="tag">DAY 33</div><div><h3>Flexbox & Grid</h3><ul><li>Flexbox for layout (direction, justify, align, gap)</li><li>CSS Grid basics + media queries for responsive design</li></ul></div></div>
              <div className="day"><div className="tag">DAY 34</div><div><h3 style={{display:'inline'}}>Build: Static Multi-Page UI</h3><span className="flag">PROJECT</span><ul><li>Responsive landing + listing + contact page using semantic HTML & flex/grid</li></ul></div></div>
            </div>
          </details>

          <details id="m7" className="module m-js">
            <summary className="module-head">
              <div className="idx">7</div>
              <div className="titles">
                <h2>JavaScript & DOM</h2>
                <div className="meta">Days 35–39 · Logic, DOM manipulation, calling APIs</div>
              </div>
              <div className="chev">▶</div>
            </summary>
            <div className="day-list">
              <div className="day"><div className="tag">DAY 35</div><div><h3>JS Fundamentals</h3><ul><li>let/const, data types, operators</li><li>Control flow: if/else, switch, loops</li></ul></div></div>
              <div className="day"><div className="tag">DAY 36</div><div><h3>Functions, Arrays & Objects</h3><ul><li>Functions, arrays, objects basics</li><li>map, filter, reduce (practical examples)</li></ul></div></div>
              <div className="day"><div className="tag">DAY 37</div><div><h3>DOM Manipulation</h3><ul><li>Selecting elements (getElementById, querySelector)</li><li>Updating content, classList</li></ul></div></div>
              <div className="day"><div className="tag">DAY 38</div><div><h3>Events & Validation</h3><ul><li>click, submit, input event handling</li><li>Form validation with JavaScript</li></ul></div></div>
              <div className="day"><div className="tag">DAY 39</div><div><h3 style={{display:'inline'}}>Build: Connect UI to FastAPI</h3><span className="flag">PROJECT</span><ul><li>fetch() GET/POST — wire the static UI to a live FastAPI endpoint</li></ul></div></div>
            </div>
          </details>

          <details id="m8" className="module m-react">
            <summary className="module-head">
              <div className="idx">8</div>
              <div className="titles">
                <h2>React Fundamentals</h2>
                <div className="meta">Days 40–45 · Components, state, routing, data fetching</div>
              </div>
              <div className="chev">▶</div>
            </summary>
            <div className="day-list">
              <div className="day"><div className="tag">DAY 40</div><div><h3>React & JSX</h3><ul><li>What is React and why SPAs</li><li>Setup with Vite, JSX syntax</li></ul></div></div>
              <div className="day"><div className="tag">DAY 41</div><div><h3>Components & Props</h3><ul><li>Functional components</li><li>Passing and using props</li></ul></div></div>
              <div className="day"><div className="tag">DAY 42</div><div><h3>State & Events</h3><ul><li>useState hook</li><li>Event handling (onClick, onChange)</li></ul></div></div>
              <div className="day"><div className="tag">DAY 43</div><div><h3>Lists & Forms</h3><ul><li>Rendering lists with .map and key</li><li>Controlled form components</li></ul></div></div>
              <div className="day"><div className="tag">DAY 44</div><div><h3>Fetching Data</h3><ul><li>useEffect for API calls</li><li>Consuming FastAPI endpoints from React</li></ul></div></div>
              <div className="day"><div className="tag">DAY 45</div><div><h3>Routing</h3><ul><li>React Router — Routes, Route, Link</li><li>Route params with useParams</li></ul></div></div>
            </div>
          </details>

          <details id="m9" className="module m-capstone">
            <summary className="module-head">
              <div className="idx">9</div>
              <div className="titles">
                <h2>Full-Stack Integration & Capstone</h2>
                <div className="meta">Days 46–60 · End-to-end build: React + FastAPI + SQL</div>
              </div>
              <div className="chev">▶</div>
            </summary>
            <div className="day-list">
              <div className="day"><div className="tag">DAY 46</div><div><h3>Full CRUD Integration</h3><ul><li>Connect React frontend to FastAPI backend end-to-end</li></ul></div></div>
              <div className="day"><div className="tag">DAY 47</div><div><h3>Auth Flow</h3><ul><li>JWT login/logout, storing token in Context</li><li>Protected routes</li></ul></div></div>
              <div className="day"><div className="tag">DAY 48</div><div><h3 style={{display:'inline'}}>Capstone Kickoff</h3><span className="flag">CAPSTONE</span><ul><li>Choose domain (e.g. Bank Portal / Task Manager)</li><li>Requirement gathering, schema design, API planning</li></ul></div></div>
              <div className="day"><div className="tag">DAY 49–50</div><div><h3 style={{display:'inline'}}>Backend Build</h3><span className="flag">CAPSTONE</span><ul><li>FastAPI endpoints for core entities & relationships</li></ul></div></div>
              <div className="day"><div className="tag">DAY 51</div><div><h3 style={{display:'inline'}}>Backend — Auth & Roles</h3><span className="flag">CAPSTONE</span><ul><li>Role-based access (e.g. admin/customer)</li></ul></div></div>
              <div className="day"><div className="tag">DAY 52–54</div><div><h3 style={{display:'inline'}}>Frontend Build</h3><span className="flag">CAPSTONE</span><ul><li>Dashboard, list, and detail pages in React</li></ul></div></div>
              <div className="day"><div className="tag">DAY 55</div><div><h3 style={{display:'inline'}}>Frontend — Forms</h3><span className="flag">CAPSTONE</span><ul><li>Create/update forms with validation</li></ul></div></div>
              <div className="day"><div className="tag">DAY 56</div><div><h3 style={{display:'inline'}}>Frontend — Filters & Pagination</h3><span className="flag">CAPSTONE</span><ul><li>Search, filters, simple pagination</li></ul></div></div>
              <div className="day"><div className="tag">DAY 57</div><div><h3 style={{display:'inline'}}>Full Integration Pass</h3><span className="flag">CAPSTONE</span><ul><li>Connect every frontend screen to its backend endpoint</li></ul></div></div>
              <div className="day"><div className="tag">DAY 58</div><div><h3 style={{display:'inline'}}>Polish</h3><span className="flag">CAPSTONE</span><ul><li>Styling, error handling, loading states</li></ul></div></div>
              <div className="day"><div className="tag">DAY 59</div><div><h3 style={{display:'inline'}}>Deploy & Debug</h3><span className="flag">CAPSTONE</span><ul><li>Deployment basics overview</li><li>Bug fixing pass</li></ul></div></div>
              <div className="day"><div className="tag">DAY 60</div><div><h3 style={{display:'inline'}}>Final Demo & Wrap-up</h3><span className="flag">CAPSTONE</span><ul><li>Student demos + Q&A</li></ul></div></div>
            </div>
          </details>

          <div className="cut-box" id="advanced">
            <h2>Advanced</h2>
            <ul>
              <li>Computer architecture / 8086 / fetch-decode-execute</li>
              <li>OS internals (kernel, shell theory)</li>
              <li>Compiler vs interpreter deep dive</li>
              <li>Generators, iterators, __iter__/__next__</li>
              <li>Multithreading, multiprocessing, asyncio internals</li>
              <li>Advanced decorator chaining & parameterized decorators</li>
              <li>MRO deep dive</li>
              <li>Python memory management internals</li>
              <li>CLI Banking System as a standalone 10-day project (folded into Module 1–2 builds)</li>
              <li>OTP verification via Gmail SMTP / Fast2SMS</li>
              <li>Admin module (optional, capstone extension only if time allows)</li>
              <li>React.memo / useCallback / useMemo deep dive (mention only if time allows in Capstone)</li>
            </ul>
          </div>

        </main>
      </div>

      <footer>Full-Stack Development · 1.5 hrs/day, 7 days/week</footer>
    </div>
  )
}
