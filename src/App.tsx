import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AnimationsPage from './pages/AnimationsPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/animations" element={<AnimationsPage />} />
      </Routes>
    </Router>
  )
}
