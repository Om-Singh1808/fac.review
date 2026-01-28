import React from 'react';
import { Link } from 'react-router-dom';
import { Star, School } from 'lucide-react';
import './ProfessorCard.css';

const ProfessorCard = ({ professor }) => {
    const { id, name, department, college, overallRating, difficulty, totalReviews } = professor;

    // Determine card border/accent color based on rating
    const getRatingColor = (rating) => {
        if (rating >= 4.0) return 'var(--color-rating-high)';
        if (rating >= 2.5) return 'var(--color-rating-mid)';
        return 'var(--color-rating-low)';
    };

    const ratingColor = getRatingColor(overallRating);

    return (
        <Link to={`/professor/${id}`} className="professor-card">
            <div className="professor-card-header">
                <div className="rating-box" style={{ backgroundColor: ratingColor }}>
                    <span className="rating-score">{overallRating.toFixed(1)}</span>
                    <span className="rating-label">/ 5.0</span>
                </div>
                <div className="professor-info">
                    <h3 className="professor-name">{name}</h3>
                    <p className="department">{department}</p>
                </div>
            </div>

            <div className="professor-meta">
                <p className="college">
                    <School size={16} style={{ marginRight: '6px' }} />
                    {college}
                </p>
                <div className="meta-stats">
                    <span className="meta-item">
                        <strong>{difficulty.toFixed(1)}</strong> Difficulty
                    </span>
                    <span className="meta-item">
                        <strong>{totalReviews}</strong> Reviews
                    </span>
                </div>
            </div>

            <div className="view-profile-btn">
                View Profile
            </div>
        </Link>
    );
};

export default ProfessorCard;
