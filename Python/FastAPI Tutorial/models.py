from typing import Optional, List
from uuid import UUID, uuid4
from pydantic import BaseModel #Learn more about Pydantic Library
from enum import Enum

class Gender(str, Enum):
    male = "male"
    female = "female"

class Role(str, Enum):
    admin = "admin"
    user = "user"
    student = "student"
    
class User(BaseModel):
    id: Optional[UUID] = uuid4()
    firstName: str
    lastName: str
    #middleName: Optional[str]
    gender: Gender
    roles: List[Role]