import Section from './Section';
import Icon from './Icon';
import { profile } from '../data/portfolio';

const values = [
  {
    title: 'Ship small, ship often',
    body: 'Break work into slices that can be reviewed, tested and deployed in a day rather than a quarter.',
  },
  {
    title: 'Accessible by default',
    body: 'Semantic markup, keyboard paths and visible focus states are part of the definition of done — not a follow-up ticket.',
  },
  {
    title: 'Measure, then optimise',
    body: 'Profile before refactoring. A bundle budget and a real device beat a hunch every time.',
  },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Developer with a bias for shipping"
      lead={profile.summary}
    >
      <div className="about">
        <div className="about__card card reveal">
          <h3>How I work</h3>
          <ul className="checklist">
            {values.map((value) => (
              <li key={value.title}>
                <Icon name="check" size={18} />
                <div>
                  <strong>{value.title}</strong>
                  <p>{value.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <aside className="about__aside card reveal">
          <h3>At a glance</h3>
          <dl className="facts">
            <div>
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>React &amp; Node.js</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{profile.availability}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </Section>
  );
}
