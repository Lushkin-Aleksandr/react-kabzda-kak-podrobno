import React from "react";

type AccordionPropsType = {
    title: string,
    collapsed?: boolean
}

function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.title}/>
            {!props.collapsed && <AccordionBody />}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}

type AccordionBodyPropsType = {

}

function AccordionBody(props: AccordionBodyPropsType) {

    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default Accordion;