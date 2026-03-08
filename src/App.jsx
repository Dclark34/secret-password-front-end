import { useState } from 'react'

import './App.css'


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


//icebox: Interactive keyboard
function Keyboard () {
  return(
    <button className='key'>This will be a keyboard eventually</button>
  );
};





export default function Board() {

  //test winning word
  const winningWord = "Start";

  return (
<>
<div className='title'>
<h1>SECRET PASSWORD</h1>
</div>
<section className='board'>
    <Row className='guess-1'/>
    <Row className='guess-2'/>
    <Row className='guess-3'/>
    <Row className='guess-4'/>
    <Row className='guess-5'/>
    <Row className='guess-6'/>
</section>
<section>
  <Keyboard />
</section>
</>
  );
};
