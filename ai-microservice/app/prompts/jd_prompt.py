JD_PROMPT = """
You are an expert Technical Recruiter.

Analyze the following Job Description.

Return ONLY valid JSON.

Required format:

{{
    "required_skills": [],
    "preferred_skills": [],
    "experience": "",
    "responsibilities": [],
    "summary": ""
}}

Job Description:

{jd_text}
"""