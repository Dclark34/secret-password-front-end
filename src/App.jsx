import { useState } from 'react'
import './App.css'


//board
function Board({ currentGuess }) {
  return (
    <>
    <Row className="guess-one" currentGuess={currentGuess}/>
    </>
  )
}

//row array
function Row({ currentGuess }) {
  const squares = ['','','','',''];

  //render a square div for each element in squares array. If a letter exists at currentGuess[index], place in square.
  return (
    <>
    <section className='row'> 
      {squares.map((square, index) =>
      <div className='square' key={index}>{currentGuess[index]}</div>
    )}
    </section>
    </>
  );
}





export default function App() {
  //test winning word
  const winningWord = "psych";

  // is there a winner state.
const [isWinner, setIsWinner] = useState(false);

// state for user input
  const [currentGuess, setCurrentGuess] = useState([]);


  //event handler for user input
const handleChange = (event) => {
  let newLetter = event.target.value.split(''); //splits input by space between letters.
  console.log(`You Typed the Letter ${newLetter}`)
  const newGuessArray = newLetter; //pushes split letter into its own index in array.
  console.log(newGuessArray);
  setCurrentGuess(newGuessArray);//sets user input as an array. Will use this array to map to Board
};


  return (
<>
<div className='title'>
<h1>SECRET PASSWORD</h1>
</div>
<section className='board'>
    <Board currentGuess={currentGuess}/>
</section>
<section className='user-inpu-container'>
  <div className='user-input'>
  <label htmlFor="currentGuess">Guess: </label>
  <input 
  id="currentGuess" 
  name="currentGuess" 
  maxLength={5}
  type="text"  
  onChange={handleChange} />
</div>
</section>
</>
  );
};
