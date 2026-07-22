import { useEffect, useState } from "react";
import { matchResumeWithJD } from "../services/matchApi";
import ScoreCard from "../components/ScoreCard";
import SuggestionsList from "../components/SuggestionsList";
import SkillRadarChart from "../components/RadarChart";


function MatchDashboard() {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMatchReport = async () => {
      try {
        const response = await matchResumeWithJD({
          jd_text:
            "We are hiring a MERN Stack Developer with React, Node.js, MongoDB, Express, REST APIs, Git, Docker and AWS.",
          resume_text:
            "John Doe is a MERN Stack Developer with 3 years of experience in React, Node.js, Express, MongoDB, REST APIs, Git and Docker.",
        });

        setReport(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch AI match report.");
      } finally {
        setLoading(false);
      }
    };

    fetchMatchReport();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg font-medium">Loading AI Match Report...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-6 text-3xl font-bold">AI Match Dashboard</h1>

      <div className="rounded-lg bg-white p-6 shadow">
        <ScoreCard
  score={report.match_score}
  status={report.candidate_status}
/>

        <p className="mt-4">{report.summary}</p>

        <div className="mt-6">
          <h3 className="font-semibold">Recommendation</h3>
          <p>{report.recommendation}</p>
        </div>
        <SuggestionsList
  missingSkills={report.missing_skills}
  nextSteps={report.next_steps}
/>

<SkillRadarChart
  scores={report.category_scores || {}}
/>



      </div>
    </div>
  );
}


export default MatchDashboard;