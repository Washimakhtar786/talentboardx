RESUME_PROMPT = """
You are an expert resume parser.

Extract the following information from the resume.

Return ONLY valid JSON.

Required keys:

{{
  "name": "",
  "email": "",
  "phone": "",
  "skills": [],
  "education": [],
  "experience": [],
  "summary": ""
}}

Resume:

{resume_text}
"""