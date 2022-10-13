import React, {useCallback, useMemo, useState} from "react";
import Select from "../components/Select/Select";


export default {
  title: 'useState with callback'
}




export const useStateWithCallback = () => {

  const getInitialState = () => {
    console.log('getInitialState')
    return Math.ceil(Math.random() * 10)
  }


  const [counter, setCounter] = useState(getInitialState)

  const changer = (state: number) => {
    console.log(state)
    return state + 1
  }

  return (
    <div>
      <button onClick={() => setCounter(changer)}>+</button>
      {counter}
    </div>
  )
}