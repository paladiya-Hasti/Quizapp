import React, { useState } from 'react'
import './quiz.css'
import {data}  from'./data'

const Quic = () => {
      let [index,setindex]=useState(1)
      let [question,setquestion]=useState(data[index])


      const check=(e,answer)=>{
        if(question.answer===answer){
          e.target.value("correct")
        }
        else{
          ("wrong")

        }
      }

  return (
    <div>
       
        <div className='container'>
        <h1>QUIZ APP</h1>
        <hr />
            <div className='question'>
            <h2>{index+1}  {question.question}</h2>
            <ul>
              <li onClick={(e)=>{check(e,1)}}>{question.A}</li>
              <li  onClick={(e)=>{check(e,2)}}>{question.B}</li>
              <li  onClick={(e)=>{check(e,3)}}>{question.C}</li>
              <li onClick={(e)=>{check(e,4)}}>{question.D}</li>
            </ul>
            <button>next</button>
            </div>
        </div>
    </div>
  )
}

export default Quic