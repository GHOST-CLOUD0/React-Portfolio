import { useState, useEffect} from 'react'
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import SearchBar from './components/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const defaultProjects = [
  { id: 1, title: "Project One", description: "This is the first project.", tags: ["React", "JavaScript"] },
  { id: 2, title: "Project Two", description: "This is the second project.", tags: ["Node.js", "Testing"] },
  ];


export default function App() {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('projects');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        localStorage.removeItem('projects');
        return defaultProjects;
      }
    }
    return defaultProjects;
  });
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const addProject = (project) => {
    const newId = projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1;
    setProjects((currentProjects) => [...currentProjects, { id: newId, ...project }]);
  };

  const deleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tags?.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  return (
    <div className='App'>
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProjectList projects={filteredProjects} onDelete={deleteProject} />
      <ProjectForm addProject={addProject} />
    </div>
  )
}

