import { useEffect } from "react"
import { useQuiz } from "../Context/Context"

function Timer() {
  
  const {dispatch,secondsRemaining} = useQuiz()
  

  useEffect(()=>{
    
   const interval = setInterval(()=>{
     dispatch({type:"tick",})
    },1000)
     return () => clearInterval(interval);
  },[dispatch])

   const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  console.log(formattedSeconds)

  
  return (
    <div className="timer">
      0{minutes}:{formattedSeconds}
    </div>
  )
}

export default Timer
