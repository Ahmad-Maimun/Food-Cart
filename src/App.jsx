import { useState } from "react"
import FoodCart from "./foodCart/FoodCart"
import { foodData } from "./foodCart/data";

function App() {
  let [index, setIndex] = useState(0);
  let clickHandler = () => {
    setIndex((old => {
      if (foodData.length - 1 > index) {
        return old + 1;
      }
      return old;
    }));
  }
  return (
    <>
      <FoodCart onClick={clickHandler} data={foodData[index]} />
    </>
  )
}

export default App
