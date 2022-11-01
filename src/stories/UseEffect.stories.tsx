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

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1)

    console.log('Component rendered')

    useEffect(() => {
        console.log('Effect occurred')

        return () => {
            console.log('Reset Effect')
        }
    }, [])

    const increase = () => setCounter(counter + 1)

    return (
        <>
            Hello, counter: {counter}
            <button onClick={increase}>+</button>
        </>
    )
}

export const KeysTrackerExample = () => {

    const [text, setText] = useState('')

    console.log('Component rendered with' + text)

    useEffect(() => {
        const keyDownHandler = (e: KeyboardEvent) => {
            e.stopPropagation()
            console.log(e.key)
            setText(text + e.key)
        }

        window.addEventListener('keydown', keyDownHandler)

        return () => {
            window.removeEventListener('keydown', keyDownHandler)
        }

    }, [text])


    return (
        <>
            Typed text: {text}
        </>
    )
}