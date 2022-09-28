import React, {useState} from "react";


export default {
    title: 'React memo example'
}


export const Example1 = () => {
    const [users, setUsers] = useState(['QWE', 'ASD', 'ZXC']);
    const [counter, setCounter] = useState(0)

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setUsers([...users])}>+</button>
            <MessagesCounter value={counter}/>
            <MemoUsers users={users}/>
        </>
    )
}



const MessagesCounter = (props: {value: any}) => {
    return <div>{props.value}</div>
}

const Users = (props: {users: any[]}) => {
    console.log('Users')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const MemoUsers = React.memo(Users)

// const Users = (props: {users: any[]}) => {
//     console.log('Users')
//     return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
// }
