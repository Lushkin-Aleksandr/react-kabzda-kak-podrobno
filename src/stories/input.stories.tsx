import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'UncontrolledInput'

}


export const UncontrolledInput = () => <input/>

export const UncontrolledInputWithState = () => {
    const [inputValue, setInputValue] = useState<string>('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
    }

    return (
        <>
            <input
                value={inputValue}
                onChange={onChange}/> - {inputValue}
        </>
    )
}

export const UncontrolledInputWithButton = () => {
    const [value, setValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const onClick = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }

    return (
        <>
            <input
                ref={inputRef}/>
            <button onClick={onClick}>Get value</button> - {value}
        </>
    )
}