import json

from app.prompts.resume_analysis_prompt import RESUME_ANALYSIS_PROMPT
from app.services.llm_service import generate_response


class Resume_Analyzer_Agent:

    @staticmethod
    def analyze(resume_text: str):

        prompt = RESUME_ANALYSIS_PROMPT.format(
            resume_text=resume_text
        )

        response = generate_response(prompt)

        response = response.replace("```json", "")
        response = response.replace("```", "")
        response = response.strip()

        return json.loads(response)