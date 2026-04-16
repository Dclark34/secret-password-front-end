import { useState } from 'react'
import './App.css'


//board
function Board() {
  return (
    <>
    <Row />
    </>
  )
}

//row array
function Row() {
  return (
    <>
    <section className='row'>
    <div className='square'></div>
    <div className='square'></div>
    <div className='square'></div>
    <div className='square'></div>
    <div className='square'></div>
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
    <Row className='guess-1'/>
</section>
<section className='user-input'>
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
