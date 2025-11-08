import { useQuiz } from "../Context/Context";
import RestartQuiz from "./RestartQuiz";

function FinishScreen() {
  const { point, totalPoints, highscore, dispatch } = useQuiz();

  const percentage = Math.round((point / totalPoints) * 100);
  const displayHighscore = Math.max(point, highscore);
  localStorage.setItem("highscore", displayHighscore);

  let message;
  if (percentage === 100)
    message = `🏆 Perfect! You scored ${point} out of ${totalPoints} (${percentage}%)`;
  else if (percentage >= 80)
    message = `🤩 Excellent! You scored ${point} out of ${totalPoints} (${percentage}%)`;
  else if (percentage >= 60)
    message = `😄 Good job! You scored ${point} out of ${totalPoints} (${percentage}%)`;
  else if (percentage >= 40)
    message = `🙂 Keep trying! You scored ${point} out of ${totalPoints} (${percentage}%)`;
  else if (percentage >= 20)
    message = `😐 Needs improvement. You scored ${point} out of ${totalPoints} (${percentage}%)`;
  else
    message = `😢 Don’t give up! You scored ${point} out of ${totalPoints} (${percentage}%)`;

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center space-y-6 gap-6">
      <p className="text-gray-800 bg-gray-100 border border-gray-200 shadow-sm rounded-2xl px-6 py-6 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed max-w-2xl">
        {message}
      </p>

      <p className="text-gray-700 bg-yellow-100 px-6 py-3 rounded-lg border border-yellow-200 shadow-sm text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
        🏅 Highscore: {displayHighscore} points
      </p>

      <div className="mt-6">
        <RestartQuiz dispatch={dispatch} />
      </div>
    </div>
  );
}

export default FinishScreen;
