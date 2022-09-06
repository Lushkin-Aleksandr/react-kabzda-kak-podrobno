import React from "react";

export type RatingValuesType = 0 | 1 | 2 | 3 | 4 | 5;


type RatingPropsType = {
    value: RatingValuesType
    changeValue: (value: RatingValuesType) => void
}

export function Rating(props: RatingPropsType) {


    return (
        <div>
            <Star onClick={() => props.changeValue(1)} selected={props.value > 0}/>
            <Star onClick={() => props.changeValue(2)} selected={props.value > 1}/>
            <Star onClick={() => props.changeValue(3)} selected={props.value > 2}/>
            <Star onClick={() => props.changeValue(4)} selected={props.value > 3}/>
            <Star onClick={() => props.changeValue(5)} selected={props.value > 4}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    onClick: () => void;
}

function Star(props: StarPropsType) {

    return (
        <span onClick={props.onClick}>
            {props.selected
                ? <b>Star </b>
                : 'Star '}
        </span>

    )
}