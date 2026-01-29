from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime, JSON, Text
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.db.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    reviews = relationship("Review", back_populates="user")


class Professor(Base):
    __tablename__ = "professors"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False, index=True)
    department = Column(String, nullable=False)
    college = Column(String, nullable=False, index=True)
    about = Column(Text, nullable=True)

    # Computed fields (updated via triggers or application logic)
    overall_rating = Column(Float, default=0.0)
    difficulty = Column(Float, default=0.0)
    total_reviews = Column(Integer, default=0)

    reviews = relationship("Review", back_populates="professor")


class Review(Base):
    __tablename__ = "reviews"

    id = Column(Integer, primary_key=True, index=True)
    professor_id = Column(Integer, ForeignKey("professors.id"), nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    course_code = Column(String, nullable=False)
    rating = Column(Float, nullable=False)
    difficulty = Column(Float, nullable=False)

    attendance = Column(String, nullable=True)
    grade_received = Column(String, nullable=True)

    # JSON fields for structured data
    # {Way of Teaching: 5, Social Nature: 4, ...}
    parameters = Column(JSON, nullable=False)
    tags = Column(JSON, nullable=True)  # ["Inspirational", "Clear Grading"]

    comment = Column(Text, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    likes = Column(Integer, default=0)
    dislikes = Column(Integer, default=0)

    professor = relationship("Professor", back_populates="reviews")
    user = relationship("User", back_populates="reviews")
