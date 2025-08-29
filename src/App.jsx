import { useState } from "react"
import Die from "./Die"

export default function App() {
    
    const [dice, setDice] = useState(generateAllNewDice())
    
    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
    }
    
    function rollDice() {
        setDice(generateAllNewDice())
    }
    
    const diceElements = dice.map(num => <Die value={num} />)
    
    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            
            <button className="roll-dice" onClick={rollDice}>Roll</button>
            
        </main>
    )
}