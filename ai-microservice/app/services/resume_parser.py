import os
from dotenv import load_dotenv
from groq import Groq

from app.prompts.resume_prompt import RESUME_PROMPT

load_dotenv()
print("GROQ_API_KEY =", os.getenv("GROQ_API_KEY"))

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def parse_resume(resume_text: str):
    prompt = RESUME_PROMPT.format(
        resume_text=resume_text
    )

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt,
            }
        ],
        temperature=0.3,
    )

    return response.choices[0].message.content