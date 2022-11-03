import {ComponentMeta, ComponentStory} from "@storybook/react";
import Accordion from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        items: {
            description: 'Elements of Accordion'
        },
        changeCollapsed: {
            description: 'Calling after click on title'
        },
        collapsed: {
            description: 'Collapse status'
        },
        itemClickCallback: {
            description: 'Calling after click on Accordion item'
        }
    },
    args: {
        title: 'Accordion',
        items: [
            {title: 'First', value: '1'},
            {title: 'Second', value: '2'},
            {title: 'Third', value: '3'},
            {title: 'Fourth', value: '4'},
        ],
        changeCollapsed: action('clicked to change collapsed'),
        itemClickCallback: action(`clicked to item.`)
    },


} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args}/>

export const Collapsed = Template.bind({})
Collapsed.args = {title: 'Collapsed Accordion', collapsed: true}

export const NonCollapsed = Template.bind({})
NonCollapsed.args = {
    title: 'Non Collapsed Accordion',
    collapsed: false,
}




