import React from 'react';

type OnOffPropsType = {
    isOn: boolean
    setIsOn: (value: boolean) => void
}

const OnOff = ({isOn, setIsOn}:OnOffPropsType) => {

    const onClickHandler = (value: boolean) => {
        setIsOn(value);
    }

    return (
        <div className='on-off'>
            <div onClick={() => onClickHandler(true)} className={'on-off__left' + (isOn ? ' active' : '')}>On</div>
            <div onClick={() => onClickHandler(false)} className={'on-off__right' + (!isOn ? ' active' : '')}>Off</div>
            <div className={"indicator" + (isOn ? ' active' : '')}></div>
        </div>
    );
};

export default OnOff;