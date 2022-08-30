import React, {useState} from 'react';

type OnOffPropsType = {

}

const OnOff = ({}:OnOffPropsType) => {
    const [isOn, setIsOn] = useState<boolean>(false);

    const changeIsOn = () => {
        setIsOn(!isOn);
    }

    return (
        <div className='on-off'>
            <div onClick={changeIsOn} className={'on-off__left' + (isOn ? ' active' : '')}>On</div>
            <div onClick={changeIsOn} className={'on-off__right' + (!isOn ? ' active' : '')}>Off</div>
            <div className={"indicator" + (isOn ? ' active' : '')}></div>
        </div>
    );
};

export default OnOff;