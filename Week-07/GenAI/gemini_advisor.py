import os
import json
import sys
import google.generativeai as genai

# Setup Gemini API configuration
api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    print("WARNING: GEMINI_API_KEY environment variable is not set.")
    print("Please set the GEMINI_API_KEY variable to execute recommendations successfully.")
    # We will still proceed to define the logic and allow mock inputs
    genai.configure(api_key="MOCK_API_KEY_ENV_STUB")
else:
    genai.configure(api_key=api_key)

def load_data(filepath):
    try:
        with open(filepath, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        print(f"Error: Database file not found at {filepath}")
        return None

def generate_recommendations(student, courses):
    if not api_key:
        print("\n--- MOCK RECOMMENDATION (Gemini API Key missing) ---")
        print(f"Student: {student['name']} ({student['major']})")
        print("Recommended: Introduction to Angular (CS101) - Fits full stack engineer track.")
        print("Recommended: Software Engineering Principles (CS105) - Good for high GPA CS students.")
        return

    # System instruction guiding advisor persona
    system_instruction = (
        "You are a professional, helpful university academic advisor. "
        "Your task is to analyze a student's profile (name, GPA, major) and "
        "recommend the most suitable courses from the available courses list. "
        "Provide a concise, friendly explanation for each recommendation."
    )

    model = genai.GenerativeModel(
        model_name="gemini-2.5-flash",
        system_instruction=system_instruction
    )

    # Prompt constructing context
    prompt = f"""
    Here is the student's profile:
    {json.dumps(student, indent=2)}

    Here is the list of available courses:
    {json.dumps(courses, indent=2)}

    Please recommend 2 to 3 courses that align with this student's major, credits, and grade status.
    Write your recommendations in clean Markdown formatting.
    """

    print("Querying Gemini Model for personalized recommendations...")
    try:
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        return f"Gemini API execution error: {str(e)}"

def main():
    # Attempt to load database from Week-06 folder
    db_path = "../../Week-06/Angular/student-course-portal/db.json"
    data = load_data(db_path)
    
    if not data:
        print("Falling back to local hardcoded mock data for analysis...")
        data = {
            "students": [{ "name": "Amit Tiwari", "major": "Computer Science & Engineering", "gpa": 3.8 }],
            "courses": [
                { "name": "Introduction to Angular", "code": "CS101", "credits": 3, "gradeStatus": "passed" },
                { "name": "Data Structures and Algorithms", "code": "CS102", "credits": 4, "gradeStatus": "passed" },
                { "name": "Database Management Systems", "code": "CS103", "credits": 3, "gradeStatus": "pending" },
                { "name": "Software Engineering Principles", "code": "CS105", "credits": 4, "gradeStatus": "pending" }
            ]
        }

    student = data["students"][0]
    courses = data["courses"]

    print("\n================ Academic Advisor Model ================")
    print(f"Analyzing Student Profile: {student['name']}")
    print(f"Major: {student['major']} | GPA: {student['gpa']}")
    print("========================================================\n")

    recommendation = generate_recommendations(student, courses)
    if recommendation:
        print("\n--- Gemini Recommendations ---\n")
        print(recommendation)

if __name__ == "__main__":
    main()
