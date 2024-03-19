from langchain.tools import tool
from datetime import datetime
import random

@tool
def get_user_health_data_for_range(start_date, end_date) -> list[int]:
    """Get the users steps, calories logged, and weight over the given date range, start_date and end_date should be ISO 8601 formatted dates"""
    start_date = datetime.fromisoformat(start_date)
    end_date = datetime.fromisoformat(end_date)
    total_days = (end_date - start_date).days
    mock_data = [{"steps": random.randint(1000, 10000), "calories": random.randint(2000, 3500), "weight": random.randint(150, 155)} for _ in range(total_days)]
    
    return mock_data

@tool
def get_user_weight() -> float:
    """Get the user's current weight"""
    return 150.0

@tool
def get_user_remaining_calorie_goal() -> float:
    """Get the user's remaining calorie goal for the day"""
    return 500.0

tools = [get_user_health_data_for_range, get_user_weight, get_user_remaining_calorie_goal]