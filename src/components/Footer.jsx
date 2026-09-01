import Icon from './Icon';
import { profile, socials } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} {profile.name}. Built with React and Vite.
        </p>
        <ul className="footer__socials">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                aria-label={social.label}
                className="icon-btn"
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <Icon name={social.icon} size={18} />
              </a>
            </li>
          ))}
        </ul>
        <a href="#top" className="footer__top">
          Back to top
        </a>
      </div>
    </footer>
  );
}
