import React from 'react';
import { Search } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="hero-content text-center">
                <h1 className="hero-title">Find Your Next <span className="text-secondary">Great</span> Professor</h1>
                <p className="hero-subtitle">
                    Join India's largest student community. Rate your professors anonymously and help others make better choices.
                </p>

                <div className="hero-search-container">
                    <Search className="hero-search-icon" size={24} />
                    <input
                        type="text"
                        className="hero-search-input"
                        placeholder="Search by professor name, college, or department..."
                    />
                    <button className="btn btn-primary hero-btn">Search</button>
                </div>

                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-number">50k+</span>
                        <span className="stat-label">Professors</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">120k+</span>
                        <span className="stat-label">Reviews</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Colleges</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
