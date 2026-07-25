# GenAI Course Advisor

This hands-on module implements a GenAI Course Advisor that uses the Gemini API to analyze a student's profile and recommend courses from the Student Course Portal list.

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

2. **Configure API Key**:
   Create a Google AI Studio account and retrieve your API key. Set the environment variable:
   ```powershell
   # Windows PowerShell
   $env:GEMINI_API_KEY="your_api_key_here"
   ```
   ```bash
   # Linux/macOS
   export GEMINI_API_KEY="your_api_key_here"
   ```

3. **Run the Advisor Script**:
   ```bash
   python gemini_advisor.py
   ```

## Prompt Engineering Concepts Demonstrated

- **System Instructions**: Explicitly defines the advisor persona ("You are a professional university academic advisor...") to guide recommendations tone.
- **Context Injection**: Converts JSON mock data records into structured prompt strings containing the profile and options.
- **Structured Formatting**: Requests the model to produce output utilizing clean Markdown.
