import { useState } from 'react';
import { ExternalLink, Image as ImageIcon } from 'lucide-react';
import { GithubIcon } from './Icons';
import './Projects.css';

function ProjectCard({ project }) {
  const [error, setError] = useState(false);

  return (
    <article className="project-card">
      <div className="project-img-container">
        {!error && project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="project-img"
            onError={() => setError(true)}
          />
        ) : (
          <div className="project-img-fallback">
            <ImageIcon size={36} />
            <span>{project.title} Preview</span>
          </div>
        )}
      </div>

      <div className="project-content">
        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="project-tag">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-links">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="project-link-btn"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="project-link-btn"
            >
              <GithubIcon size={16} /> Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A showcase of recent applications, experiments, and client work.</p>
        </div>

        <div className="projects-grid">
          {projects?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
