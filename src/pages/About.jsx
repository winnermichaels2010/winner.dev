import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../components/useScrollAnimation';

const skills = [
  { name: 'HTML / Semantic Markup', level: 95, color: 'linear-gradient(90deg, #fb923c, #f97316)' },
  { name: 'CSS / Tailwind / Responsive Design', level: 92, color: 'linear-gradient(90deg, #60a5fa, #3b82f6)' },
  { name: 'JavaScript (ES6+)', level: 88, color: 'linear-gradient(90deg, #facc15, #eab308)' },
  { name: 'React & React Router', level: 85, color: 'linear-gradient(90deg, #22d3ee, #06b6d4)' },
  { name: 'Git & Version Control', level: 80, color: 'linear-gradient(90deg, #f87171, #ef4444)' },
  { name: 'REST APIs & Fetch', level: 78, color: 'linear-gradient(90deg, #4ade80, #22c55e)' },
];

const milestones = [
  {
    title: 'Trained at Rad5 Tech Hub',
    description: 'Completed intensive front-end web development training covering HTML, CSS, JavaScript, and React.',
  },
  {
    title: 'Freelance Developer',
    description: 'Started building real-world projects independently — client websites, booking platforms, and interactive apps.',
  },
];

const whatIDo = [
  {
    title: 'Web Development',
    description: 'Building fast, responsive, and accessible websites using modern frameworks and best practices.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'UI/UX Design',
    description: 'Crafting clean, intuitive interfaces that feel natural and look beautiful across all devices.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    title: 'Performance',
    description: 'Optimizing load times, Core Web Vitals, and user experience for speed that matters.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: 'Responsive Design',
    description: 'Ensuring seamless experiences on phones, tablets, and desktops with fluid layouts.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

export default function About() {
  const heroRef = useScrollAnimation();
  const whatRef = useScrollAnimation();
  const skillsRef = useScrollAnimation();
  const journeyRef = useScrollAnimation();

  useEffect(() => {
    document.title = 'About | winner.dev';
  }, []);

  return (
    <div>
      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-10 left-1/3 w-[300px] h-[300px] bg-teal-500/4 rounded-full blur-[100px]" style={{ animationDelay: '3s' }} />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left: Text */}
            <div className="lg:col-span-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight animate-on-scroll leading-[1.1]">
                {"Hi, I'm"}{' '}
                <span className="bg-gradient-to-r from-accent via-emerald-300 to-teal-400 bg-clip-text text-transparent">
                  Michael Winner
                </span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed animate-on-scroll animate-delay-1" style={{ color: 'var(--c-text-sec)' }}>
                A front-end web developer based in{' '}
                <strong style={{ color: 'var(--c-text)' }}>Aba, Abia State, Nigeria</strong>. I trained at{' '}
                <strong style={{ color: 'var(--c-text)' }}>Rad5 Tech Hub</strong>, where I built a strong foundation in modern web development.
              </p>

              <p className="mt-4 leading-relaxed animate-on-scroll animate-delay-2" style={{ color: 'var(--c-text-sec)' }}>
                I work independently as a freelancer, creating real-world projects for clients and continuously pushing my skills forward.
                I believe great web development is about crafting experiences that feel effortless and look beautiful.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 animate-on-scroll animate-delay-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-accent rounded-2xl font-semibold text-sm hover:bg-accent-hover hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-accent/20"
                  style={{ color: '#0c1210' }}
                >
                  Get In Touch
                  <svg className="group-hover:translate-x-0.5 transition-transform" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm hover:-translate-y-0.5 transition-all duration-200"
                  style={{ border: '1.5px solid var(--c-border)', color: 'var(--c-text)' }}
                >
                  View Projects
                </Link>
              </div>
            </div>

            {/* Right: Stats card */}
            <div className="lg:col-span-2 animate-on-scroll animate-delay-2">
              <div className="p-8 rounded-3xl" style={{ backgroundColor: 'var(--c-card)', border: '1px solid var(--c-border)' }}>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: '10+', label: 'Projects Built' },
                    { number: '5+', label: 'Technologies' },
                    { number: '100%', label: 'Commitment' },
                    { number: '∞', label: 'Curiosity' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <span className="block text-3xl font-extrabold text-accent">{stat.number}</span>
                      <span className="text-xs mt-1 block" style={{ color: 'var(--c-text-muted)' }}>{stat.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--c-border)' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                    <span className="text-sm" style={{ color: 'var(--c-text-sec)' }}>Available for freelance work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section ref={whatRef} className="py-20 sm:py-28" style={{ borderTop: '1px solid var(--c-border)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              What I <span className="text-accent">Do</span>
            </h2>
            <p className="mt-3 max-w-lg mx-auto" style={{ color: 'var(--c-text-sec)' }}>
              Services and skills I bring to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whatIDo.map((item, i) => (
              <div
                key={item.title}
                className={`animate-on-scroll animate-delay-${(i % 4) + 1} p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group`}
                style={{ backgroundColor: 'var(--c-card)', border: '1px solid var(--c-border)' }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-accent/15"
                  style={{ backgroundColor: 'rgba(16,185,129,0.08)', color: '#10b981' }}>
                  {item.icon}
                </div>
                <h3 className="font-semibold" style={{ color: 'var(--c-text)' }}>{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--c-text-sec)' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section ref={skillsRef} className="py-20 sm:py-28" style={{ borderTop: '1px solid var(--c-border)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Skills & <span className="text-accent">Tech Stack</span>
            </h2>
            <p className="mt-3 max-w-lg mx-auto" style={{ color: 'var(--c-text-sec)' }}>
              Technologies I work with daily to build modern web experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className={`animate-on-scroll animate-delay-${(i % 4) + 1} p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5`}
                style={{ backgroundColor: 'var(--c-card)', border: '1px solid var(--c-border)' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium" style={{ color: 'var(--c-text)' }}>{skill.name}</span>
                  <span className="text-xs font-mono font-bold text-accent">{skill.level}%</span>
                </div>
                <div className="h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--c-input-bg)' }}>
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%`, background: skill.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section ref={journeyRef} className="py-20 sm:py-28" style={{ borderTop: '1px solid var(--c-border)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              My <span className="text-accent">Journey</span>
            </h2>
            <p className="mt-3 max-w-lg mx-auto" style={{ color: 'var(--c-text-sec)' }}>
              From curious beginner to independent developer.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px hidden sm:block"
              style={{ background: 'linear-gradient(to bottom, #10b981, var(--c-border))' }} />

            <div className="space-y-6">
              {milestones.map((item, i) => (
                <div key={i} className="relative sm:pl-16 animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="absolute left-4 top-6 w-4 h-4 bg-accent rounded-full hidden sm:block"
                    style={{ border: '4px solid var(--c-bg)' }} />

                  <div
                    className="p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    style={{ backgroundColor: 'var(--c-card)', border: '1px solid var(--c-border)' }}
                  >
                    <h3 className="text-lg font-semibold" style={{ color: 'var(--c-text)' }}>{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--c-text-sec)' }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
