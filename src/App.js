import { useState, useEffect } from 'react'
import './App.css';
import {Message} from './components/Message'
import {Button} from './components/Button'


function App() {
  const randomGenerator = () => {
    return Math.round(Math.random() * 100)
  }
  const [secret, setSecret] = useState(randomGenerator())
  const [message, setMessage] = useState('Have a guess')
  const [guessCount, setGuessCount] = useState(5)
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    if (guessCount == 0) {
      setMessage('Out of guesses')
      setPlaying(false)
    }
  })

  const submitHandler = (evt) => {
    evt.preventDefault()
    const data = new FormData(evt.target)
    const userGuess = parseInt(data.get('guess'))
    evt.target.reset()
    if (playing == true) {
      if (userGuess > secret) {
        setMessage('The number is smaller than ' + userGuess)
        setGuessCount(guessCount - 1)
      }
      else if (userGuess < secret) {
        setMessage('The number is bigger than ' + userGuess)
        setGuessCount(guessCount - 1)
      }
      else if (userGuess === secret) {
        setMessage('The number is equal to ' + userGuess)
      }
    }
  }
  return (
    <div className="App">
      <h1>Guess My Number in {guessCount} Guesses</h1>
      <form id="form" onSubmit={submitHandler}>
        <input type="text" name="guess"
          disabled={(playing === true) ? false : true}
          autoComplete="password"
        />
        {/* <button type="submit">
          {(playing === true) ? "Submit" : "Play again"}
  </button> */}
      </form>
      {/* <p className="message">{message}</p> */}
      <Message text={message} />
    </div>
  ):
}
export default App;