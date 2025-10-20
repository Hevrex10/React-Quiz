import { useQ, useQuiz } from "../Context/Context";
import RestartQuiz from "./RestartQuiz";
function FinishScreen() {

  const {point,totalPoints,highscore,dispatch} = useQuiz()

  const percentage = Math.round((point / totalPoints) * 100);
  const displayHighscore = Math.max(point, highscore);
    localStorage.setItem("highscore",displayHighscore)


  return (
    <>
 <p className="result">
  {percentage === 100 ? (
    <>🏆 Perfect! You scored <strong>{point}</strong> out of <strong>{totalPoints}</strong> ({percentage}%)</>
  ) : percentage >= 80 ? (
    <>🤩 Excellent! You scored <strong>{point}</strong> out of <strong>{totalPoints}</strong> ({percentage}%)</>
  ) : percentage >= 60 ? (
    <>😄 Good job! You scored <strong>{point}</strong> out of <strong>{totalPoints}</strong> ({percentage}%)</>
  ) : percentage >= 40 ? (
    <>🙂 Keep trying! You scored <strong>{point}</strong> out of <strong>{totalPoints}</strong> ({percentage}%)</>
  ) : percentage >= 20 ? (
    <>😐 Needs improvement. You scored <strong>{point}</strong> out of <strong>{totalPoints}</strong> ({percentage}%)</>
  ) : (
    <>😢 Don’t give up! You scored <strong>{point}</strong> out of <strong>{totalPoints}</strong> ({percentage}%)</>
  )}
</p>
 <p className="highscore"><strong>Highscore: {displayHighscore} points</strong></p>

   <RestartQuiz dispatch={dispatch}/>
 </>
  )
}

export default FinishScreen
