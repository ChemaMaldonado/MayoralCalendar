import React from 'react'
import moment from 'moment';
import '../scss/calendar.scss'
import '../scss/employee.scss'
import data from '../assets/data/employees.json'
import calendarDays from '../assets/data/calendar.json'
import EmployeeIcon from '../assets/images/user-icon.png'
import { useCalendarDispatch, useCalendarState } from '../contexts/Calendar'

const Calendar = () => {
  const { month, holidays, vacances } = useCalendarState();
  const dispatchCalendar = useCalendarDispatch();

  const getNumberOfMonth = () => {
    const monthNumber = moment().month(month).format("M");
    return ('0' + monthNumber).slice(-2);
  };

  console.log('holidays: ', holidays)
  const enableHoliday = (employeeId, dayId) => {
    const number = (dayId+1).toString().padStart(2, '0');
    const employeeNumber = (employeeId+1).toString().padStart(2, '0');
    const id = number+employeeNumber+month;

    const selectedHoliday = { id };
    const isAlreadySelected = holidays.filter((holiday) => holiday.id === selectedHoliday.id).length;
    const vacances = getEmployeeDays(employeeId);

    if (!isAlreadySelected) {
      dispatchCalendar({
        type: 'decrementDays',
        payload: {
          employeeId,
          selectedDays: vacances - 1,
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
    return dispatchCalendar({ 
      type: 'resetHolidays', 
      payload: { 
        holiday: {
          id,
        }
      }});
  }

  const getBackgroundColor = (employeeId, dayData, dayNumber) => {
    const number = (dayNumber+1).toString().padStart(2, '0');
    const employeeNumber = (employeeId+1).toString().padStart(2, '0');
    const id = number+employeeNumber+month;

    const selectedHoliday = {
      id,
    }
    const isActive = holidays.filter((holiday) => holiday.id === selectedHoliday.id).length;
    if (isActive) return 'green';
    if (dayData.tipoId === 'S') return 'red';
    if (dayData.tipoId === 'F') return 'blue';
    return 'white';
  }

  const getEmployeeDays = (employeeId) => {
    const days = holidays.map((holiday) => holiday.id.slice(2, 4) === employeeId.toString().padStart(2, '0')).length;
    return 22-days;
  }

  return (
    <div className='calendar'>
      <div className='calendar-header'>
        <div className='calendar-header-content'>
          <p className='employee-name'>Employees</p>
        </div>
        <div style={{ display: 'flex',  marginLeft: '50px' }}>
          {calendarDays.datos
            .filter((day) => day.fecha.toString().includes(`2021${getNumberOfMonth()}`))
            .map((day) => (
            <p
              style={{ height: '15px', minWidth: '20px', marginLeft: '10px', fontFamily: 'Cascadia code' }}
            >{(day.fecha).toString().slice(-2)}</p>
          ))}
        </div>
      </div>
      {console.log('vac: ', vacances)}
      {data.data
      .sort((a,b) => {
        if (a.first_name > b.first_name) return 0;
        return -1;
      })
      .map((employee, employeeId) => (
        <div style={{ minWidth: '100%', display: 'flex', alignItems: 'center', paddingLeft: '15px' }}>
          <div className='calendar-content'>
            <img alt="calendar-icon" className='employee-img' src={EmployeeIcon} />
            <p className='employee-name'>{`${employee.first_name} ${employee.last_name}`}</p>
            <div className='employee-holidays-count'>
              <p>{vacances.filter((day) => (day.employeeId === employeeId + 1) && day.selectedDays)}</p>
              <p>/</p>
              <p>22</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'end', marginLeft: '50px', with: '75%', minWidth: '75%' }}>
            {calendarDays.datos
              .filter((day) => day.fecha.toString().includes(`2021${getNumberOfMonth()}`))
              .map((day, dayId) => (
              <button
                style={{ 
                  height: '15px',
                  minWidth: '20px', 
                  marginLeft: '10px', 
                  backgroundColor: `${getBackgroundColor(employeeId, day, dayId)}` 
                }}
                disabled={day.tipoId !== '' }
                onClick={() => enableHoliday(employeeId, dayId)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Calendar