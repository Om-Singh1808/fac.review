import React from 'react';
import { ThumbsUp, ThumbsDown, MessageSquare } from 'lucide-react';
import RatingBadge from '../common/RatingBadge';
import './ReviewCard.css';

const ReviewCard = ({ review }) => {
    const {
        id,
        courseCode,
        rating,
        difficulty,
        attendance,
        gradeReceived,
        tags,
        comment,
        date,
        likes,
        dislikes,
        parameters // Object containing individual ratings
    } = review;

    return (
        <div className="review-card">
            <div className="review-header">
                <div className="review-course">
                    <span className="course-code">{courseCode}</span>
                    <span className="review-date">{date}</span>
                </div>
                <div className="review-badges">
                    {/* Keep it simple for header, just overall quality */}
                    <div className="rating-pair">
                        <span className="label">Quality</span>
                        <RatingBadge rating={rating} size="small" showLabel={false} />
                    </div>
                    <div className="rating-pair">
                        <span className="label">Difficulty</span>
                        <span className="difficulty-score">{difficulty.toFixed(1)}</span>
                    </div>
                </div>
            </div>

            <div className="review-body">
                <p className="review-text">{comment}</p>

                {tags && tags.length > 0 && (
                    <div className="review-tags">
                        {tags.map((tag, idx) => (
                            <span key={idx} className="tag">{tag}</span>
                        ))}
                    </div>
                )}

                <div className="review-meta-grid">
                    {attendance && <div className="meta-item"><span>Attendance:</span> {attendance}</div>}
                    {gradeReceived && <div className="meta-item"><span>Grade:</span> {gradeReceived}</div>}
                </div>

                {/* Display specific parameter ratings if available and detailed view is desired 
            For now, we just show the text and tags as per typical RMP style, 
            but the prompt asks for specific parameters to be visible. 
            We can add a small breakdown section. */}

                {parameters && (
                    <div className="parameter-breakdown">
                        {Object.entries(parameters).map(([key, value]) => (
                            <div key={key} className="param-item">
                                <span className="param-name">{key}</span>
                                <div className="param-bar-bg">
                                    <div className="param-bar-fill" style={{ width: `${(value / 5) * 100}%` }}></div>
                                </div>
                                <span className="param-val">{value}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="review-footer">
                <div className="review-actions">
                    <button className="action-btn"><ThumbsUp size={16} /> {likes}</button>
                    <button className="action-btn"><ThumbsDown size={16} /> {likes}</button>
                </div>
                <button className="report-btn">Report</button>
            </div>
        </div>
    );
};

export default ReviewCard;
