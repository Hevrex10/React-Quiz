import { useQuiz } from "../Context/Context"

function Progress() {


  const {point,index,questionLength,totalPoints,answer} = useQuiz()
  return (
    <header className="progress">

      <progress max={questionLength} value={index+ Number(answer !== null)} />

      <p>Question <strong> {index} / {questionLength} </strong>  </p>
     <p> <strong> {Number(point)} / {totalPoints} points</strong> </p> 
      </header>
    
  )
}

export default Progress
