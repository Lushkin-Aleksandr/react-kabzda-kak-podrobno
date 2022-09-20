import React, {MouseEvent} from "react";

export type AccordionItemType = {
    title: string
    value: string
}

type AccordionPropsType = {
    title: string,
    collapsed?: boolean
    changeCollapsed: () => void
    items: AccordionItemType[]
    itemClickCallback: (value: string) => void
}

function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle onClick={props.changeCollapsed} title={props.title}/>
            {!props.collapsed && <AccordionBody itemClickCallback={props.itemClickCallback} items={props.items}/>}
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

type AccordionBodyPropsType = {
    items: AccordionItemType[]
    itemClickCallback: (value: string) => void
}

function AccordionBody(props: AccordionBodyPropsType) {

    return (
        <div>
            <ul>
                {props.items.map((item, index) => {
                    const onClick = () => {
                        props.itemClickCallback(item.value);
                    }

                    return <li key={index} onClick={onClick}>{item.title}</li>
                })}
            </ul>
        </div>
    )
}

export default Accordion;