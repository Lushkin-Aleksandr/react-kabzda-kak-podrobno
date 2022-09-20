import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'Input'
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
            <button onClick={onClick}>Get value</button>
            - {value}
        </>
    )
}

export const ControlledInput = () => {
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

export const ControlledCheckbox = () => {
    const [checkboxValue, setCheckboxValue] = useState<boolean>(false);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckboxValue(e.currentTarget.checked);
    }

    return (
        <>
            <input
                type={"checkbox"}
                checked={checkboxValue}
                onChange={onChange}/> - checked: {checkboxValue.toString()}
        </>
    )
}

export const ControlledSelect = () => {
    const [selectValue, setSelectValue] = useState<string>('none');

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(e.currentTarget.value);
    }

    return (
        <>
            <select
                value={selectValue.toString()}
                onChange={onChange}>
                <option value='none'>none</option>
                <option value="1">Moscow</option>
                <option value="2">Munich</option>
                <option value="3">Rome</option>
            </select> - {selectValue}
        </>
    )
}

