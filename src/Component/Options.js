import { useState } from "react"
import { useQuiz } from "../Context/Context";
function Options({question}) {

  const {dispatch,answer} = useQuiz()
 
  function handleClick(index){
    if(answer === null) dispatch({type:"newAnswer", payload: index})
      
      console.log(index)
  }

  function getButtonClass(index){
    const isCorrect = index === question.correctOption;
    const isWrong = index === answer

     if (answer === null) return "btn btn-option";

    if(isCorrect) return "btn btn-option correct answer"
    if(isWrong) return "btn btn-option totally-wrong"
    if(!isCorrect) return "btn btn-option wrong"

    return "btn btn-option wrong";
  }

  return (
      <div className="options">
           {question.options.map((opt,index) => {

       return (  <button key={opt}  disabled={answer !== null} className={getButtonClass(index)} onClick={() => handleClick(index)}>{opt}</button>)
        }
           )}
        </div>  
  )
}

export default Options
