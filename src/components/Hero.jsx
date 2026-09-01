import Icon from './Icon';
import { profile, socials, stats } from '../data/portfolio';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="hero__status reveal">
          <span className="dot" aria-hidden="true" />
          {profile.availability}
        </p>

        <h1 className="hero__title reveal">
          {profile.name}
          <span className="hero__role">{profile.role}</span>
        </h1>

        <p className="hero__tagline reveal">{profile.tagline}</p>
        <p className="hero__summary reveal">{profile.summary}</p>

        <div className="hero__actions reveal">
          <a className="btn btn--primary" href="#projects">
            View my work
            <Icon name="arrow" size={18} />
          </a>
          <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
            Get in touch
          </a>
        </div>

        <ul className="hero__socials reveal" aria-label="Social links">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                className="icon-btn"
                aria-label={social.label}
                title={social.label}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <Icon name={social.icon} />
              </a>
            </li>
          ))}
          <li className="hero__location">
            <Icon name="pin" size={16} />
            {profile.location}
          </li>
        </ul>

        <dl className="hero__stats reveal">
          {stats.map((stat) => (
            <div key={stat.label} className="stat">
              <dt className="stat__value">{stat.value}</dt>
              <dd className="stat__label">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
