import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectList({ projects, onDelete }) {
    return (
        <div className='container my-4'>
            <div className="row">
                {projects.length > 0 ? (
                    projects.map((project) => (
                        <div key={project.id} className="col-md-6 mb-4">
                        <ProjectCard project={project} 
                        onDelete={onDelete}/>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <p>No projects found.</p>
                    </div>
                )}
            </div>
        </div>
    )

}
