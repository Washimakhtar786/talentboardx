RESUME_ANALYSIS_PROMPT = """
You are an expert Technical Recruiter.

Analyze the following Resume.

Return ONLY valid JSON.

Required format:

{{
    "skills": [],
    "experience": "",
    "education": [],
    "projects": [],
    "summary": ""
}}

Resume:

{resume_text}
"""