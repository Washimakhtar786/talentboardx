import json

from app.prompts.evaluator_prompt import EVALUATOR_PROMPT
from app.services.llm_service import generate_response


class Match_Evaluator_Agent:

    @staticmethod
    def evaluate(jd_info, resume_info):

        prompt = EVALUATOR_PROMPT.format(
            jd_analysis=json.dumps(jd_info, indent=2),
            resume_analysis=json.dumps(resume_info, indent=2),
        )

        response = generate_response(prompt)

        response = response.replace("```json", "")
        response = response.replace("```", "")
        response = response.strip()

        return json.loads(response)