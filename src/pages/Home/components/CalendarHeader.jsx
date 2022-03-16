import React from 'react'
import { CALENDAR_HEADER_TEXT } from '../../../utils/constants'
import calendarDays from '../../../assets/data/calendar.json';
import { useCalendarState } from '../../../services/contexts/calendar/Calendar';
import { getNumberOfMonth } from '../utils';

const CalendarHeader = () => {
  const { month } = useCalendarState();

  return (
    <div className='calendar-header'>
      <div className='calendar-header-content'>
        <p className='employee-name'>{CALENDAR_HEADER_TEXT}</p>
      </div>
      <div className='calendar-header-days'>
        {calendarDays.datos
          .filter((day) => day.fecha.toString().includes(`2021${getNumberOfMonth(month)}`))
          .map((day) => (
          <p
            key={day.fecha}
            className="calendar-header-days-content"
          >{(day.fecha).toString().slice(-2)}</p>
        ))}
      </div>
    </div>
  )
}

export default CalendarHeader