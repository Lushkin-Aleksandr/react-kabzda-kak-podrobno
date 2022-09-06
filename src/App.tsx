import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValuesType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import ControlledOnOff from "./components/ControlledOnOFF/ControlledOnOff";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValuesType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    const [isOn, setIsOn] = useState<boolean>(true)

    return (
        <div className="App">
            <PageTitle title='QWERTY'/>
            <OnOff changeIsOn={setIsOn} /> {isOn.toString()}
            <ControlledOnOff isOn={isOn} changeIsOn={value => setIsOn(value)}/>
            <UncontrolledAccordion title={'Uncontrolled 1'} />
            <UncontrolledAccordion title={'Uncontrolled 2'} />
            <UncontrolledRating/>
            <Rating value={ratingValue} changeValue={(value) => setRatingValue(value)}/>
            <Accordion title='Menu' collapsed={accordionCollapsed} changeCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}/>
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
