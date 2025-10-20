import { useQuiz } from "../Context/Context"
import Options from "./Options"

function Question() {

  const {questions,index} = useQuiz()
 const question = questions[index]
 console.log(question)

  if(!question) return null
  return (
    <div>
        <h4>{question.question}</h4>
         <Options question={question}/>
    </div>
  )
}

export default Question
