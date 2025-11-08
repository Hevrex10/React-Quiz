import { useQuiz } from "../Context/Context";

function NextButton() {

const {dispatch,answer,index,questionLength} = useQuiz()
console.log(questionLength )

 if(answer === null) return null;

 const isLastQuestion = index === questionLength-1
 function nextClick(){
  if(isLastQuestion){
    dispatch({type: "finishScreen"})
  }else{
    dispatch({type:"newQuestion"})
  }
 }
 
    // setTimeout(() => {
    //     dispatch({type:"newQuestion",payload:index+1})
    //   }, 1500);
 
  return (
    <button className="btn btn-ui" onClick={nextClick}>
      Next
    </button>
  )
}

export default NextButton



