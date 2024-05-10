import React from 'react'
import {myBasket} from '../App'
import { quizData } from './QuizData'

function Question() {
  const [currentQuestion,setCurrentQuestion] = React.useState(0)
  const [optionChoosen,setOptionChoosen] = React.useState("")
  
  const {mySetPage,myScore,mySetScore} = React.useContext(myBasket)

  function nextButton(){
    if(optionChoosen === quizData[currentQuestion].Answer){
      mySetScore(myScore + 1)
    }else{
      mySetScore(myScore)
    }
    
    setCurrentQuestion(currentQuestion + 1)
  }
  
  function backButton(){
    if(optionChoosen === quizData[currentQuestion].Answer){
      mySetScore(myScore + 1)
    }
    setCurrentQuestion(currentQuestion - 1)
  }

  function submitButton(){
    if(optionChoosen === quizData[currentQuestion].Answer){
      mySetScore(myScore + 1)
    }

    mySetPage('result')
  }

  return (
    <div className='Qcontainer'>
      <h3>Q{currentQuestion+1} : {quizData[currentQuestion].title}</h3>
        A.<button id="btn" className="btn btn-outline-dark" onClick={()=>{
          setOptionChoosen("A")
        }}> {quizData[currentQuestion].A}</button><br/>
        B.<button id="btn" className="btn btn-outline-dark" onClick={()=>{
          setOptionChoosen("B")
        }}> {quizData[currentQuestion].B}</button><br/>
        C.<button id="btn" className="btn btn-outline-dark" onClick={()=>{
          setOptionChoosen("C")
        }}> {quizData[currentQuestion].C}</button><br/>
        D.<button id="btn" className="btn btn-outline-dark" onClick={()=>{
          setOptionChoosen("D")
        }}> {quizData[currentQuestion].D}</button>
<br/>
      <div className="btn-container">
        <div className="previous-btn">
          {
            currentQuestion === 0 ? " " :
            <button className="btn btn-outline-danger" onClick={backButton}>Previous</button>
          }
        </div>
        <div className="next-btn">
          {
            currentQuestion === quizData.length - 1 ? 
            <button className="btn btn-outline-danger" onClick={submitButton}>Submit</button> 
            : <button className="btn btn-outline-success" onClick={nextButton}>Next</button>
          }
        </div>
      </div>

    </div>
  )
}

export default Question


//now.sh