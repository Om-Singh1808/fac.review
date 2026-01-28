import React from 'react';
import './RatingDistribution.css';

const RatingDistribution = ({ distribution }) => {
    // distribution = { 5: 10, 4: 5, 3: 2, 2: 1, 1: 0 }
    const total = Object.values(distribution).reduce((a, b) => a + b, 0);

    return (
        <div className="rating-distribution">
            <h4 className="distribution-title">Rating Distribution</h4>
            {[5, 4, 3, 2, 1].map((star) => {
                const count = distribution[star] || 0;
                const percentage = total > 0 ? (count / total) * 100 : 0;

                return (
                    <div key={star} className="dist-row">
                        <span className="dist-label">{star} Star</span>
                        <div className="dist-bar-bg">
                            <div
                                className="dist-bar-fill"
                                style={{ width: `${percentage}%`, backgroundColor: star >= 4 ? 'var(--color-rating-high)' : star >= 3 ? 'var(--color-rating-mid)' : 'var(--color-rating-low)' }}
                            ></div>
                        </div>
                        <span className="dist-count">{count}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default RatingDistribution;
