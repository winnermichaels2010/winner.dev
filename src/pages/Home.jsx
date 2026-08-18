import { Link } from 'react-router-dom';
import useScrollAnimation from '../components/useScrollAnimation';

const techStack = [
  { name: 'HTML5', icon: '◆', color: '#fb923c' },
  { name: 'CSS3', icon: '◆', color: '#60a5fa' },
  { name: 'JavaScript', icon: '◆', color: '#facc15' },
  { name: 'React', icon: '◆', color: '#22d3ee' },
  { name: 'Tailwind', icon: '◆', color: '#38bdf8' },
  { name: 'Git', icon: '◆', color: '#f87171' },
];

export default function Home() {
  const heroRef = useScrollAnimation();
  const techRef = useScrollAnimation();
  const aboutRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  return (
    <div>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-emerald-400/5 rounded-full blur-[100px]" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/3 rounded-full blur-[140px]" style={{ animationDelay: '5s' }} />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, var(--c-bg) 75%)' }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="animate-on-scroll mb-8">
            <span
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-medium"
              style={{
                backgroundColor: 'rgba(16,185,129,0.08)',
                border: '1px solid rgba(16,185,129,0.15)',
                color: 'var(--c-text-sec)',
              }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
              </span>
              Available for freelance work
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight animate-on-scroll animate-delay-1 max-w-4xl">
            Building the web,{' '}
            <span className="inline-block bg-gradient-to-r from-accent via-emerald-300 to-teal-400 bg-clip-text text-transparent">
              one pixel
            </span>{' '}
            at a time.
          </h1>

          <p
            className="mt-8 text-lg sm:text-xl max-w-2xl leading-relaxed animate-on-scroll animate-delay-2"
            style={{ color: 'var(--c-text-sec)' }}
          >
            Front-end web developer who transforms ideas into fast, accessible, and visually striking digital experiences. Based in Nigeria.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-on-scroll animate-delay-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-accent rounded-2xl font-semibold text-sm hover:bg-accent-hover hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-accent/20"
              style={{ color: '#0c1210' }}
            >
              View My Work
              <svg className="group-hover:translate-x-0.5 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent rounded-2xl font-semibold text-sm hover:-translate-y-0.5 transition-all duration-200"
              style={{ border: '1.5px solid var(--c-border)', color: 'var(--c-text)' }}
            >
              Get In Touch
            </Link>
          </div>

          <p
            className="mt-12 flex items-center gap-2 text-sm animate-on-scroll animate-delay-4"
            style={{ color: 'var(--c-text-muted)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Aba, Abia State, Nigeria
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section ref={techRef} className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Technologies I <span className="text-accent">Work With</span>
            </h2>
            <p className="mt-3 max-w-lg mx-auto" style={{ color: 'var(--c-text-sec)' }}>
              A focused toolkit for building modern, responsive web applications.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {techStack.map((tech, i) => (
              <div
                key={tech.name}
                className={`animate-on-scroll animate-delay-${(i % 4) + 1} group flex flex-col items-center gap-3 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                style={{
                  backgroundColor: 'var(--c-card)',
                  border: '1px solid var(--c-border)',
                }}
              >
                <div
                  className="text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ color: tech.color }}
                >
                  {tech.icon}
                </div>
                <span className="text-xs font-medium" style={{ color: 'var(--c-text-sec)' }}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section ref={aboutRef} className="py-20 sm:py-28" style={{ borderTop: '1px solid var(--c-border)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                {"Hi, I'm "} <span className="text-accent">winner.dev</span>
              </h2>
              <p className="mt-5 leading-relaxed" style={{ color: 'var(--c-text-sec)' }}>
                Front-end web developer trained at{' '}
                <strong style={{ color: 'var(--c-text)' }}>Rad5 Tech Hub</strong>, building real-world web applications independently.
                I specialize in crafting clean interfaces and smooth user experiences using modern web technologies.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-7 px-6 py-3 bg-accent rounded-2xl font-semibold text-sm hover:bg-accent-hover hover:-translate-y-0.5 transition-all duration-200"
                style={{ color: '#0c1210' }}
              >
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="animate-on-scroll animate-delay-2">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '3+', label: 'Projects Built' },
                  { number: '5+', label: 'Technologies' },
                  { number: '100%', label: 'Commitment' },
                  { number: '∞', label: 'Curiosity' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-6 rounded-2xl text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    style={{
                      backgroundColor: 'var(--c-card)',
                      border: '1px solid var(--c-border)',
                    }}
                  >
                    <span className="block text-3xl font-extrabold text-accent">{stat.number}</span>
                    <span className="text-xs mt-2 block" style={{ color: 'var(--c-text-muted)' }}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="py-20 sm:py-28" style={{ borderTop: '1px solid var(--c-border)' }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="animate-on-scroll max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {"Let's Build Something "}
              <span className="bg-gradient-to-r from-accent via-emerald-300 to-teal-400 bg-clip-text text-transparent">
                Great Together
              </span>
            </h2>
            <p className="mt-5 text-lg" style={{ color: 'var(--c-text-sec)' }}>
              Got a project in mind or just want to chat? {"I'm"} always open to new opportunities and collaborations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 px-8 py-4 bg-accent rounded-2xl font-semibold text-sm hover:bg-accent-hover hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-accent/20"
                style={{ color: '#0c1210' }}
              >
                Start a Conversation
                <svg className="group-hover:translate-x-0.5 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="https://github.com/winnerdev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent rounded-2xl font-semibold text-sm hover:-translate-y-0.5 transition-all duration-200"
                style={{ border: '1.5px solid var(--c-border)', color: 'var(--c-text)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
