/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import FoodCart from "./foodCart/FoodCart"
import { foodData } from "./foodCart/data";
import axios from "axios";

function App() {
  let [index, setIndex] = useState(0);
  let [data, setData] = useState([]);
  let nextHandler = () => {
    setIndex((old => {
      if (data.length - 1 > index) {
        return old + 1;
      }
      return old;
    }));
  }

  
  
  let prevHandler = () => {
    setIndex((old => {
      if (data.length - 1 > 0) {
        return old - 1;
      }
      return old;
    }));
  }


  useEffect(() => {

    async function getData() {
      let data = await axios('https://course.divinecoder.com/food/random/10');
      setData(data.data);
      

    }
    getData()
  }, [index]);

  if(data.length == 0) return <div className="text-7xl flex justify-center mt-52"><progress className="progress w-56"></progress></div>
    return <FoodCart dataLength={data.length} dataIndex={index} prevHandler={prevHandler} onClick={nextHandler} data={data[index]} />
}

export default App
