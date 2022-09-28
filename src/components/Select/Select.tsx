import React, {RefObject, useEffect, useRef, useState, KeyboardEvent, useReducer} from 'react';
import styles from './Select.module.css'
import {CLOSE_OPTIONS, OPEN_OPTIONS, selectReducer} from "./selectReducer";

type ItemType = {
    title: string
    value?: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}


const Select: React.FC<SelectPropsType> = (props) => {
    const [state, dispatch] = useReducer(selectReducer, { isOpen: false })

    useEffect(() => {
        selectBodyRef.current?.focus()
    }, [state.isOpen])
    const selectBodyRef = useRef() as RefObject<HTMLDivElement>;

    const openOptions = () => {
        dispatch({type: OPEN_OPTIONS})

    }

    const closeOptions = () => {
        dispatch({type: CLOSE_OPTIONS})
    }

    const selectValueHandler = (value: any) => {
        props.onChange(value);
        closeOptions();
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        const valuesArr = props.items.map(i => i.value)
        const nextElementValue = valuesArr.indexOf(props.value) + 1 === valuesArr.length ? valuesArr[0] : valuesArr[valuesArr.indexOf(props.value) + 1];
        const prevElementValue = valuesArr.indexOf(props.value) - 1 === -1 ? valuesArr[valuesArr.length - 1] : valuesArr[valuesArr.indexOf(props.value) - 1];

        switch (e.key) {
            case 'ArrowUp':
                props.onChange(prevElementValue)
                break;
            case 'ArrowDown':
                props.onChange(nextElementValue)
                break;
            case 'Enter':
            case 'Escape':
                closeOptions();
                break

        }

    }

    return (
        <div className={styles.select}>
            <div className={styles.selectedValue} onClick={openOptions}>
                {props.items.find(i => i.value === props.value)?.title}
            </div>
            {state.isOpen && <div
                tabIndex={0}
                onKeyDown={handleKeyDown}
                ref={selectBodyRef}
                className={styles.selectItems}
                onBlur={closeOptions}>
                {props.items.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`${styles.selectItem} ${props.value === item.value ? styles.activeItem : ''}`}
                            onClick={() => selectValueHandler(item.value)}>{item.title}</div>
                    )
                })}
            </div>}
        </div>
    );
};

export default Select;