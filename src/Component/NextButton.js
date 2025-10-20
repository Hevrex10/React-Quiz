import { useQuiz } from "../Context/Context";

function NextButton() {

const {dispatch,answer,index,ques} = useQuiz()

 if(answer === null) return null;

 const isLastQuestion = index === ques-1
 function nextClick(){
  if(isLastQuestion){
    dispatch({type: "finishScreen"})
  }else{
    dispatch({type:"newQuestion"})
  }
 }
 
  return (
    <button className="btn btn-ui" onClick={nextClick}>
      Next
    </button>
  )
}

export default NextButton



    // setTimeout(() => {
    //     dispatch({type:"newQuestion",payload:index+1})
    //   }, 1500);
