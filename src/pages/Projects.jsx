import { useEffect } from 'react';
import useScrollAnimation from '../components/useScrollAnimation';
import projects from '../data/projects';
import '../styles/projects.css';

export default function Projects() {
  const sectionRef = useScrollAnimation();

  useEffect(() => {
    document.title = 'Projects | winner.dev';
  }, []);

  return (
    <div className="page">
      <section className="section" ref={sectionRef}>
        <div className="container">
          <h1 className="section-title animate-on-scroll">Projects</h1>
          <p className="section-subtitle animate-on-scroll">
            {"Every project is a chance to learn something new and solve a real problem. Here's what I've been building."}
          </p>

          <div className="project-cards">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className={`project-card animate-on-scroll animate-delay-${(i % 4) + 1}`}
              >
                <div className="project-card-image">
                  <div className="placeholder-visual">
                    <span style={{ fontSize: '3rem' }}>{project.icon}</span>
                  </div>
                </div>
                <div className="project-card-body">
                  <h3>{project.title}</h3>
                  <p className="description">{project.description}</p>
                  <div className="project-card-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-card-actions">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      View Code
                    </a>
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
