from pydantic import BaseModel
from typing import Optional, List, Dict
from datetime import datetime


class ReviewBase(BaseModel):
    course_code: str
    rating: float
    difficulty: float
    attendance: Optional[str] = None
    grade_received: Optional[str] = None
    parameters: Dict[str, float]  # {"Way of Teaching": 5, ...}
    tags: Optional[List[str]] = []
    comment: str


class ReviewCreate(ReviewBase):
    professor_id: int


class Review(ReviewBase):
    id: int
    professor_id: int
    user_id: int
    created_at: datetime
    likes: int
    dislikes: int

    class Config:
        from_attributes = True
