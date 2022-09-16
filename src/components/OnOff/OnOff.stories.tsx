import {ComponentMeta, ComponentStory} from "@storybook/react";
import ControlledOnOff from "../ControlledOnOFF/ControlledOnOff";
import {useState} from "react";


export default {
    title: 'ControlledOnOff',
    component: ControlledOnOff

} as ComponentMeta<typeof ControlledOnOff>

const Template: ComponentStory<typeof ControlledOnOff> = (args) => <ControlledOnOff {...args}/>

export const TurnedOnTemplate = Template.bind({});
TurnedOnTemplate.args = { isOn: false, changeIsOn: (value) => value }

export const TurnedOn: ComponentStory<typeof ControlledOnOff> = () => <ControlledOnOff isOn={true} changeIsOn={value => value}/>
export const TurnedOff: ComponentStory<typeof ControlledOnOff> = () => <ControlledOnOff isOn={false} changeIsOn={value => value}/>
export const ModifyingOff: ComponentStory<typeof ControlledOnOff> = () => {
    const [isOn, setIsOn] = useState<boolean>(false);
    return <ControlledOnOff isOn={isOn} changeIsOn={value => setIsOn(value)} />
}