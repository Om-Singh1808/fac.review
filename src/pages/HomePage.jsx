import { Link } from 'react-router-dom';
import Hero from '../components/layout/Hero';
import ProfessorCard from '../components/professor/ProfessorCard';
import { mockProfessors } from '../utils/mockData';
import './HomePage.css';

const HomePage = () => {
    // Just show top rated professors as featured
    const featuredProfessors = [...mockProfessors].sort((a, b) => b.overallRating - a.overallRating).slice(0, 3);

    return (
        <div className="home-page">
            <Hero />

            <section className="container section-featured">
                <div className="section-header text-center">
                    <h2 className="section-title">Top Rated Professors</h2>
                    <p className="section-subtitle">Based on student feedback this semester</p>
                </div>

                <div className="professors-grid">
                    {featuredProfessors.map(prof => (
                        <ProfessorCard key={prof.id} professor={prof} />
                    ))}
                </div>
            </section>

            <section className="cta-section">
                <div className="container text-center">
                    <h2>Join the Community</h2>
                    <p>Your honest feedback helps thousands of students make better choices.</p>
                    <Link to="/rate/1" className="btn btn-primary mt-lg">Rate a Professor</Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
