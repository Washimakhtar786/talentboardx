function SuggestionsList({ missingSkills = [], nextSteps = [] }) {
  return (
    <div className="mt-6 rounded-xl border bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">
        AI Suggestions
      </h2>

      <div className="mb-6">
        <h3 className="mb-2 font-medium text-red-600">
          Missing Skills
        </h3>

        {missingSkills.length ? (
          <ul className="list-disc space-y-1 pl-5">
            {missingSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No missing skills.</p>
        )}
      </div>

      <div>
        <h3 className="mb-2 font-medium text-green-600">
          Recommended Next Steps
        </h3>

        {nextSteps.length ? (
          <ul className="list-disc space-y-1 pl-5">
            {nextSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No recommendations.</p>
        )}
      </div>
    </div>
  );
}

export default SuggestionsList;