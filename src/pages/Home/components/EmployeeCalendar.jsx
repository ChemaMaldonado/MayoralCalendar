import React from 'react'
import calendarDays from '../../../assets/data/calendar.json'
import { useCalendarDispatch, useCalendarState } from '../../../services/contexts/calendar/Calendar'
import { HOLIDAYS_COLOR, HOLIDAYS_NUMBER, NOT_SELECTED_COLOR, SELECTED_COLOR, WEEKEND_COLOR } from '../../../utils/constants'
import { getNumberOfMonth } from '../utils'

const EmployeeCalendar = (props) => {
  const { employeeId } = props;
  const { month, holidays } = useCalendarState();
  const dispatchCalendar = useCalendarDispatch();
  const getBackgroundColor = (employeeId, dayData, dayNumber) => {
    const number = (dayNumber+1).toString().padStart(2, '0');
    const employeeNumber = (employeeId+1).toString().padStart(2, '0');
    const id = number+employeeNumber+month;

    const selectedHoliday = {
      id,
    }
    const isActive = holidays.filter((holiday) => holiday.id === selectedHoliday.id).length;
    if (isActive) return SELECTED_COLOR;
    if (dayData.tipoId === 'S') return WEEKEND_COLOR;
    if (dayData.tipoId === 'F') return HOLIDAYS_COLOR;
    return NOT_SELECTED_COLOR;
  }
  const getEmployeeDays = (employeeId) => {
    const days = holidays.filter((holiday) => holiday.id.slice(2, 4) === (employeeId+1).toString().padStart(2, '0')).length;
    return HOLIDAYS_NUMBER-days;
  }
  const enableHoliday = (employeeId, dayId) => {
    const number = (dayId+1).toString().padStart(2, '0');
    const employeeNumber = (employeeId+1).toString().padStart(2, '0');
    const id = number+employeeNumber+month;

    const selectedHoliday = { id };
    const isAlreadySelected = holidays.filter((holiday) => holiday.id === selectedHoliday.id).length;
    const vacances = getEmployeeDays(employeeId);
    const reset = (vacances === 1) && (isAlreadySelected === 0);
    const block = (vacances === 0) && (isAlreadySelected === 0);
    if (!isAlreadySelected && !block) {
      dispatchCalendar({
        type: 'decrementDays',
        payload: {
          employeeId,
          selectedDays: reset ? 0 : vacances - 1,
        }
      })
      return dispatchCalendar({ 
        type: 'setHolidays', 
        payload: { 
          holiday: {
            id,
          }
        }});
    }
    if (!block) {
      dispatchCalendar({
        type: 'incrementDays',
        payload: {
          employeeId,
          selectedDays: vacances + 1,
        }
      })
      return dispatchCalendar({ 
        type: 'resetHolidays', 
        payload: { 
          holiday: {
            id,
          }
        }});
    }
  }

  return (
    <div className='calendar-holidays-content'>
      {calendarDays.datos
        .filter((day) => day.fecha.toString().includes(`2021${getNumberOfMonth(month)}`))
        .map((day, dayId) => (
        <button
          key={dayId}
          className="calendar-holidays-button"
          style={{ backgroundColor: `${getBackgroundColor(employeeId, day, dayId)}` }}
          disabled={day.tipoId !== '' }
          onClick={() => enableHoliday(employeeId, dayId)}
        />
      ))}
    </div>
  )
}

export default EmployeeCalendar