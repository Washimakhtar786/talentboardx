from fastapi import FastAPI, Request
from pydantic import BaseModel

from slowapi import Limiter
from slowapi.util import get_remote_address
from slowapi.middleware import SlowAPIMiddleware

from app.logger import logger

from app.services.resume_parser import parse_resume

from app.agents.jd_agent import JD_Analyzer_Agent
from app.agents.resume_agent import Resume_Analyzer_Agent
from app.agents.evaluator_agent import Match_Evaluator_Agent
from app.agents.reporter_agent import HR_Reporter_Agent

# ----------------------------------
# Rate Limiter
# ----------------------------------

limiter = Limiter(key_func=get_remote_address)

# ----------------------------------
# FastAPI App
# ----------------------------------

app = FastAPI(
    title="TalentBoardX AI Service",
    version="1.0.0",
)

app.state.limiter = limiter
app.add_middleware(SlowAPIMiddleware)

logger.info("TalentBoardX AI Microservice Started")

# ----------------------------------
# Health Check
# ----------------------------------


@app.get("/")
def health():
    logger.info("Health check requested")

    return {
        "success": True,
        "service": "TalentBoardX AI",
    }


# ----------------------------------
# Request Models
# ----------------------------------


class ResumeRequest(BaseModel):
    resume_text: str


class JDRequest(BaseModel):
    jd_text: str


class MatchRequest(BaseModel):
    jd_text: str
    resume_text: str


# ----------------------------------
# Resume Parser
# ----------------------------------


@app.post("/parse-resume")
@limiter.limit("20/minute")
def parse_resume_endpoint(request: Request, req: ResumeRequest):
    logger.info("Resume parsing request received")

    parsed_resume = parse_resume(req.resume_text)

    logger.info("Resume parsed successfully")

    return {
        "success": True,
        "parsed_resume": parsed_resume,
    }


# ----------------------------------
# JD Resume Matching
# ----------------------------------


@app.post("/match-jd-resume")
@limiter.limit("10/minute")
def match_jd_resume(request: Request, req: MatchRequest):
    logger.info("JD Resume Matching Started")

    jd_info = JD_Analyzer_Agent.analyze(req.jd_text)

    resume_info = Resume_Analyzer_Agent.analyze(req.resume_text)

    evaluation = Match_Evaluator_Agent.evaluate(
        jd_info,
        resume_info,
    )

    report = HR_Reporter_Agent.generate_report(
        evaluation,
    )

    logger.info("JD Resume Matching Completed")

    return report


# ----------------------------------
# Test JD Agent
# ----------------------------------


@app.post("/test-jd-agent")
@limiter.limit("20/minute")
def test_jd_agent(request: Request, req: JDRequest):
    logger.info("JD Analyzer test started")

    result = JD_Analyzer_Agent.analyze(req.jd_text)

    logger.info("JD Analyzer completed")

    return {
        "success": True,
        "analysis": result,
    }


# ----------------------------------
# Test Resume Agent
# ----------------------------------


@app.post("/test-resume-agent")
@limiter.limit("20/minute")
def test_resume_agent(request: Request, req: ResumeRequest):
    logger.info("Resume Analyzer test started")

    result = Resume_Analyzer_Agent.analyze(req.resume_text)

    logger.info("Resume Analyzer completed")

    return {
        "success": True,
        "analysis": result,
    }


# ----------------------------------
# Test Evaluator Agent
# ----------------------------------


@app.post("/test-evaluator-agent")
@limiter.limit("20/minute")
def test_evaluator_agent(request: Request, req: MatchRequest):
    logger.info("Evaluator Agent test started")

    jd_info = JD_Analyzer_Agent.analyze(req.jd_text)

    resume_info = Resume_Analyzer_Agent.analyze(req.resume_text)

    evaluation = Match_Evaluator_Agent.evaluate(
        jd_info,
        resume_info,
    )

    logger.info("Evaluator Agent completed")

    return {
        "success": True,
        "evaluation": evaluation,
    }


# ----------------------------------
# Test Reporter Agent
# ----------------------------------


@app.post("/test-reporter-agent")
@limiter.limit("20/minute")
def test_reporter_agent(request: Request, req: MatchRequest):
    logger.info("Reporter Agent test started")

    jd_info = JD_Analyzer_Agent.analyze(req.jd_text)

    resume_info = Resume_Analyzer_Agent.analyze(req.resume_text)

    evaluation = Match_Evaluator_Agent.evaluate(
        jd_info,
        resume_info,
    )

    report = HR_Reporter_Agent.generate_report(
        evaluation,
    )

    logger.info("Reporter Agent completed")

    return {
        "success": True,
        "report": report,
    }