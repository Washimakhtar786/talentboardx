from unittest.mock import patch

from app.agents.evaluator_agent import Match_Evaluator_Agent


@patch("app.agents.evaluator_agent.generate_response")
def test_evaluator(mock_generate):

    mock_generate.return_value = """
    {
      "score": 85,
      "insights": [
        "Improve Docker"
      ]
    }
    """

    result = Match_Evaluator_Agent.evaluate(
        {
            "skills": ["React"]
        },
        {
            "skills": ["React", "Node"]
        }
    )

    assert result["score"] == 85

    assert result["insights"] == [
        "Improve Docker"
    ]