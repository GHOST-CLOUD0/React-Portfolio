import Icon from './Icon';

export default function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <article className={`card project-card reveal ${project.featured ? 'is-featured' : ''}`}>
      <div className="project-card__head">
        <h3 className="project-card__title">{project.title}</h3>
        <span className="project-card__year">{project.year}</span>
      </div>

      {project.featured && <span className="badge badge--accent">Featured</span>}

      <p className="project-card__desc">{project.description}</p>

      {project.tags?.length > 0 && (
        <ul className="tag-list">
          {project.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
      )}

      <div className="project-card__links">
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noreferrer" className="link">
            <Icon name="github" size={16} />
            Source
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="link">
            <Icon name="external" size={16} />
            Live demo
          </a>
        )}
      </div>
    </article>
  );
}
