import React from 'react'

function QuizResult(props){
  return (
   <>
    <div className='show-score'>
        your score:{props.score}<br/>
        total score:{props.totalscore}
    </div>
    <button id="next-button" onClick={props.tryagain}>tryagain</button>
   </>
  )
}

export default QuizResult