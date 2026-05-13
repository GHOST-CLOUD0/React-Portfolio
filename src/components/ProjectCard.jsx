import React from 'react';

export default function ProjectCard({ project, onDelete }) {
    if (!project) {
        return null; 
    }
    return (
        <div className="card mb-3 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p className="card-text">{project.description}</p>
                {project.tags && project.tags.length > 0 && (
                    <div className="mb-2">
                        {project.tags.map((tag, index) => (
                            <span key={index} className="badge bg-secondary me-1">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <button
                    type='button'
                    className="btn btn-danger"
                    onClick={() => onDelete(project.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
