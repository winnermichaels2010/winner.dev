import { useEffect } from 'react';
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
  {
    title: 'Growing Full-Stack',
    description: 'Expanding skills into back-end development with Node.js and databases, evolving toward full-stack capabilities.',
  },
];

export default function About() {
  const heroRef = useScrollAnimation();
  const skillsRef = useScrollAnimation();
  const journeyRef = useScrollAnimation();

  useEffect(() => {
    document.title = 'About | winner.dev';
  }, []);

  return (
    <div>
      {/* Hero Intro */}
      <section ref={heroRef} className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-10 left-1/3 w-[300px] h-[300px] bg-teal-500/4 rounded-full blur-[100px]" style={{ animationDelay: '3s' }} />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="animate-on-scroll mb-4">
            <span
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-medium"
              style={{
                backgroundColor: 'rgba(16,185,129,0.08)',
                border: '1px solid rgba(16,185,129,0.15)',
                color: 'var(--c-text-sec)',
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              About Me
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight animate-on-scroll animate-delay-1 max-w-3xl leading-[1.1]">
            Front-end Developer{' '}
            <span className="inline-block bg-gradient-to-r from-accent via-emerald-300 to-teal-400 bg-clip-text text-transparent">
              crafting
            </span>{' '}
            beautiful web experiences.
          </h1>

          <div className="mt-8 max-w-2xl space-y-4 leading-relaxed animate-on-scroll animate-delay-2" style={{ color: 'var(--c-text-sec)' }}>
            <p>
              {"I'm a "}<strong style={{ color: 'var(--c-text)' }}>front-end web developer</strong>{" based in "}
              <strong style={{ color: 'var(--c-text)' }}>Aba, Abia State, Nigeria</strong>. I trained at{' '}
              <strong style={{ color: 'var(--c-text)' }}>Rad5 Tech Hub</strong>, where I developed a strong foundation in building modern web applications.
              {"I work independently as a freelancer, creating real-world projects for clients and continuously pushing my skills forward."}
            </p>
            <p>
              {"I believe great web development is about more than just code — it's about crafting experiences that feel effortless and look beautiful."}
              My focus is on clean interfaces, smooth interactions, and accessible design that works for everyone.
            </p>
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
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px hidden sm:block"
              style={{ background: 'linear-gradient(to bottom, #10b981, var(--c-border))' }} />

            <div className="space-y-6">
              {milestones.map((item, i) => (
                <div key={i} className="relative sm:pl-16 animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
                  {/* Dot */}
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
