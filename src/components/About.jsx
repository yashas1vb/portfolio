import './About.css';

export default function About({ personal }) {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">About Me</span>
          <h2 className="section-title">Background & Experience</h2>
          <p className="section-subtitle">A quick glimpse into my journey, passion, and engineering philosophy.</p>
        </div>

        <div className="about-grid">
          <div className="glass-card about-card">
            <h3>Who I Am</h3>
            <p>
              {personal?.bio}
            </p>
            <div className="about-highlight-box">
              <p style={{ color: '#c7d2fe', fontWeight: 500 }}>
                💡 Passionate about building fast, responsive, and aesthetically stunning digital applications.
              </p>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Completed Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Dedication to Quality</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Problem Solver</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
