
import Die from "./Die"

export default function App() {
  function generateAllNewDice(){
    let randomArray=[]
    for (let i=0;i<10;i++){
      randomArray.push(Math.ceil(Math.random()*6))
    }
    return randomArray
  }
  console.log(generateAllNewDice())
  return (
  <main>
    <section>
      <Die value={1} />
      <Die value={2} />
      <Die value={3} />
      <Die value={4} />
      <Die value={5} />
      <Die value={1} />
      <Die value={2} />
      <Die value={3} />
      <Die value={4} />
      <Die value={5} />
    </section>
  </main>
  )
}