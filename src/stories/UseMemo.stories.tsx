import React, {useMemo, useState} from "react";
import Select from "../components/Select/Select";


export default {
    title: 'useMemo'
}


export const DifficultCountingExample = () => {

    const [a, setA] = useState(3)
    const [b, setB] = useState(3)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResult = resultA
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake += 1;
            }
            tempResult *= i;
        }

        return tempResult
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>Result for a: {resultA}</div>
            <div>Result for b: {resultB}</div>
        </>
    )
}

const UsersSecret = (props: { users: Array<string> }) => {
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const Users = React.memo(UsersSecret)

export const HelpsReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Petya', 'Vasya', 'Kolya'])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Users users={users}/>
        </>
    )
}

export const SelectsWithMemo = () => {
    console.log('SelectsWithMemo')
    const [counter, setCounter] = useState(0);

    const [cities, setCities] = useState<Array<{ id: number, title: string, country: string }>>([
        {id: 1, title: 'Moscow', country: 'Russia'},
        {id: 2, title: 'St-Petersburg', country: 'Russia'},
        {id: 3, title: 'Nizhni Novgorod', country: 'Russia'},
        {id: 4, title: 'Berlin', country: 'Germany'},
        {id: 5, title: 'Munich', country: 'Germany'},
        {id: 6, title: 'Hamburg', country: 'Germany'},
    ])

    let russianCities = useMemo(()=>{
        return cities.filter(el => el.country === 'Russia').map(el => ({title: el.title, value: el.id}))
    }, [cities]);

    // let russianCities = cities.filter(el => el.country === 'Russia').map(el => ({title: el.title, value: el.id}))

    const [currentRussianCity, setCurrentRussianCity] = useState(russianCities[0].value)


    let germanCities = useMemo(() => {
        return cities.filter(el => el.country === 'Germany').map(el => ({title: el.title, value: el.id}))
    }, [cities]);
    const [currentGermanCity, setCurrentGermanCity] = useState(germanCities[0].value)


    return (
        <div>
            <Select value={currentRussianCity} onChange={setCurrentRussianCity} items={russianCities}/>
            <Select value={currentGermanCity} onChange={setCurrentGermanCity} items={germanCities}/>
            <div>Counter: {counter}</div>
            <button onClick={() => setCounter(counter + 1)}>Increase count</button>
        </div>
    )

}

