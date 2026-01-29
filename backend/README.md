# Professor Rating Platform - Backend

FastAPI backend for the professor rating platform.

## Setup

1. **Create a virtual environment** (recommended):
```bash
python -m venv venv
# Windows
venv\Scripts\activate
# Linux/Mac
source venv/bin/activate
```

2. **Install dependencies**:
```bash
pip install -r requirements.txt
```

3. **Configure environment**:
- Copy `.env` and update `SECRET_KEY` for production
- Default database is SQLite (development)

4. **Run the server**:
```bash
uvicorn app.main:app --reload --port 8000
```

5. **Seed the database** (optional):
```bash
python seed_db.py
```

## API Documentation

Once running, visit:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login (returns JWT token)
- `GET /api/v1/auth/me` - Get current user

### Professors
- `GET /api/v1/professors` - List all professors
- `GET /api/v1/professors/{id}` - Get professor details
- `POST /api/v1/professors` - Create professor
- `GET /api/v1/professors/{id}/reviews` - Get professor reviews

### Reviews
- `POST /api/v1/reviews` - Submit review (requires auth)
- `GET /api/v1/reviews/{id}` - Get review details
- `PUT /api/v1/reviews/{id}/vote` - Vote on review

## Database

SQLite database file: `fac_review.db` (auto-created on first run)

## CORS

Configured to allow requests from: `http://localhost:5173` (frontend)
