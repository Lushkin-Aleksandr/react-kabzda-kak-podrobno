import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    title: string,
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    const [collapsed, setCollapsed] = useState<boolean>(true);

    const toggleCollapse = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <UncontrolledAccordionTitle title={props.title}/>
            <button onClick={toggleCollapse}>{collapsed ? 'Uncollapse' : 'Collapse'}{' accordion'}</button>
            {!collapsed && <UncontrolledAccordionBody />}
        </div>
    )
}

type UncontrolledAccordionTitlePropsType = {
    title: string
}

function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {

    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}


function UncontrolledAccordionBody() {

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

export default UncontrolledAccordion;