from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import func
from typing import List
from app.db.database import get_db
from app.db import models
from app.schemas import professor as professor_schema

router = APIRouter()


@router.get("/", response_model=List[professor_schema.Professor])
def get_professors(
    skip: int = 0,
    limit: int = 100,
    college: str = None,
    department: str = None,
    db: Session = Depends(get_db)
):
    query = db.query(models.Professor)

    if college:
        query = query.filter(models.Professor.college.contains(college))
    if department:
        query = query.filter(models.Professor.department.contains(department))

    professors = query.offset(skip).limit(limit).all()
    return professors


@router.get("/{professor_id}", response_model=professor_schema.ProfessorWithReviews)
def get_professor(professor_id: int, db: Session = Depends(get_db)):
    professor = db.query(models.Professor).filter(
        models.Professor.id == professor_id).first()
    if not professor:
        raise HTTPException(status_code=404, detail="Professor not found")
    return professor


@router.post("/", response_model=professor_schema.Professor)
def create_professor(professor: professor_schema.ProfessorCreate, db: Session = Depends(get_db)):
    db_professor = models.Professor(**professor.dict())
    db.add(db_professor)
    db.commit()
    db.refresh(db_professor)
    return db_professor


@router.get("/{professor_id}/reviews", response_model=List)
def get_professor_reviews(professor_id: int, db: Session = Depends(get_db)):
    professor = db.query(models.Professor).filter(
        models.Professor.id == professor_id).first()
    if not professor:
        raise HTTPException(status_code=404, detail="Professor not found")
    return professor.reviews
