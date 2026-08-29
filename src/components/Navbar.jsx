import './Navbar.css';

export default function Navbar({ navLinks }) {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <nav>
          <ul className="nav-links">
            {navLinks?.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
