import {ComponentMeta, ComponentStory} from "@storybook/react";
import Select from "./Select";
import {action} from "@storybook/addon-actions";
import {useState} from "react";

export default {
    title: 'Select',
    component: Select,
    args: {
    }

} as ComponentMeta<typeof Select>


export const SelectExample = () => {
    const [value, setValue] = useState('1');

    return (
        <Select
            value={value}
            onChange={(value) => setValue(value)}
            items={[
                {title: 'Bmw', value: '1'},
                {title: 'Mercedes', value: '2'},
                {title: 'Audi', value: '3'},
            ]}/>
    )
}

