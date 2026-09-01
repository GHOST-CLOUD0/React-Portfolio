import Section from './Section';
import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've been"
      lead="A short history of the work and the training behind it."
    >
      <ol className="timeline">
        {experience.map((item) => (
          <li key={`${item.org}-${item.period}`} className="timeline__item reveal">
            <div className="timeline__marker" aria-hidden="true" />
            <div className="card timeline__card">
              <div className="timeline__head">
                <h3>{item.role}</h3>
                <span className="badge">{item.period}</span>
              </div>
              <p className="timeline__org">
                {item.org} · {item.location}
              </p>
              <ul className="bullets">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
