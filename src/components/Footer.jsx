import { Link } from 'react-router-dom';

const contactInfo = {
  email: 'winnermichael2010@gmail.com',
  github: 'https://github.com/winnermichaels2010',
  twitter: 'https://x.com/winnerMich72654',
  phone: '09168103341',
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: '1px solid var(--c-border)', backgroundColor: 'var(--c-bg-alt)' }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="font-mono text-xl font-medium tracking-tight">
              winner<span className="text-accent">.dev</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed max-w-xs" style={{ color: 'var(--c-text-sec)' }}>
              Front-end web developer crafting fast, modern, and accessible web experiences. Based in Aba, Nigeria.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--c-text)' }}>Navigation</h4>
            <div className="flex flex-col gap-2 mt-4">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/projects', label: 'Projects' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm transition-colors hover:text-accent" style={{ color: 'var(--c-text-sec)' }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--c-text)' }}>Connect</h4>
            <div className="flex flex-col gap-2 mt-4">
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:text-accent" style={{ color: 'var(--c-text-sec)' }}>GitHub</a>
              <a href={contactInfo.twitter} target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:text-accent" style={{ color: 'var(--c-text-sec)' }}>Twitter / X</a>
              <a href={`mailto:${contactInfo.email}`} className="text-sm transition-colors hover:text-accent" style={{ color: 'var(--c-text-sec)' }}>Email</a>
              <a href={`tel:${contactInfo.phone}`} className="text-sm transition-colors hover:text-accent" style={{ color: 'var(--c-text-sec)' }}>Phone</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid var(--c-border)' }}>
          <p className="text-xs" style={{ color: 'var(--c-text-muted)' }}>
            &copy; {year} winner.dev. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {[
              { href: contactInfo.github, label: 'GitHub', icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /> },
              { href: contactInfo.twitter, label: 'Twitter', icon: <><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></> },
              { href: `mailto:${contactInfo.email}`, label: 'Email', icon: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 4L12 13 2 4" /></> },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={item.label}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:text-accent"
                style={{
                  backgroundColor: 'var(--c-glow)',
                  border: '1px solid var(--c-border-subtle)',
                  color: 'var(--c-text-sec)',
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  {item.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
