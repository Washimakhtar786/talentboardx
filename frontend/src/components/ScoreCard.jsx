

function ScoreCard({ score, status }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md border">
      <p className="text-sm font-medium text-gray-500">
        AI Match Score
      </p>

      <h2 className="mt-2 text-5xl font-bold text-blue-600">
        {score}%
      </h2>

      {status && (
        <span className="mt-4 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          {status}
        </span>
      )}
    </div>
  );
}

export default ScoreCard;