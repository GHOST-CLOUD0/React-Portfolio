import { useMemo, useState } from 'react';
import Section from './Section';
import SearchBar from './SearchBar';
import ProjectList from './ProjectList';
import { projects as allProjects } from '../data/portfolio';

const ALL = 'All';

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTag, setActiveTag] = useState(ALL);

  const tags = useMemo(
    () => [ALL, ...new Set(allProjects.flatMap((project) => project.tags ?? []))],
    [],
  );

  const filtered = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return allProjects.filter((project) => {
      const matchesTag = activeTag === ALL || project.tags?.includes(activeTag);
      if (!matchesTag) return false;
      if (!query) return true;

      return (
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    });
  }, [searchTerm, activeTag]);

  const reset = () => {
    setSearchTerm('');
    setActiveTag(ALL);
  };

  return (
    <Section
      id="projects"
      eyebrow="Work"
      title="Selected projects"
      lead="Things I've designed, built and shipped. Search or filter by technology."
    >
      <div className="projects__controls reveal">
        <SearchBar
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
          resultCount={filtered.length}
        />
        <ul className="filters" aria-label="Filter projects by technology">
          {tags.map((tag) => (
            <li key={tag}>
              <button
                type="button"
                className={`chip ${activeTag === tag ? 'is-active' : ''}`}
                aria-pressed={activeTag === tag}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <ProjectList projects={filtered} onReset={reset} />
    </Section>
  );
}
