import React from 'react'
import {myBasket} from '../App'
import {quizData} from './QuizData'

function Result() {
  const {myScore,mySetScore} = React.useContext(myBasket)
  const {mySetPage} = React.useContext(myBasket)

  function goToQuestion(){
    mySetPage('question')
    mySetScore(0)
  }


  return (
    <div className="R-container">
      <h2>Result</h2>
      <h3>
        <span>Total Questions : {quizData.length}</span><br/>
        <span>Your Score : {myScore}</span>
        </h3>
        {
          (quizData.length === myScore) ? <p>Great🎉🎉,you are got all the questions right</p> : <p>Better luck next time</p>
        }
        <button className="btn btn-outline-primary" onClick={goToQuestion}>Start Again</button>
    </div>
  )
}

export default Result
