import React from 'react'
import { useCalendarDispatch } from '../services/contexts/Calendar';

const Footer = () => {
  const dispatchCalendar = useCalendarDispatch();
  const removeLocalStorage = () => {
    localStorage.removeItem('vacances');
    localStorage.removeItem('holidays');
    dispatchCalendar({ type: 'loadDefault' });
  }

  return (
    <div className='footer'>
      <button className='footer-button' onClick={removeLocalStorage}> Reset calendar</button>
    </div>
  )
}

export default Footer