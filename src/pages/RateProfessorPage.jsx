import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import { mockProfessors } from '../utils/mockData';
import './RateProfessorPage.css';

const RateProfessorPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const professor = mockProfessors.find(p => p.id === parseInt(id));

    // Form State
    const [formData, setFormData] = useState({
        courseCode: '',
        overallRating: 0,
        difficulty: 3,
        attendance: 'Mandatory',
        gradeReceived: '',
        parameters: {
            'Way of Teaching': 3,
            'Social Nature': 3,
            'Response & Attention': 3,
            'Attitude & Behaviour': 3,
            'Practical Relevance': 3
        },
        tags: [],
        comment: ''
    });

    const [hoverRating, setHoverRating] = useState(0);

    const availableTags = [
        'Inspirational', 'Tough Grader', 'Hilarious', 'Clear Grading',
        'Lecture Heavy', 'Respected', 'Accessible Outside Class', 'Strict Attendance',
        'Get Ready to Read', 'Group Projects', 'Lots of Homework'
    ];

    if (!professor) return <div className="container mt-lg">Professor not found</div>;

    const handleParamChange = (param, value) => {
        setFormData(prev => ({
            ...prev,
            parameters: { ...prev.parameters, [param]: parseInt(value) }
        }));
    };

    const toggleTag = (tag) => {
        setFormData(prev => {
            const newTags = prev.tags.includes(tag)
                ? prev.tags.filter(t => t !== tag)
                : [...prev.tags, tag];
            return { ...prev, tags: newTags };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        console.log('Submitting review:', formData);
        alert('Thank you! Your review has been submitted.');
        navigate(`/professor/${id}`);
    };

    return (
        <div className="rate-page container">
            <div className="rate-header text-center">
                <span className="rate-subtitle">Rate your experience with</span>
                <h1 className="rate-title">{professor.name}</h1>
                <p className="rate-context">{professor.department}, {professor.college}</p>
            </div>

            <form className="rate-form card" onSubmit={handleSubmit}>

                {/* Core Course Info */}
                <div className="form-section">
                    <div className="input-group">
                        <label>Course Code <span className="required">*</span></label>
                        <input
                            type="text"
                            placeholder="e.g. CS101"
                            value={formData.courseCode}
                            onChange={e => setFormData({ ...formData, courseCode: e.target.value })}
                            required
                        />
                    </div>
                </div>

                {/* Overall Rating */}
                <div className="form-section text-center">
                    <label className="section-label">Overall Quality</label>
                    <div className="star-rating-large">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                className={`star-btn ${star <= (hoverRating || formData.overallRating) ? 'active' : ''}`}
                                onMouseEnter={() => setHoverRating(star)}
                                onMouseLeave={() => setHoverRating(0)}
                                onClick={() => setFormData({ ...formData, overallRating: star })}
                            >
                                <Star size={40} fill={star <= (hoverRating || formData.overallRating) ? "currentColor" : "none"} />
                            </button>
                        ))}
                    </div>
                    <p className="rating-helper-text">
                        {formData.overallRating === 5 ? 'Awesome' :
                            formData.overallRating === 4 ? 'Great' :
                                formData.overallRating === 3 ? 'Average' :
                                    formData.overallRating === 2 ? 'Poor' :
                                        formData.overallRating === 1 ? 'Awful' : 'Select a rating'}
                    </p>
                </div>

                {/* Difficulty */}
                <div className="form-section">
                    <label className="section-label">Level of Difficulty (1 = Very Easy, 5 = Very Hard)</label>
                    <div className="slider-container">
                        <input
                            type="range"
                            min="1"
                            max="5"
                            step="1"
                            value={formData.difficulty}
                            onChange={e => setFormData({ ...formData, difficulty: parseInt(e.target.value) })}
                            className="range-slider difficulty-slider"
                        />
                        <div className="slider-labels">
                            <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                        </div>
                        <p className="slider-value-display">Selected: <strong>{formData.difficulty}</strong></p>
                    </div>
                </div>

                {/* Detailed Parameters */}
                <div className="form-section">
                    <h3 className="section-heading">Detailed Parameters</h3>
                    <div className="params-grid">
                        {Object.keys(formData.parameters).map(param => (
                            <div key={param} className="param-input">
                                <label>{param}</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="5"
                                    value={formData.parameters[param]}
                                    onChange={e => handleParamChange(param, e.target.value)}
                                    className="range-slider"
                                />
                                <span className="param-value-badge">{formData.parameters[param]}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tags */}
                <div className="form-section">
                    <label className="section-label">Select Tags (Max 3)</label>
                    <div className="tags-select-container">
                        {availableTags.map(tag => (
                            <button
                                key={tag}
                                type="button"
                                className={`tag-select-btn ${formData.tags.includes(tag) ? 'selected' : ''}`}
                                onClick={() => toggleTag(tag)}
                                disabled={!formData.tags.includes(tag) && formData.tags.length >= 3}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Comment */}
                <div className="form-section">
                    <label className="section-label">Write a Review <span className="required">*</span></label>
                    <textarea
                        rows="5"
                        placeholder="Share your experience..."
                        value={formData.comment}
                        onChange={e => setFormData({ ...formData, comment: e.target.value })}
                        required
                    ></textarea>
                    <p className="form-note">Please be honest and respectful. Reviews are anonymous.</p>
                </div>

                <button type="submit" className="btn btn-primary btn-submit-review" disabled={formData.overallRating === 0}>
                    Submit Review
                </button>

            </form>
        </div>
    );
};

export default RateProfessorPage;
