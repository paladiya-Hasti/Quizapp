import React, { useState } from "react";
import "./quiz.css";
import { QuizData } from "./Quizdata";
import QuizResult from "./QuizResult";

const Quic = () => {
  const [currentquestion, setcurrentquestion] = useState(0);
  const [score, setscore] = useState(0);
  const [clickoption, setclickoption] = useState(0);
  const [showresult,setshowresult]=useState(false)

  const changequestion = () => {
    updatescore();
    if (currentquestion < QuizData.length - 1) {
      setcurrentquestion(currentquestion + 1);
      setclickoption(0)
    } else {
      setshowresult(true)
    }
  };
  const updatescore= () => {
    if (clickoption === QuizData[currentquestion].answer) {
      setscore(score + 1);
    }
  };
  const resetAll=()=>{
    setshowresult(false);
    setcurrentquestion(0);
    setclickoption(0);
    setscore(0)

  }

  return (
    <div>
      <p className="heading-txt">QUIZ APP</p>
      <div className="container">
        {showresult ?(
          <QuizResult score={score} totalscore={QuizData.length} tryagain={resetAll}></QuizResult>
        ):(
          <>
        <div className="question">
          <span id="question-number">{currentquestion + 1}</span>
          <span id="question-txt">{QuizData[currentquestion].question}</span>
        </div>
        <div className="option-container">
          {QuizData[currentquestion].options.map((options, i) => {
            return (
              <button
                // className="option-btn"
                className={`option-btn ${
                  clickoption == i+1?"checked" :null
                }`}
                key={i}
                onClick={() =>setclickoption(i + 1)}
              >
                {options}
              </button>
            );
          })}
        </div>
        <input
          type="button"
          value="next"
          id="next-button"
          onClick={changequestion}
        />
        </>)}
      </div>
    </div>
  );
};

export default Quic;
