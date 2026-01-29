from app.schemas.review import Review
from pydantic import BaseModel
from typing import Optional, List


class ProfessorBase(BaseModel):
    name: str
    department: str
    college: str
    about: Optional[str] = None


class ProfessorCreate(ProfessorBase):
    pass


class Professor(ProfessorBase):
    id: int
    overall_rating: float
    difficulty: float
    total_reviews: int

    class Config:
        from_attributes = True


class ProfessorWithReviews(Professor):
    reviews: List["Review"] = []


# Forward reference resolution
ProfessorWithReviews.model_rebuild()
