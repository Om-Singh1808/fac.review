from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import func
from typing import List
from app.db.database import get_db
from app.db import models
from app.schemas import review as review_schema
from app.api.v1.endpoints.auth import get_current_user

router = APIRouter()


@router.post("/", response_model=review_schema.Review)
def create_review(
    review: review_schema.ReviewCreate,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    # Check if professor exists
    professor = db.query(models.Professor).filter(
        models.Professor.id == review.professor_id).first()
    if not professor:
        raise HTTPException(status_code=404, detail="Professor not found")

    # Create review
    db_review = models.Review(**review.dict(), user_id=current_user.id)
    db.add(db_review)
    db.commit()

    # Update professor stats
    reviews = db.query(models.Review).filter(
        models.Review.professor_id == review.professor_id).all()
    professor.total_reviews = len(reviews)
    professor.overall_rating = sum(r.rating for r in reviews) / len(reviews)
    professor.difficulty = sum(r.difficulty for r in reviews) / len(reviews)
    db.commit()

    db.refresh(db_review)
    return db_review


@router.get("/{review_id}", response_model=review_schema.Review)
def get_review(review_id: int, db: Session = Depends(get_db)):
    review = db.query(models.Review).filter(
        models.Review.id == review_id).first()
    if not review:
        raise HTTPException(status_code=404, detail="Review not found")
    return review


@router.put("/{review_id}/vote")
def vote_review(
    review_id: int,
    vote_type: str,  # "like" or "dislike"
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    review = db.query(models.Review).filter(
        models.Review.id == review_id).first()
    if not review:
        raise HTTPException(status_code=404, detail="Review not found")

    if vote_type == "like":
        review.likes += 1
    elif vote_type == "dislike":
        review.dislikes += 1
    else:
        raise HTTPException(status_code=400, detail="Invalid vote type")

    db.commit()
    return {"message": "Vote recorded"}
