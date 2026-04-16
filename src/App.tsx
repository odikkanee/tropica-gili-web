import { useEffect } from 'react'
import {
    Route,
    BrowserRouter as Router,
    Routes,
    useLocation,
} from 'react-router-dom'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { scrollToHashTarget } from './lib/utils'
import Coworking from './pages/Coworking'
import Gym from './pages/Gym'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }

    const targetId = location.hash.slice(1)
    const scrollTimer = window.setTimeout(() => {
      scrollToHashTarget(targetId)
    }, 80)

    return () => window.clearTimeout(scrollTimer)
  }, [location.hash, location.pathname])

  return null
}

export default function App() {
  return (
    <Router>
      <ScrollManager />
      <div className="min-h-screen bg-sand-50 text-sand-900 selection:bg-orange-500/20 selection:text-sand-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gym" element={<Gym />} />
            <Route path="/coworking" element={<Coworking />} />
            <Route path="/restaurant" element={<Restaurant />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
