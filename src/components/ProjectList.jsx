import ProjectCard from './ProjectCard';

export default function ProjectList({ projects = [], onReset }) {
  if (projects.length === 0) {
    return (
      <div className="empty card">
        <h3>No matching projects</h3>
        <p>Try a different keyword or clear the filters to see everything.</p>
        <button type="button" className="btn btn--ghost btn--sm" onClick={onReset}>
          Clear filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid--2">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
