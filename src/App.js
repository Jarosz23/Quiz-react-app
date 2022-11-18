import { useState } from 'react';
import './styles/App.css';
import StartGame from './StartGame';
import QuestionsFetching from './QuestionFetching.js'
function App() {

  const [isGameStarted, setIsGameStarted] = useState(false)



  return (
    <div className="container">
      <img src="./images/top-right-img.png" alt="img" className="top-img start-img" />
      <img src="./images/bottom-left-img.png" alt="img" className="bottom-img start-img" />
      {isGameStarted === false ? <StartGame
        start={() => setIsGameStarted(true)}
      />
        : <QuestionsFetching />
      }
    </div>
  );
}

export default App;


// API : https://opentdb.com/api.php?amount=5