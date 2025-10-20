import { useEffect } from "react";
import { useQuiz } from "../Context/Context";

function RestartQuiz() {

  const {dispatch} = useQuiz()

function restart(){
   dispatch({type:"restart"}) 

    
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchQuestion() {
      try {
        const res = await fetch("/data/questions.json", { signal });
        if (!res.ok) throw new Error("Error: " + res.status);
        const data = await res.json();
        dispatch({ type: "dataRecieved", payload: data });
      } catch (err) {
        if (err.name !== "AbortError") dispatch({ type: "dataFailed" });
      }
    }
    fetchQuestion();
    return () => {
      controller.abort();
    };
 

}

  return (
    <div>
   <button className="btn btn-ui" onClick={restart}>
      Restart Quiz
    </button>
    </div>
  )
}

export default RestartQuiz
