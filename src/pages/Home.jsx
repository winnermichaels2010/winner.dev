import { Link } from 'react-router-dom';
import useScrollAnimation from '../components/useScrollAnimation';
import projects from '../data/projects';
import '../styles/home.css';
import '../styles/projects.css';

export default function Home() {
  const sectionRef = useScrollAnimation();

  return (
    <div className="page">
      {/* Hero */}
      <section className="hero" ref={sectionRef}>
        <div className="hero-bg">
          <div className="hero-gradient-orb orb-1" />
          <div className="hero-gradient-orb orb-2" />
          <div className="hero-gradient-orb orb-3" />
          <div className="hero-grid" />
        </div>

        <div className="container hero-content">
          <div className="hero-badge animate-on-scroll">
            <span className="pulse" />
            Available for freelance work
          </div>

          <h1 className="animate-on-scroll">
            Building the web,<br />
            <span className="gradient-text">one pixel at a time.</span>
          </h1>

          <p className="tagline animate-on-scroll">
            {"I'm a front-end web developer who transforms ideas into fast, accessible, and visually striking digital experiences."}
          </p>

          <p className="location animate-on-scroll">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Aba, Abia State, Nigeria
          </p>

          <div className="hero-actions animate-on-scroll">
            <Link to="/projects" className="btn btn-primary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section" ref={sectionRef}>
        <div className="container">
          <div className="about-preview">
            <div className="about-preview-text animate-on-scroll">
              <h2>
                {"Hi, I'm "}
                <span className="accent">winner.dev</span>
              </h2>
              <p>
                {"I'm a front-end web developer trained at "}
                <strong>Rad5 Tech Hub</strong>{", building real-world web applications independently. I specialize in crafting clean interfaces and smooth user experiences using modern web technologies."}
              </p>
              <Link to="/about" className="btn btn-primary btn-sm">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="about-preview-visual animate-on-scroll">
              <div className="about-stat-grid">
                <div className="stat-card">
                  <span className="number">3+</span>
                  <span className="label">Projects Built</span>
                </div>
                <div className="stat-card">
                  <span className="number">5+</span>
                  <span className="label">Technologies</span>
                </div>
                <div className="stat-card">
                  <span className="number">100%</span>
                  <span className="label">Commitment</span>
                </div>
                <div className="stat-card">
                  <span className="number">&infin;</span>
                  <span className="label">Curiosity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section featured-projects" ref={sectionRef}>
        <div className="container">
          <div className="section-header animate-on-scroll">
            <div>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-subtitle">
                {"A selection of recent work I'm proud of."}
              </p>
            </div>
            <Link to="/projects" className="btn btn-secondary btn-sm">
              View All
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="project-cards">
            {projects.slice(0, 3).map((project, i) => (
              <div
                key={project.id}
                className={`project-card animate-on-scroll animate-delay-${i + 1}`}
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
