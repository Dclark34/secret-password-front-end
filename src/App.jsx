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
    <div className='square'>1</div>
    <div className='square'>2</div>
    <div className='square'>3</div>
    <div className='square'>4</div>
    <div className='square'>5</div>
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




  return (
<>
<div className='title'>
<h1>SECRET PASSWORD</h1>
</div>
<section className='board'>
    <Row className='guess-1'/>
</section>
<section>
</section>
</>
  );
};
