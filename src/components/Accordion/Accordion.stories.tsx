import {ComponentMeta, ComponentStory} from "@storybook/react";
import {useState} from "react";
import Accordion from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion,
    args: {
        items: [
            {title: 'First', value: '1'},
            {title: 'Second', value: '2'},
            {title: 'Third', value: '3'},
            {title: 'Fourth', value: '4'},
        ],
        changeCollapsed: () => action('clicked to change collapsed'),
        itemClickCallback: action(`clicked to item.`)
    }

} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args}/>
export const CollapsedAccordion = Template.bind({})
CollapsedAccordion.args = {title: 'Collapsed Accordion', collapsed: true}

export const NonCollapsedAccordion = Template.bind({})
NonCollapsedAccordion.args = {
    title: 'Non Collapsed Accordion',
    collapsed: false,
}

export const AccordionWithClickableItems = () => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <Accordion
            items={[
                {title: 'First', value: '1'},
                {title: 'Second', value: '2'},
                {title: 'Third', value: '3'},
                {title: 'Fourth', value: '4'},
            ]}
            collapsed={collapsed}
            title={'AccordionWithClickableItems'}
            changeCollapsed={() => setCollapsed(!collapsed)}
            itemClickCallback={(value: string) => alert(value)}/>
    )
}
