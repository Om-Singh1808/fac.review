import React from 'react';
import './RatingBadge.css';

const RatingBadge = ({ rating, size = 'medium', showLabel = true }) => {
    const getRatingColor = (r) => {
        if (r >= 4.0) return 'var(--color-rating-high)';
        if (r >= 2.5) return 'var(--color-rating-mid)';
        return 'var(--color-rating-low)';
    };

    const color = getRatingColor(rating);

    const sizeClass = size === 'large' ? 'rating-badge-lg' : size === 'small' ? 'rating-badge-sm' : 'rating-badge-md';

    return (
        <div className={`rating-badge ${sizeClass}`} style={{ backgroundColor: color }}>
            <span className="rating-value">{rating.toFixed(1)}</span>
            {showLabel && <span className="rating-max">/ 5</span>}
        </div>
    );
};

export default RatingBadge;
