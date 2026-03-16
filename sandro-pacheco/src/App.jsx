import { Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Tennis from './pages/Tennis';
import Photography from './pages/Photography';
import Contact from './pages/Contact';

function App() {
  const [homeDomain, setHomeDomain] = useState('tennis');
  const location = useLocation();
  const isHome = location.pathname === '/';
  const activeDomain =
    location.pathname === '/tennis'
      ? 'tennis'
      : location.pathname === '/photography'
        ? 'photography'
        : homeDomain;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink text-cream">
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(246,189,96,0.16),_transparent_32%),radial-gradient(circle_at_78%_18%,_rgba(255,255,255,0.08),_transparent_18%),linear-gradient(180deg,_rgba(16,16,20,0.98),_rgba(10,10,12,1))]" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.025)_35%,_transparent_65%)]" />
      </div>

      <div className="relative z-10">
        <Navbar activeDomain={activeDomain} setActiveDomain={setHomeDomain} />
        <main className={isHome ? '' : 'px-4 pb-16 pt-8 md:px-8 md:pb-24'}>
          <Routes>
            <Route path="/" element={<Home activeDomain={activeDomain} setActiveDomain={setHomeDomain} />} />
            <Route path="/about" element={<About />} />
            <Route path="/tennis" element={<Tennis />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
