import React from 'react'
import EmployeeIcon from '../../../assets/images/user-icon.png'
import { useCalendarState } from '../../../services/contexts/calendar/Calendar';
import { HOLIDAYS_NUMBER } from '../../../utils/constants';

const EmployeeCard = (props) => {
  const { employee, employeeId } = props;
  const { vacances } = useCalendarState();
  const getVacancesDays = (employeeId) => {
    const vacancesFiltered = vacances.filter((vac) => vac.employeeId === employeeId);
    return vacancesFiltered[0]?.selectedDays;
  }
  return (
    <div className='calendar-content'>
      <img alt="calendar-icon" className='employee-img' src={EmployeeIcon} />
      <p className='employee-name'>{`${employee?.first_name} ${employee?.last_name}`}</p>
      <div className='employee-holidays-count'>
        <p>{getVacancesDays(employeeId) ? getVacancesDays(employeeId) : getVacancesDays(employeeId) === 0 ? 0 : HOLIDAYS_NUMBER}</p>
        <p>/</p>
        <p>{HOLIDAYS_NUMBER}</p>
      </div>
    </div>
  )
}

export default EmployeeCard