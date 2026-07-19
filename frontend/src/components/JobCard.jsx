const JobCard = ({ job }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
      <h2 className="text-lg font-bold">{job.title}</h2>

      <p className="text-sm text-gray-600">
        {job.company} • {job.location}
      </p>

      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded mt-2 inline-block">
        {job.type}
      </span>
    </div>
  );
};

export default JobCard;