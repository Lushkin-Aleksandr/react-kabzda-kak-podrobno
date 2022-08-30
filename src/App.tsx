import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

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
            <UncontrolledRating/>
            {/*<Rating value={1}/>*/}
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
