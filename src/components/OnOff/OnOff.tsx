import React, {useState} from 'react';

type OnOffPropsType = {
    changeIsOn: (value: boolean) => void
}


const OnOff = (props:OnOffPropsType) => {
    const [isOn, setIsOn] = useState<boolean>(false);

    const changeIsOn = (value: boolean) => {
        setIsOn(value);
        props.changeIsOn(value)
    }

    return (
        <div className='on-off'>
            <div onClick={() => changeIsOn(true)} className={'on-off__left' + (isOn ? ' active' : '')}>On</div>
            <div onClick={() => changeIsOn(false)} className={'on-off__right' + (!isOn ? ' active' : '')}>Off</div>
            <div className={"indicator" + (isOn ? ' active' : '')}></div>
        </div>
    );
};

export default OnOff;