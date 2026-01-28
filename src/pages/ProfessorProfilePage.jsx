import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Share2, Bookmark } from 'lucide-react';
import RatingBadge from '../components/common/RatingBadge';
import RatingDistribution from '../components/professor/RatingDistribution';
import ReviewCard from '../components/professor/ReviewCard';
import { mockProfessors, mockReviews } from '../utils/mockData';
import './ProfessorProfilePage.css';

const ProfessorProfilePage = () => {
    const { id } = useParams();

    // Find professor and their reviews
    const professor = mockProfessors.find(p => p.id === parseInt(id));
    const reviews = mockReviews.filter(r => r.professorId === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!professor) {
        return <div className="container mt-lg">Professor not found</div>;
    }

    return (
        <div className="profile-page">
            {/* Header Section */}
            <div className="profile-header">
                <div className="container">
                    <div className="header-content">
                        <div className="header-main">
                            <div className="header-rating-large">
                                <RatingBadge rating={professor.overallRating} size="large" />
                                <div className="rating-desc-text">Overall Quality</div>
                            </div>

                            <div className="header-info">
                                <h1 className="prof-name-large">{professor.name}</h1>
                                <div className="prof-dept-college">
                                    <span className="prof-dept">{professor.department}</span>
                                    <span className="separator">•</span>
                                    <span className="prof-college">{professor.college}</span>
                                </div>
                                <p className="prof-about">{professor.about}</p>

                                <div className="header-actions">
                                    <button className="btn btn-primary">Rate Professor</button>
                                    <button className="btn btn-ghost action-icon-btn"><Bookmark size={20} /></button>
                                    <button className="btn btn-ghost action-icon-btn"><Share2 size={20} /></button>
                                </div>
                            </div>
                        </div>

                        <div className="header-stats-card">
                            <div className="stat-row">
                                <span className="stat-val">{professor.difficulty.toFixed(1)}</span>
                                <span className="stat-lbl">Level of Difficulty</span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-val">100%</span>
                                <span className="stat-lbl">Would take again</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container profile-body">
                <div className="body-grid">
                    {/* Left Sidebar / Stats */}
                    <div className="profile-sidebar">
                        <RatingDistribution distribution={professor.ratingDistribution} />

                        <div className="tags-card card">
                            <h4>Popular Tags</h4>
                            <div className="tags-container">
                                {professor.tags.map(tag => (
                                    <span key={tag} className="tag-pill">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Content / Reviews */}
                    <div className="profile-reviews">
                        <div className="reviews-header">
                            <h3>{professor.totalReviews} Student Reviews</h3>
                            <select className="sort-select">
                                <option>Most Recent</option>
                                <option>Highest Rated</option>
                                <option>Lowest Rated</option>
                            </select>
                        </div>

                        <div className="reviews-list">
                            {reviews.length > 0 ? (
                                reviews.map(review => (
                                    <ReviewCard key={review.id} review={review} />
                                ))
                            ) : (
                                <p>No reviews yet. Be the first to rate!</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfessorProfilePage;
