import React  from 'react'
import '../scss/header.scss'
import CalendarImg from '../assets/images/calendar-icon.png';
import { useCalendarDispatch } from '../services/contexts/calendar/Calendar';
import { HEADER_TEXT, months } from '../utils/constants';

const Header = () => {
  const dispatchCalendar = useCalendarDispatch();
  const handleMonth = (e) => dispatchCalendar({ type: 'setMonth', payload: { month: e.target.value }});
  return (
    <>
      <div className='header'>
        <img alt="header-img" className='header-img' src={CalendarImg} />
        <p className='header-text'>{HEADER_TEXT}</p>
        <img alt="header-img" className='header-img' src={CalendarImg} />
      </div>
      <select 
        onChange={handleMonth}
        className="month-selector"
      >
          {months.map((month) => (
            <option key={month} value={month}>{month}</option>
          ))}
      </select>
    </>
  )
}

export default Header