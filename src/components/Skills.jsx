import { Code2, FileCode, Layout, Server, Terminal, Palette, GitBranch, Database } from 'lucide-react';
import './Skills.css';

const iconMap = {
  Code2: <Code2 size={20} color="var(--accent-cyan)" />,
  FileCode: <FileCode size={20} color="var(--accent-primary)" />,
  Layout: <Layout size={20} color="#38bdf8" />,
  Server: <Server size={20} color="#34d399" />,
  Terminal: <Terminal size={20} color="#f59e0b" />,
  Palette: <Palette size={20} color="var(--accent-secondary)" />,
  GitBranch: <GitBranch size={20} color="#f43f5e" />,
  Database: <Database size={20} color="#818cf8" />,
};

export default function Skills({ skills }) {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Core technologies and tools I work with daily.</p>
        </div>

        <div className="skills-grid">
          {skills?.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {iconMap[skill.icon] || <Code2 size={20} />}
                  <span className="skill-name">{skill.name}</span>
                </div>
                <span className="skill-category">{skill.category}</span>
              </div>
              <div className="skill-progress-bar">
                <div
                  className="skill-progress-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
