import { useState } from "react"
import Die from "./Die"



export default function App() {

  function generateAllNewDice(){
    return new Array(10)
    .fill(0)
    .map(()=>Math.ceil(Math.random() * 6))
  }

  const [randomArray,setRandomArray]=useState(generateAllNewDice())


  const diceElements=randomArray.map(num=><Die value={num}/>)
  return (
  <main>
    <section>
      {diceElements}
    </section>
  </main>
  )
}