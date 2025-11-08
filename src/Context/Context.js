import { createContext, useContext } from "react";
import { useReducer,useEffect } from "react";

const questionContext = createContext()

const SEC_PER_QUESTION = 30;

 const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  point: 0,
  highscore: Number(localStorage.getItem("highscore")) || 0,
  secondsRemaining : null,
};

function reducer(state, action) {
  switch (action.type) {

    case "dataRecieved":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SEC_PER_QUESTION,
      };
      case "newAnswer":
        const question = state.questions[state.index]
        const isCorrect = action.payload === question.correctOption
        return{
          ...state,
          answer: action.payload,
          point: isCorrect ? state.point + question.points : state.point,
        };
        case "newQuestion":
          return{
            ...state,
            index: state.index + 1,
             answer: null,
           status: action.payload >= state.questions.length ? "finished" : state.status,
          }
          case "finishScreen":
            const  nextIndex = state.index + 1
            const isFinished = nextIndex >= state.questions.length
            const newHighscore = Math.max(state.point, state.highscore);
           
            
            return{
              ...state,
              answer:null,
              status: isFinished ? "yolo" : state.status,
              highscore: newHighscore
            }
            case "restart":
               return{
                ...state,
                 status: "loading",
                  index: 0,
                  answer: null,
                   secondsRemaining: 300, 
               }
               case "tick":
                return{
                  ...state,
                secondsRemaining:Number(state.secondsRemaining) > 0 ? state.secondsRemaining - 1 : 0,
                  status: state.secondsRemaining <= 1 ? "yolo" : state.status,
                   highscore: state.highscore
                }
    default:
      throw new Error("Action unknown");
  }
}


export function QuestionProvider({children}){


 
const [state, dispatch] = useReducer(reducer, initialState);

  const { questions, status,index,answer,point,highscore,secondsRemaining } = state;

    const questionLength= questions.length
    
  const totalPoints = questions.reduce((sum, ques) => sum + ques.points, 0);
  console.log(totalPoints)
   

 

  useEffect(() => {

    async function fetchQuestion() {
      try {
        const res = await fetch("/data/questions.json");
        if (!res.ok) throw new Error("Error: " + res.status);
        const data = await res.json();
        dispatch({ type: "dataRecieved", payload: data });
        console.log(data)
      } catch (err) {
        if (err.name !== "AbortError") dispatch({ type: "dataFailed" });
      }
    }
    fetchQuestion();

  },[]);
   
  return ( 
  <questionContext.Provider value={{questions,status,index,answer,point,highscore,secondsRemaining,dispatch,questionLength,totalPoints}}>{children}</questionContext.Provider>
  )
}

export function useQuiz(){

  const context = useContext(questionContext)
  if(context === undefined) throw new Error("QuizContent was used outside of the QuestionProvider")
  return context
}

