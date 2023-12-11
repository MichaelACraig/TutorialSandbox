from typing import List
from uuid import uuid4
from fastapi import FastAPI

from models import User, Gender, Role

app = FastAPI()

db: List[User] = [
    User(
        id=uuid4(),
        firstName="Taylor",
        lastName = "Canuel",
        gender = Gender.female,
        roles = [Role.student]
        ),

    User(
        id=uuid4(),
        firstName = "Michael",
        lastName = "Craig",
        gender = Gender.male,
        roles = [Role.admin, Role.user]
        )
]

@app.get("/")
async def root():
    return{"Hello": "Michael"}

@app.get("/api/v1/users")
async def fetchUsers():
    return db;