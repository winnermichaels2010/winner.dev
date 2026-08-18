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
              <a
                key={project.id}
                href={project.demoUrl !== '#' ? project.demoUrl : undefined}
                target={project.demoUrl !== '#' ? '_blank' : undefined}
                rel={project.demoUrl !== '#' ? 'noopener noreferrer' : undefined}
                className={`animate-on-scroll animate-delay-${(i % 4) + 1} group rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 block`}
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

                {/* Live site preview */}
                <div className="relative h-52 overflow-hidden bg-white">
                  {project.demoUrl !== '#' ? (
                    <iframe
                      src={project.demoUrl}
                      title={project.title}
                      className="w-full h-full border-0 pointer-events-none"
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin"
                      style={{ transform: 'scale(0.5)', transformOrigin: 'top left', width: '200%', height: '200%' }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(20,184,166,0.1))' }}>
                      <span className="text-4xl">{project.icon}</span>
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(16,185,129,0.08)', backdropFilter: 'blur(2px)' }}>
                    <span className="px-5 py-2.5 bg-accent rounded-xl text-sm font-semibold shadow-lg" style={{ color: '#0c1210' }}>
                      Visit Site →
                    </span>
                  </div>
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
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
