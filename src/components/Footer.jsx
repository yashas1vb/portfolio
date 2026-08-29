import './Footer.css';

export default function Footer({ personal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="footer-text">
          &copy; {currentYear} {personal?.name || 'Portfolio'}. Built with React &amp; Modern Design.
        </p>

        <div className="footer-links">
          <a href="#hero" className="footer-text" style={{ color: 'var(--text-secondary)' }}>
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
