import { useState } from "react";
import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Error from "./Error";
import Loader from "./Loader";
import StartScreen from "./StartScreen";
import Question from "./Question";
import Progress from "./Progress";
import Footer from "./Footer";
import NextButton from "./NextButton"
import Timer from "./Timer"
import FinishScreen from "./FinishScreen";
import {  useQuiz } from "../Context/Context";

function App() {

  const {status} = useQuiz()
  
  return(
  
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && 
          <StartScreen />
        }
        {status === "active" && (
          <>
           <Progress/>
          <Question />
      
          <Footer >
            <Timer />
          <NextButton />
          </Footer>
          </>
        )
      }
      {status === "yolo" && <FinishScreen/>}
        
      </Main>
    </div>
   
  )
}
export default App;
