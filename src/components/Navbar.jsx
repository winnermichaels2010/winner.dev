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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled
          ? 'color-mix(in srgb, var(--c-bg) 85%, transparent)'
          : 'color-mix(in srgb, var(--c-bg) 60%, transparent)',
        backdropFilter: 'blur(20px) saturate(1.2)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.2)',
        boxShadow: scrolled ? '0 1px 0 var(--c-border), 0 4px 24px rgba(0,0,0,0.15)' : 'none',
      }}
    >
      {/* Accent line at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.3), transparent)',
          opacity: scrolled ? 1 : 0,
        }}
      />

      <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="relative group flex items-center gap-0.5 font-mono text-xl font-semibold tracking-tight">
          <span className="relative z-10 transition-colors duration-200 group-hover:text-white">winner</span>
          <span className="text-accent relative z-10">.dev</span>
          <div className="absolute -inset-2 rounded-xl bg-accent/0 group-hover:bg-accent/5 transition-all duration-300" />
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive ? 'text-accent' : 'hover:text-accent'
                }`
              }
              style={({ isActive }) => ({
                backgroundColor: isActive ? 'rgba(16,185,129,0.1)' : 'transparent',
              })}
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-accent rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <div className="ml-3 pl-3" style={{ borderLeft: '1px solid var(--c-border)' }}>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl transition-all duration-300"
            style={{
              backgroundColor: open ? 'rgba(16,185,129,0.1)' : 'var(--c-glow)',
              border: `1px solid ${open ? 'rgba(16,185,129,0.2)' : 'var(--c-border-subtle)'}`,
            }}
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 rounded-full transition-all duration-300 ${open ? 'rotate-45 translate-y-[4px]' : ''}`} style={{ backgroundColor: open ? '#10b981' : 'var(--c-text)' }} />
            <span className={`w-5 h-0.5 rounded-full transition-all duration-300 ${open ? 'opacity-0 scale-0' : ''}`} style={{ backgroundColor: 'var(--c-text)' }} />
            <span className={`w-5 h-0.5 rounded-full transition-all duration-300 ${open ? '-rotate-45 -translate-y-[4px]' : ''}`} style={{ backgroundColor: open ? '#10b981' : 'var(--c-text)' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        style={{
          backgroundColor: 'color-mix(in srgb, var(--c-bg) 96%, transparent)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}
      >
        <div className="px-4 py-3 space-y-1" style={{ borderTop: '1px solid var(--c-border-subtle)' }}>
          {navLinks.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className="block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300"
              style={({ isActive }) => ({
                backgroundColor: isActive ? 'rgba(16,185,129,0.1)' : 'transparent',
                color: isActive ? '#10b981' : 'var(--c-text-sec)',
                transform: open ? 'translateY(0)' : 'translateY(-8px)',
                opacity: open ? 1 : 0,
                transitionDelay: open ? `${i * 50}ms` : '0ms',
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
