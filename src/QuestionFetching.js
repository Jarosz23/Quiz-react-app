import { useState, useEffect } from 'react';
import './styles/Questions.css';
import SingleQuestion from './SingleQuestion'
import { nanoid } from 'nanoid';

export default function QuestionsFetching() {



  const [questions, setQuestions] = useState([])


  const generateAnswer = (answer, correctAnswer) => {
    return {
      id: nanoid(),
      answer: answer,
      isSelected: false,
      correctAnswer: correctAnswer
    }
  }

  useEffect(() => {

    const shuffle = array => {
      array.sort(() => Math.random() - 0.5)
    }

    fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then((data) => {
        setQuestions(data.results.map(question => {
          const answersArray = [generateAnswer(question.correct_answer, true)]
          question.incorrect_answers.map(answer => {
            return answersArray.push(generateAnswer(answer, false))
          })
          shuffle(answersArray)
          console.log(answersArray)
          return {
            key: nanoid(),
            id: nanoid(),
            question: question.question,
            answers: answersArray,
            isChecked: false
          }
        }))

      })
  }, [])



  const selectAnswer = (id) => {
    questions.map(question => {
      return question.answers.map(answer => {
        console.log(answer)
        console.log("hello")
        return answer.id === id ? { ...answer, isSelected: !answer.isSelected } : answer;
      })
    })
  }



  let singleQuestion = questions.map(question => (
    < SingleQuestion
      {...question}
      selectAnswer={() => selectAnswer(question.answers.id)}
    />
  ))


  return (
    <div className='questions'>
      {singleQuestion}
    </div>
  )
}

