import Icon from './Icon';

export default function SearchBar({ searchTerm = '', onSearch, resultCount }) {
  return (
    <div className="searchbar">
      <label className="searchbar__field">
        <span className="sr-only">Search projects</span>
        <Icon name="search" size={18} className="searchbar__icon" />
        <input
          type="search"
          placeholder="Search projects, tech, keywords…"
          value={searchTerm}
          onChange={(event) => onSearch?.(event.target.value)}
        />
      </label>
      <p className="searchbar__count" role="status" aria-live="polite">
        {resultCount} {resultCount === 1 ? 'project' : 'projects'}
      </p>
    </div>
  );
}
