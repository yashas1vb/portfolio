import { Mail, ArrowUp, FileText } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import AnimatedHeading from './AnimatedHeading';
import './ContactSection.css';

export default function ContactSection({ contact, personal, onViewResume }) {
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
          {/* Final Large Title */}
          <AnimatedHeading as="h2" className="contact-final-title" text="LET'S CONNECT!" />

          <div className="contact-final-actions reveal delay-1">
            <a href={email} className="contact-mail-btn">
              <Mail size={20} /> Say Hello via Email
            </a>
            <button onClick={onViewResume} className="contact-resume-btn">
              <FileText size={20} /> View My Resume
            </button>
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
            &copy; {currentYear} {personal?.firstName} {personal?.lastName}. All rights reserved. &nbsp;·&nbsp; Contains AI generated content.
          </p>
        </div>
      </div>
    </footer>
  );
}
