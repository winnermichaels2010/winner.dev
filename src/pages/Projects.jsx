import { useEffect } from 'react';
import useScrollAnimation from '../components/useScrollAnimation';
import projects from '../data/projects';

export default function Projects() {
  const sectionRef = useScrollAnimation();

  useEffect(() => {
    document.title = 'Projects | winner.dev';
  }, []);

  return (
    <div className="pt-[72px]">
      <section ref={sectionRef} className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight animate-on-scroll">Projects</h1>
          <p className="mt-3 max-w-xl animate-on-scroll animate-delay-1" style={{ color: 'var(--c-text-sec)' }}>
            {"Every project is a chance to learn something new and solve a real problem. Here's what I've been building."}
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className={`animate-on-scroll animate-delay-${(i % 4) + 1} group rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300`}
                style={{ border: '1px solid var(--c-border)', backgroundColor: 'var(--c-card)' }}
              >
                {/* Browser header */}
                <div style={{ borderBottom: '1px solid var(--c-border)' }}>
                  <div className="flex items-center gap-2 px-4 py-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                    </div>
                    <div className="flex-1 mx-2">
                      <div className="rounded-md px-3 py-1 text-xs font-mono truncate"
                        style={{ backgroundColor: 'var(--c-input-bg)', color: 'var(--c-text-muted)' }}>
                        {project.demoUrl !== '#' ? project.demoUrl.replace('https://', '') : 'localhost'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Preview area */}
                <div className="h-44 flex items-center justify-center relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, rgba(16,185,129,0.1), rgba(20,184,166,0.1))` }}>
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }} />
                  <span className="relative z-10 text-4xl">{project.icon}</span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-accent" style={{ color: 'var(--c-text)' }}>
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed line-clamp-3" style={{ color: 'var(--c-text-sec)' }}>
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-medium text-accent"
                        style={{ backgroundColor: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.15)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex gap-3">
                    {project.demoUrl !== '#' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent rounded-lg text-xs font-semibold hover:bg-accent-hover transition-all duration-200"
                        style={{ color: '#0c1210' }}
                      >
                        Live Demo
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    )}
                    {project.codeUrl !== '#' && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200"
                        style={{ border: '1px solid var(--c-border)', color: 'var(--c-text-sec)' }}
                      >
                        View Code
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="16 18 22 12 16 6" />
                          <polyline points="8 6 2 12 8 18" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
