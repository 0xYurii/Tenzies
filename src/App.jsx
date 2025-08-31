import { useState } from "react";
import { nanoid } from 'nanoid';
import Die from "./Die";
import Confetti from 'react-confetti'

export default function App() {
    const [dice, setDice] = useState(()=> generateAllNewDice())

    let gameWon=dice.every(el=>el.isHeld) &&
        dice.every(el=>el.value===dice[0].value)

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() =>({
              value:Math.ceil(Math.random() * 6),
              isHeld:false,
              id:nanoid()
            }))
    }
    function newGame(){
        setDice(generateAllNewDice())
    }
    
    function rollDice() {
        setDice(prev=>prev.map(el=>({
            ...el,
            value:el.isHeld? el.value:Math.ceil(Math.random() * 6)
        })))
    }

    function hold(Id){
        setDice(prev=>prev.map(el=>({
            ...el,
            isHeld:Id===el.id? !el.isHeld:el.isHeld
        })))
    }
    
    const diceElements = dice.map(dieObj => <Die 
            key={dieObj.id} 
            value={dieObj.value} 
            isHeld={dieObj.isHeld}
            hold={()=>hold(dieObj.id)}
        />)
    
    return (
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={gameWon?newGame:rollDice}>
                {gameWon?"New Game":"Roll"}
            </button>
            {gameWon&& <Confetti/>}
            
        </main>
    )
}