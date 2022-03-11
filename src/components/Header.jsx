import React from 'react'
import '../scss/header.scss'
import CalendarImg from '../assets/images/calendar-icon.png';

const Header = () => {
  return (
    <div className='header'>
      <img alt="calendar-icon" className='calendar-img' src={CalendarImg} />
      <h1>Calendar</h1>
      <img alt="calendar-icon" className='calendar-img' src={CalendarImg} />
    </div>
  )
}

export default Header