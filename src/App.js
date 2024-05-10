import React from'react'
import './App.css';
import HomePage from './Components/HomePage'
import Result from './Components/Result'
import Question from './Components/Question'

export const myBasket = React.createContext()

function App() {
  const [page,setPage] = React.useState("homepage")
  const [score,setScore] = React.useState(0)
  
  return (
      <div className="App">

        <myBasket.Provider value={{mySetPage:setPage,myScore:score,mySetScore:setScore}}>
          { page === 'homepage' && <HomePage/>}
          { page === 'question' && <Question/>}
          { page === 'result' && <Result/>}
        </myBasket.Provider>
      </div>
  );
}

export default App;
