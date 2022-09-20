import React, {useState} from 'react';
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

const Select:React.FC<SelectPropsType> = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const openOptions = () => {
        setIsOpen(true)
    }

    const closeOptions = () => {
        setIsOpen(false)
    }

    const selectValueHandler = (value: any) => {
        props.onChange(value);
        closeOptions();
    }



    return (
        <div className={styles.select}>
            <div className={styles.selectedValue} onClick={openOptions}>
                {props.items.find(i => i.value === props.value)?.title}
            </div>
            {isOpen && <div
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