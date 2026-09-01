import Section from './Section';
import { skills } from '../data/portfolio';

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I reach for"
      lead="The stack I use day to day, plus the practices that keep the code maintainable."
    >
      <div className="grid grid--3">
        {skills.map((skill) => (
          <article key={skill.group} className="card skill-card reveal">
            <h3>{skill.group}</h3>
            <ul className="tag-list">
              {skill.items.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
