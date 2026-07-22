import json

from app.prompts.jd_prompt import JD_PROMPT
from app.services.llm_service import generate_response


class JD_Analyzer_Agent:

    @staticmethod
    def analyze(jd_text: str):

        prompt = JD_PROMPT.format(
            jd_text=jd_text
        )

        response = generate_response(prompt)

        # Remove markdown if present
        response = response.replace("```json", "")
        response = response.replace("```", "")
        response = response.strip()

        return json.loads(response)