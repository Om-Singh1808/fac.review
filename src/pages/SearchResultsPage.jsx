import React from 'react';
import ProfessorCard from '../components/professor/ProfessorCard';
import { mockProfessors } from '../utils/mockData';
import './SearchResultsPage.css';

const SearchResultsPage = () => {
    // Determine the title based on "search" (just a mock Title here)
    const query = "Computer Science"; // This would come from URL query params in real app

    return (
        <div className="search-page container">
            <div className="search-header">
                <h1>Results for "{query}"</h1>
                <span className="result-count">{mockProfessors.length} professors found</span>
            </div>

            <div className="search-layout">
                <div className="filters-sidebar card">
                    <h3>Filters</h3>
                    <div className="filter-group">
                        <label>Department</label>
                        <div className="checkbox-list">
                            <label><input type="checkbox" /> Physics</label>
                            <label><input type="checkbox" /> Computer Science</label>
                            <label><input type="checkbox" /> Economics</label>
                        </div>
                    </div>
                </div>

                <div className="search-results-list">
                    {mockProfessors.map(prof => (
                        <div key={prof.id} className="search-result-item">
                            <ProfessorCard professor={prof} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchResultsPage;
