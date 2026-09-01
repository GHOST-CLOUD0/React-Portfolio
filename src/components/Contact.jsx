import { useState } from 'react';
import Section from './Section';
import Icon from './Icon';
import { profile, socials } from '../data/portfolio';

const EMPTY = { name: '', email: '', message: '' };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please tell me your name.';
  if (!values.email.trim()) errors.email = 'An email address is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = 'That email address does not look right.';
  if (values.message.trim().length < 20)
    errors.message = 'A little more detail helps — 20 characters minimum.';
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (field) => (event) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // No backend: hand off to the visitor's mail client with the message prefilled.
    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name.trim()}`);
    const body = encodeURIComponent(`${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setSent(true);
    setValues(EMPTY);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something"
      lead="Have a role, a project or a question? Send a note and I'll reply within a day or two."
    >
      <div className="contact">
        <form className="card contact__form reveal" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              type="text"
              value={values.name}
              onChange={update('name')}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
              autoComplete="name"
            />
            {errors.name && (
              <p className="field__error" id="contact-name-error">
                {errors.name}
              </p>
            )}
          </div>

          <div className="field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              value={values.email}
              onChange={update('email')}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
              autoComplete="email"
            />
            {errors.email && (
              <p className="field__error" id="contact-email-error">
                {errors.email}
              </p>
            )}
          </div>

          <div className="field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              rows="5"
              value={values.message}
              onChange={update('message')}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
            />
            {errors.message && (
              <p className="field__error" id="contact-message-error">
                {errors.message}
              </p>
            )}
          </div>

          <button type="submit" className="btn btn--primary">
            Send message
            <Icon name="arrow" size={18} />
          </button>

          <p className="field__note" role="status" aria-live="polite">
            {sent
              ? 'Thanks — your mail client should be opening now.'
              : 'Opens in your email client. Nothing is stored on this site.'}
          </p>
        </form>

        <aside className="contact__aside reveal">
          <h3>Other ways to reach me</h3>
          <ul className="contact__links">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  <Icon name={social.icon} size={18} />
                  <span>{social.label}</span>
                  <Icon name="arrow" size={16} className="contact__arrow" />
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
