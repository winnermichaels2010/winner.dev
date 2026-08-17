import { useEffect } from 'react';
import useScrollAnimation from '../components/useScrollAnimation';
import '../styles/about.css';

const skills = [
  { name: 'HTML / Semantic Markup', level: 95 },
  { name: 'CSS / Tailwind / Responsive Design', level: 92 },
  { name: 'JavaScript (ES6+)', level: 88 },
  { name: 'React & React Router', level: 85 },
  { name: 'Git & Version Control', level: 80 },
  { name: 'REST APIs & Fetch', level: 78 },
];

const timeline = [
  {
    year: '2023',
    title: 'Trained at Rad5 Tech Hub',
    description:
      'Completed intensive front-end web development training covering HTML, CSS, JavaScript, and React.',
  },
  {
    year: '2024',
    title: 'Freelance Developer',
    description:
      'Started building real-world projects independently — client websites, booking platforms, and interactive apps.',
  },
  {
    year: '2025',
    title: 'Growing Full-Stack',
    description:
      'Expanding skills into back-end development with Node.js and databases, evolving toward full-stack capabilities.',
  },
];

export default function About() {
  const sectionRef = useScrollAnimation();

  useEffect(() => {
    document.title = 'About | winner.dev';
  }, []);

  return (
    <div className="page">
      {/* Bio */}
      <section className="about-hero" ref={sectionRef}>
        <div className="container">
          <h1 className="animate-on-scroll">
            About <span className="accent">winner.dev</span>
          </h1>
          <p className="bio animate-on-scroll">
            {"I'm a "}<strong>front-end web developer</strong>{" based in "}
            <strong>Aba, Abia State, Nigeria</strong>{". I trained at "}
            <strong>Rad5 Tech Hub</strong>{", where I developed a strong foundation in building modern web applications. I work independently as a freelancer, creating real-world projects for clients and continuously pushing my skills forward."}
            <br />
            <br />
            {"I believe great web development is about more than just code — it's about crafting experiences that feel effortless and look beautiful. My focus is on clean interfaces, smooth interactions, and accessible design that works for everyone."}
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="section" ref={sectionRef}>
        <div className="container">
          <h2 className="section-title animate-on-scroll">Skills & Tech Stack</h2>
          <p className="section-subtitle animate-on-scroll">
            Technologies I work with daily to build modern web experiences.
          </p>

          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className={`skill-card animate-on-scroll animate-delay-${(i % 4) + 1}`}
              >
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" ref={sectionRef}>
        <div className="container">
          <h2 className="section-title animate-on-scroll">My Journey</h2>
          <p className="section-subtitle animate-on-scroll">
            From curious beginner to independent developer.
          </p>

          <div className="timeline animate-on-scroll">
            {timeline.map((item) => (
              <div key={item.year} className="timeline-item">
                <span className="year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
