"""
Seed script to populate the database with initial data
Run this after starting the backend for the first time
"""
from app.db.database import SessionLocal
from app.db.models import Professor, Review, User
from app.core.security import get_password_hash


def seed_database():
    db = SessionLocal()

    try:
        # Check if data already exists
        if db.query(Professor).count() > 0:
            print("Database already seeded!")
            return

        # Create test user
        test_user = User(
            email="test@example.com",
            hashed_password=get_password_hash("password123")
        )
        db.add(test_user)
        db.commit()
        db.refresh(test_user)

        # Create professors (matching frontend mock data)
        professors_data = [
            {
                "name": "Dr. Anjali Sharma",
                "department": "Computer Science",
                "college": "Delhi Technological University",
                "about": "Dr. Sharma specializes in Artificial Intelligence and Machine Learning. She is known for her interactive lectures and support for student research projects.",
                "overall_rating": 4.8,
                "difficulty": 3.2,
                "total_reviews": 0
            },
            {
                "name": "Prof. Rajesh Kumar",
                "department": "Physics",
                "college": "IIT Delhi",
                "about": "Prof. Kumar is a senior faculty member in the Physics department. His classes are rigorously mathematical and he emphasizes theoretical understanding.",
                "overall_rating": 3.5,
                "difficulty": 4.5,
                "total_reviews": 0
            },
            {
                "name": "Dr. Priya Singh",
                "department": "Economics",
                "college": "St. Stephen's College",
                "about": "Dr. Singh brings economics to life with real-world examples. She is very approachable and often helps students with career guidance.",
                "overall_rating": 4.2,
                "difficulty": 2.8,
                "total_reviews": 0
            },
            {
                "name": "Prof. Vikram Malhotra",
                "department": "Mathematics",
                "college": "BITS Pilani",
                "about": "Prof. Malhotra teaches Linear Algebra and Calculus. Students often find his exams challenging and his grading standards very high.",
                "overall_rating": 2.2,
                "difficulty": 4.9,
                "total_reviews": 0
            }
        ]

        professors = []
        for prof_data in professors_data:
            professor = Professor(**prof_data)
            db.add(professor)
            professors.append(professor)

        db.commit()

        # Create sample reviews
        reviews_data = [
            {
                "professor_id": 1,
                "user_id": test_user.id,
                "course_code": "CS101",
                "rating": 5.0,
                "difficulty": 3.0,
                "attendance": "Mandatory",
                "grade_received": "A",
                "parameters": {
                    "Way of Teaching": 5,
                    "Social Nature": 5,
                    "Response & Attention": 5,
                    "Attitude & Behaviour": 5,
                    "Practical Relevance": 5
                },
                "tags": ["Inspirational", "Clear Grading"],
                "comment": "Dr. Sharma is hands down the best professor I have had. She actually cares if you understand the material.",
                "likes": 24,
                "dislikes": 1
            },
            {
                "professor_id": 2,
                "user_id": test_user.id,
                "course_code": "PHY201",
                "rating": 2.0,
                "difficulty": 5.0,
                "attendance": "Mandatory",
                "grade_received": "C",
                "parameters": {
                    "Way of Teaching": 2,
                    "Social Nature": 1,
                    "Response & Attention": 2,
                    "Attitude & Behaviour": 1,
                    "Practical Relevance": 3
                },
                "tags": ["Tough Grader", "Lecture Heavy"],
                "comment": "He knows his stuff but he cannot teach to save his life.",
                "likes": 45,
                "dislikes": 2
            }
        ]

        for review_data in reviews_data:
            review = Review(**review_data)
            db.add(review)

        db.commit()

        # Update professor stats
        for professor in professors:
            reviews = db.query(Review).filter(
                Review.professor_id == professor.id).all()
            if reviews:
                professor.total_reviews = len(reviews)
                professor.overall_rating = sum(
                    r.rating for r in reviews) / len(reviews)
                professor.difficulty = sum(
                    r.difficulty for r in reviews) / len(reviews)

        db.commit()
        print("Database seeded successfully!")

    except Exception as e:
        print(f"Error seeding database: {e}")
        db.rollback()
    finally:
        db.close()


if __name__ == "__main__":
    seed_database()
