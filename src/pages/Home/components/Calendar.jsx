import React from 'react'
import data from '../../../assets/data/employees.json'
import CalendarHeader from './CalendarHeader'
import { sortEmployeeNamesAsc } from '../utils'
import EmployeeCard from './EmployeeCard'
import EmployeeCalendar from './EmployeeCalendar'

const Calendar = () => {
  return (
    <div className='calendar'>
      <CalendarHeader />
      {data.data
        .sort(sortEmployeeNamesAsc)
        .map((employee, employeeId) => (
          <div key={employeeId} className="calendar-employees-content">
            <EmployeeCard employee={employee} employeeId={employeeId} />
            <EmployeeCalendar employeeId={employeeId} />
          </div>
        ))}
    </div>
  )
}

export default Calendar