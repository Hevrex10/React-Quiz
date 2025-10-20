import { useQuiz } from "../Context/Context";



function StartScreen() {

    const {questions,dispatch}= useQuiz()

   function handleClick(e){
    e.preventDefault()
    dispatch({type:'start'})
   }
  return (
    <div className="start">
      <h2>Welcome to the react quiz</h2>
      <h3>{questions.length} questions to test your react mastery</h3>
      <button className="btn btn-ui" onClick={handleClick}>Let's Start</button>
    </div>
  );
}

export default StartScreen;