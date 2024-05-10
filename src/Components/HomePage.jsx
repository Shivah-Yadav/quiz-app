import React from 'react'
import { myBasket } from '../App'

function HomePage() {
  const {mySetPage} = React.useContext(myBasket)

  function goToQuestion(){
    mySetPage('question')
  }
  return (
    <div>
      <button className="btn btn-outline-primary" onClick={goToQuestion}>Start Quiz</button>
    </div>
  )
}

export default HomePage
