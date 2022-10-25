import React, {useEffect, useState} from "react";


export default {
  title: 'useEffect'
}




export const SimpleExample = () => {
  const [counter, setCounter] = useState(0);
  const [fake, setFake] = useState('fake')

  console.log('Simple Example')

  useEffect(() => {
    console.log('every render')
  })
  useEffect(() => {
    console.log('one render')
  }, [])
  useEffect(() => {
    console.log('after counter changing')
  }, [counter])

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {counter}
      <button onClick={() => setFake(fake + '1')}>+</button>
      {fake}
    </div>
  )
}

export const SetTimeoutExample = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter((state: number) => {
        return state + 1
      })
    }, 1000)
  }, [])

  return (
    <div>
      Counter: {counter}
    </div>
  )
}

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000)
  }, [])

  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  return (
    <div>
      {hours}:{minutes}:{seconds}
    </div>
  )
}