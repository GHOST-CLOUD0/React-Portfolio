import React from 'react';

export default function SearchBar ({ searchTerm, setSearchTerm }) {
    return (
        <div className="container my-3">
            <input 
                className="form-control" 
                type="text" 
                placeholder="Search projects..." 
                value={searchTerm ?? ``}
                onChange={(e) => setSearchTerm?.(e.target.value)}
                aria-label='Search projects'
            />
        </div>
    );
};
