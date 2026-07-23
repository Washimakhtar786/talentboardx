from unittest.mock import patch

from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


@patch("app.agents.jd_agent.JD_Analyzer_Agent.analyze")
@patch("app.agents.resume_agent.Resume_Analyzer_Agent.analyze")
@patch("app.agents.evaluator_agent.Match_Evaluator_Agent.evaluate")
@patch("app.agents.reporter_agent.HR_Reporter_Agent.generate_report")
def test_match_jd_resume(
    mock_report,
    mock_evaluator,
    mock_resume,
    mock_jd,
):
    mock_jd.return_value = {
        "skills": ["React"]
    }

    mock_resume.return_value = {
        "skills": ["React", "Node"]
    }

    mock_evaluator.return_value = {
        "score": 92
    }

    mock_report.return_value = {
        "match_score": 92,
        "candidate_status": "Selected"
    }

    response = client.post(
        "/match-jd-resume",
        json={
            "jd_text": "Need MERN Developer",
            "resume_text": "React Node MongoDB"
        }
    )

    assert response.status_code == 200

    body = response.json()

    assert body["match_score"] == 92

    assert body["candidate_status"] == "Selected"