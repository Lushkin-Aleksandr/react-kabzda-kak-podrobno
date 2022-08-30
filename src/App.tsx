import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";

function App() {

    const [isOn, setIsOn] = useState<boolean>(false);

    const changeIsOn = (value: boolean) => {
        setIsOn(value);
    }

    return (
        <div className="App">
            <PageTitle title='QWERTY'/>
            <OnOff isOn={isOn} setIsOn={changeIsOn}/>
            <UncontrolledAccordion title={'Uncontrolled 1'} />
            <UncontrolledAccordion title={'Uncontrolled 2'} />
            <Rating value={1}/>
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<Accordion title='Menu' collapsed={false}/>*/}
            {/*<Accordion title='Users' collapsed={true}/>*/}


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
