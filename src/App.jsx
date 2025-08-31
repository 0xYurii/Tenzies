import { useState } from "react"
import { nanoid } from 'nanoid';
import Die from "./Die"

export default function App() {
    const [dice, setDice] = useState(generateAllNewDice())
    
    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() =>({
              value:Math.ceil(Math.random() * 6),
              isHeld:true,
              id:nanoid()
            }))
    }

    
    function rollDice() {
        setDice(generateAllNewDice())
    }
    
    const diceElements = dice.map(dieObj => <Die 
            key={dieObj.id} 
            id={dieObj.id}
            value={dieObj.value} 
            isHeld={dieObj.isHeld}
        />)
    
    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}