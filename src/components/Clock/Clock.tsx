import React, {useEffect, useState} from 'react';
import s from './Clock.module.css'

type PropsType = {}


const formatToTwoDigitsTime = (time: number) => time < 10 ? '0' + time : time.toString()
function formatHoursTo12(hours: number) {
  return hours % 12 || 12;
}

const Clock: React.FC<PropsType> = (props) => {

  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])


  const hours = formatToTwoDigitsTime(date.getHours())
  const minutes = formatToTwoDigitsTime(date.getMinutes())
  const seconds = formatToTwoDigitsTime(date.getSeconds())

  const hoursArrowRotateDegrees = (formatHoursTo12(date.getHours()) * 60 * 60 + date.getMinutes() * 60 + date.getSeconds()) / 120;
  const minutesArrowRotateDegrees = (date.getMinutes() * 60 + date.getSeconds()) / 10;
  const secondsArrowRotateDegrees = date.getSeconds() * 6;


  return (
    <div>
      <div>
        <span>{hours}</span>:
        <span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <div className={s.analogClock}>
        <div className={s.digits}>
          <span className={`${s.digit} ${s.twelve}`} >12</span>
          <span className={`${s.digit} ${s.one}`} >1</span>
          <span className={`${s.digit} ${s.two}`} >2</span>
          <span className={`${s.digit} ${s.three}`} >3</span>
          <span className={`${s.digit} ${s.four}`} >4</span>
          <span className={`${s.digit} ${s.five}`} >5</span>
          <span className={`${s.digit} ${s.six}`} >6</span>
          <span className={`${s.digit} ${s.seven}`} >7</span>
          <span className={`${s.digit} ${s.eight}`} >8</span>
          <span className={`${s.digit} ${s.nine}`} >9</span>
          <span className={`${s.digit} ${s.ten}`} >10</span>
          <span className={`${s.digit} ${s.eleven}`} >11</span>
        </div>
        <div className={s.minutesArrow} style={{transform: `translateX(-50%) rotate(${minutesArrowRotateDegrees}deg)`}}></div>
        <div className={s.hoursArrow} style={{transform: `translateX(-50%) rotate(${hoursArrowRotateDegrees}deg)`}}></div>
        <div className={s.secondsArrow} style={{transform: `translateX(-50%) rotate(${secondsArrowRotateDegrees}deg)`}}></div>
        <div className={s.centerCircle}></div>
      </div>
    </div>
  );
};

export default Clock;