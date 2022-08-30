import React, {useState} from "react";

type RatingPropsType = {

}

export function UncontrolledRating(props: RatingPropsType) {

    const [value, setValue] = useState<number>(0);

    const changeValue = (starNumber: number) => {
        if (starNumber === value) setValue(0);
        else setValue(starNumber);
    }

    return (
        <div>
            <Star starNumber={1} changeValue={changeValue} selected={value > 0}/>
            <Star starNumber={2} changeValue={changeValue} selected={value > 1}/>
            <Star starNumber={3} changeValue={changeValue} selected={value > 2}/>
            <Star starNumber={4} changeValue={changeValue} selected={value > 3}/>
            <Star starNumber={5} changeValue={changeValue} selected={value > 4}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    starNumber: number
    changeValue: (starNumber: number) => void
}

function Star(props: StarPropsType) {
    const onClickHandler = () => {
        props.changeValue(props.starNumber);
    }

    return (
        <span onClick={onClickHandler}>
            {props.selected
                ? <span><b>Star </b></span>
                : <span>Star </span>}
        </span>
    )
}