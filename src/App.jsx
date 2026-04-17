import { useState } from 'react'
import './App.css'


 function App() {
  //test winning word
  const winningWord = "psych";

  //winner state
const [isWinner, setIsWinner] = useState(false);

//total guesses
const [totalGuesses, setTotalGuesses] = useState([]);

// state for user input guess
  const [currentGuess, setCurrentGuess] = useState([]);


  //event handler for user input
const handleChange = (event) => {
  let newLetter = event.target.value.toUpperCase().split(''); //splits input by space between letters.
  const newGuessArray = newLetter; //pushes split letter into its own index in array.
  console.log(newGuessArray);
  setCurrentGuess(newGuessArray);//sets user input as an array. Will use this array to map to Board
};


//handle guess submit
const handleSubmit = (event) => {
  event.preventDefault() //must be added because in HTML submit navigates away from page. 
  console.log(event); 
};



  return (
<>
<div className='title'>
<h1>SECRET PASSWORD</h1>
</div>
<section className='board'>
    <Board currentGuess={currentGuess}/>
</section>
<section className='user-input-container'>
<form>
  <label htmlFor="currentGuess">Your Guess: </label>
  <input 
  id="currentGuess" 
  name="currentGuess" 
  maxLength={5}
  type="text"  
  onChange={handleChange} 
  onSubmit={handleSubmit}
  />
  <button type="submit">Submit</button>
  </form>
</section>
</>
  );
};




//board
function Board({ currentGuess, totalGuesses }) {
  return (
    <>
    <Row className="guess-one" currentGuess={currentGuess} totalGuesses={totalGuesses}/>
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




export default App;