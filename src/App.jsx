/**
 * Challenge:
 * 
 * - Create a Die component that takes a `value` prop. Should
 *   render a button with that value displayed.
 * - Render 10 instances of the Die component (manually)
 *      - Provide a number between 1-6 for the value on each
 *        for now
 * - Style the <main> and <Die> components 
 *   to look like they do in the slide
 *      - Hints: Create a container to hold the 10 instances
 *        of the Die component, and use CSS Grid to lay them
 *        out evenly in 2 rows of 5 columns
 *      - Use flexbox on main to center the dice container
 *        in the center of the page
 */
import Die from "./Die"

export default function App() {
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