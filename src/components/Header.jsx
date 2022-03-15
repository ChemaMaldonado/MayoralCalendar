import React  from 'react'
import '../scss/header.scss'
import CalendarImg from '../assets/images/calendar-icon.png';
import { useCalendarDispatch } from '../contexts/Calendar';

const Header = () => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dispatchCalendar = useCalendarDispatch();
  return (
    <>
      <div className='header'>
        <img alt="calendar-icon" className='calendar-img' src={CalendarImg} />
        <h1 className='header-text'>Holidays calendar</h1>
        <img alt="calendar-icon" className='calendar-img' src={CalendarImg} />
      </div>
      <select 
      onChange={(e) => dispatchCalendar({ type: 'setMonth', payload: { month: e.target.value }})}
      style={{ width: '150px', padding: '5px', borderRadius: '5px', fontFamily: 'Cascadia Code', fontSize: '15px' }}>
        {months.map((month) => (
          <option value={month}>{month}</option>
        ))}
      </select>
      <br></br>
    </>
  )
}

export default Header