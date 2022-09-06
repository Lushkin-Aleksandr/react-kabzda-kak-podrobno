import React from "react";

type AccordionPropsType = {
    title: string,
    collapsed?: boolean
    changeCollapsed: () => void
}

function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle onClick={props.changeCollapsed} title={props.title}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {}

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