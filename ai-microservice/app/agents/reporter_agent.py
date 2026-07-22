import json

from app.prompts.reporter_prompt import REPORTER_PROMPT
from app.services.llm_service import generate_response


class HR_Reporter_Agent:

    @staticmethod
    def generate_report(evaluation):

        prompt = REPORTER_PROMPT.format(
            evaluation=json.dumps(
                evaluation,
                indent=2,
            )
        )

        response = generate_response(prompt)

        response = response.replace("```json", "")
        response = response.replace("```", "")
        response = response.strip()

        return json.loads(response)