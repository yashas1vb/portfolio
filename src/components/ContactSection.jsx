import { Mail, ArrowUp } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import './ContactSection.css';

export default function ContactSection({ contact, personal }) {
  const email = personal?.socialLinks?.email || 'mailto:supriyavnaregal@gmail.com';
  const linkedin = personal?.socialLinks?.linkedin || 'http://www.linkedin.com/in/supriyanaregal';
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="contact-section-final">
      <div className="container">
        <div className="contact-final-container">
          <h2 className="contact-final-title reveal">LET'S CONNECT!</h2>

          <div className="contact-final-actions reveal delay-1">
            <a href={email} className="contact-mail-btn">
              <Mail size={20} /> Say Hello via Email
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer" className="contact-linkedin-btn">
              <LinkedinIcon size={20} color="#ffffff" /> Connect on LinkedIn
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="contact-back-top-btn reveal delay-2"
          >
            Back to Top <ArrowUp size={16} />
          </button>

          <p className="contact-footer-copy">
            &copy; {currentYear} {personal?.firstName} {personal?.lastName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
