import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";

function App() {

    const [isOn, setIsOn] = useState<boolean>(false);

    const changeIsOn = (value: boolean) => {
        setIsOn(value);
    }

    return (
        <div className="App">
            <PageTitle title='QWERTY'/>
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<Accordion title='Menu' collapsed={false}/>*/}
            {/*<Accordion title='Users' collapsed={true}/>*/}

            <OnOff isOn={isOn} setIsOn={changeIsOn}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {

    return (
        <h3>{ props.title }</h3>
    )
}



export default App;
