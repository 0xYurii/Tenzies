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
              isHeld:false,
              id:nanoid()
            }))
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
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}