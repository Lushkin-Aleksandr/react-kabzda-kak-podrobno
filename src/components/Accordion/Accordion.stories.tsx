import {ComponentMeta, ComponentStory} from "@storybook/react";
import {useState} from "react";
import Accordion from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: { changeCollapsed: {action: 'clicked to change collapsed'}}
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args}/>
export const CollapsedAccordion = Template.bind({})
CollapsedAccordion.args = {title: 'Collapsed Accordion', collapsed: true}

export const NonCollapsedAccordion = Template.bind({})
NonCollapsedAccordion.args = {title: 'Non Collapsed Accordion', collapsed: false}
