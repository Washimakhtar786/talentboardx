import { useEffect, useState } from "react";
import { fetchJobs } from "../../services/jobService";

const JobListPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs()
      .then(setJobs)
      .catch((error) => {
        console.error("Failed to fetch jobs:", error);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Job Listings
      </h1>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job._id || job.id}
            className="bg-white rounded-lg shadow p-4"
          >
            <h2 className="text-lg font-semibold">
              {job.title}
            </h2>

            <p>
              {job.company} • {job.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListPage;