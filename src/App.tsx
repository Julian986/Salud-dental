import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Results from './pages/Results'
import Contact from './pages/Contact'
import Appointments from './pages/Appointments'
import ScrollToTop from './components/ScrollToTop'

import { Analytics } from '@vercel/analytics/react'
import GoogleAnalytics from './components/GoogleAnalytics'

function App() {
  return (
    <Router>
      <GoogleAnalytics />
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-mi" element={<About />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/resultados" element={<Results />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/turnos" element={<Appointments />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Analytics />
    </Router>
  )
}

export default App
