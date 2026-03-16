import { motion } from 'framer-motion';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

const MotionSpan = motion.span;

const domainOptions = [
  { id: 'tennis', label: 'Tennis', caption: 'Coach / Player', route: '/tennis' },
  { id: 'photography', label: 'Photography', caption: 'Sports / Storytelling', route: '/photography' },
];

const pageLinks = [
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar({ activeDomain, setActiveDomain }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const showDomainToggle =
    location.pathname === '/' || location.pathname === '/tennis' || location.pathname === '/photography';

  const handleDomainChange = (option) => {
    setActiveDomain(option.id);

    if (!isHome || location.pathname === '/tennis' || location.pathname === '/photography') {
      navigate(option.route);
    }
  };

  return (
    <header className="sticky top-0 z-50 px-4 py-4 md:px-8">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 rounded-full border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-2xl md:px-6">
        <Link to="/" className="flex items-center gap-3 text-cream">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.15] bg-white/[0.08] font-serif text-lg italic">
            S
          </span>
          <div>
            <p className="font-sans text-[0.65rem] uppercase tracking-[0.35em] text-sand/70">
              Sandro Pacheco
            </p>
            <p className="font-serif text-lg leading-none">Athlete and image-maker</p>
          </div>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          {pageLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav-link ${isActive ? 'text-cream' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {showDomainToggle ? (
          <div className="relative flex rounded-full border border-white/10 bg-black/20 p-1">
            {domainOptions.map((option) => {
              const isActive = option.id === activeDomain;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleDomainChange(option)}
                  className={`relative z-10 min-w-[132px] cursor-pointer rounded-full px-4 py-2 text-left transition-colors duration-300 ${
                    isActive ? 'text-ink' : 'text-cream/80'
                  }`}
                >
                  {isActive ? (
                    <MotionSpan
                      layoutId="domain-pill"
                      className="absolute inset-0 rounded-full bg-sand"
                      transition={{ type: 'spring', stiffness: 340, damping: 28 }}
                    />
                  ) : null}
                  <span className="relative block font-sans text-[0.65rem] uppercase tracking-[0.28em]">
                    {option.label}
                  </span>
                  <span className="relative block font-serif text-sm">{option.caption}</span>
                </button>
              );
            })}
          </div>
        ) : null}
      </div>
    </header>
  );
}
