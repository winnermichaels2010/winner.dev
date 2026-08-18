import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b"
      style={{
        backgroundColor: scrolled
          ? 'color-mix(in srgb, var(--c-bg) 95%, transparent)'
          : 'color-mix(in srgb, var(--c-bg) 80%, transparent)',
        borderColor: scrolled ? 'var(--c-border)' : 'transparent',
        backdropFilter: 'blur(16px)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <NavLink to="/" className="font-mono text-xl font-medium tracking-tight hover:opacity-80 transition-opacity">
          winner<span className="text-accent">.dev</span>
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-accent'
                    : 'hover:opacity-80'
                }`
              }
              style={({ isActive }) => ({
                backgroundColor: isActive ? 'rgba(16,185,129,0.1)' : 'transparent',
                color: isActive ? '#10b981' : 'var(--c-text-sec)',
              })}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl"
            style={{ backgroundColor: 'var(--c-glow)', border: '1px solid var(--c-border-subtle)' }}
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 rounded-full transition-all duration-300 ${open ? 'rotate-45 translate-y-[4px]' : ''}`} style={{ backgroundColor: 'var(--c-text)' }} />
            <span className={`w-5 h-0.5 rounded-full transition-all duration-300 ${open ? 'opacity-0' : ''}`} style={{ backgroundColor: 'var(--c-text)' }} />
            <span className={`w-5 h-0.5 rounded-full transition-all duration-300 ${open ? '-rotate-45 -translate-y-[4px]' : ''}`} style={{ backgroundColor: 'var(--c-text)' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
        style={{
          backgroundColor: 'color-mix(in srgb, var(--c-bg) 98%, transparent)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className="px-6 py-4 space-y-1" style={{ borderTop: '1px solid var(--c-border-subtle)' }}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className="block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
              style={({ isActive }) => ({
                backgroundColor: isActive ? 'rgba(16,185,129,0.1)' : 'transparent',
                color: isActive ? '#10b981' : 'var(--c-text-sec)',
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
