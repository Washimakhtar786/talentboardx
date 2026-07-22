from fastapi import FastAPI
from pydantic import BaseModel

from app.services.resume_parser import parse_resume

from app.agents.jd_agent import JD_Analyzer_Agent
from app.agents.resume_agent import Resume_Analyzer_Agent
from app.agents.evaluator_agent import Match_Evaluator_Agent
from app.agents.reporter_agent import HR_Reporter_Agent

app = FastAPI(
    title="TalentBoardX AI Service",
    version="1.0.0",
)


# -----------------------------
# Health Check
# -----------------------------
@app.get("/")
def health():
    return {
        "success": True,
        "service": "TalentBoardX AI",
    }


# -----------------------------
# Resume Parser
# -----------------------------
class ResumeRequest(BaseModel):
    resume_text: str


@app.post("/parse-resume")
def parse_resume_endpoint(req: ResumeRequest):
    parsed_resume = parse_resume(req.resume_text)

    return {
        "success": True,
        "parsed_resume": parsed_resume,
    }


# -----------------------------
# JD Test Request
# -----------------------------
class JDRequest(BaseModel):
    jd_text: str


# -----------------------------
# JD Match Request
# -----------------------------
class MatchRequest(BaseModel):
    jd_text: str
    resume_text: str


# -----------------------------
# JD Resume Matching
# -----------------------------
@app.post("/match-jd-resume")
def match_jd_resume(req: MatchRequest):
    jd_info = JD_Analyzer_Agent.analyze(req.jd_text)

    resume_info = Resume_Analyzer_Agent.analyze(req.resume_text)

    evaluation = Match_Evaluator_Agent.evaluate(
        jd_info,
        resume_info,
    )

    report = HR_Reporter_Agent.generate_report(
        evaluation,
    )

    return report


# -----------------------------
# Test JD Analyzer Agent
# -----------------------------
@app.post("/test-jd-agent")
def test_jd_agent(req: JDRequest):
    result = JD_Analyzer_Agent.analyze(req.jd_text)

    return {
        "success": True,
        "analysis": result,
    }


@app.post("/test-resume-agent")
def test_resume_agent(req: ResumeRequest):
    result = Resume_Analyzer_Agent.analyze(req.resume_text)

    return {
        "success": True,
        "analysis": result,
    }

@app.post("/test-evaluator-agent")
def test_evaluator_agent(req: MatchRequest):

    jd_info = JD_Analyzer_Agent.analyze(req.jd_text)

    resume_info = Resume_Analyzer_Agent.analyze(req.resume_text)

    evaluation = Match_Evaluator_Agent.evaluate(
        jd_info,
        resume_info,
    )

    return {
        "success": True,
        "evaluation": evaluation,
    }

@app.post("/test-reporter-agent")
def test_reporter_agent(req: MatchRequest):

    jd_info = JD_Analyzer_Agent.analyze(req.jd_text)

    resume_info = Resume_Analyzer_Agent.analyze(req.resume_text)

    evaluation = Match_Evaluator_Agent.evaluate(
        jd_info,
        resume_info,
    )

    report = HR_Reporter_Agent.generate_report(
        evaluation,
    )

    return {
        "success": True,
        "report": report,
    }