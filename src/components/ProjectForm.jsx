import React, { useState } from 'react';

export default function ProjectForm ({addProject}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const trimmedTitle = title.trim();
        const trimmedDescription = description.trim();

        if (!trimmedTitle || !trimmedDescription) {
            alert('Title and description are required.');
            return;
        }

        addProject({ 
            title: trimmedTitle, 
            description: trimmedDescription, 
            tags: tags
                .split(',')
                .map((t) => t.trim())
                .filter(Boolean) 
            });

            setTitle('');
            setDescription('');
            setTags('');
        };

    return (
        <div className="container my-4">
            <form onSubmit={handleSubmit} className="card p-3 shadow-sm">
                <div className='mb-3'>
                    <input
                    id='title'
                    type="text"
                    className='form-control'
                    placeholder="Project Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    />
                </div>
                <div className='mb-3'>
                    <textarea
                    id='description'
                    className='form-control'
                    placeholder="Project Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    />
                </div>
                <div className='mb-3'>
                    <input
                    id='tags'
                    className='form-control'
                    type="text"
                    placeholder="Tags (comma separated)"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    />
                </div>  
                <button type="submit" className='btn btn-primary'>Add Project</button>
            </form>
        </div>
    
    );
}
