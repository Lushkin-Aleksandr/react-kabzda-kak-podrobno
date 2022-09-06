import React from 'react';

type ControlledOnOffPropsType = {
    isOn: boolean
    changeIsOn: (value: boolean) => void
}

const ControlledOnOff:React.FC<ControlledOnOffPropsType> = (props) => {
    return (
        <div className='on-off'>
            <div onClick={() => props.changeIsOn(true)} className={'on-off__left' + (props.isOn ? ' active' : '')}>On</div>
            <div onClick={() => props.changeIsOn(false)} className={'on-off__right' + (!props.isOn ? ' active' : '')}>Off</div>
            <div className={"indicator" + (props.isOn ? ' active' : '')}></div>
        </div>
    );
};

export default ControlledOnOff;