import { useQuiz } from "../Context/Context";

function Progress() {
  const { point, index, questionLength, totalPoints, answer } = useQuiz();

  return (
    <header className="progress w-full p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 bg-gray-100 rounded-md">
      
      {/* Progress Bar */}
      <progress
        className="w-full sm:w-1/2 h-4 rounded-lg overflow-hidden"
        max={questionLength}
        value={index + Number(answer !== null)}
      />

      {/* Question Info */}
      <p className="text-sm sm:text-base text-gray-700">
        Question <strong>{index + 1} / {questionLength}</strong>
      </p>

      {/* Points Info */}
      <p className="text-sm sm:text-base text-gray-700">
        <strong>{point} / {totalPoints} points</strong>
      </p>

    </header>
  );
}

export default Progress;
