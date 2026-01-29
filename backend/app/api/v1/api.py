from fastapi import APIRouter
from app.api.v1.endpoints import auth, professors, reviews

api_router = APIRouter()

api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(
    professors.router, prefix="/professors", tags=["professors"])
api_router.include_router(reviews.router, prefix="/reviews", tags=["reviews"])
