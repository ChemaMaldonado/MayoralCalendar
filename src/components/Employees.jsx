import React from 'react'
import '../scss/employee.scss'
import EmployeeCard from './EmployeeCard';

const Employees = () => {
  const items = [1,2,3,4,5,6,7,8,9,8,7,6,5,4,5,6];
  return (
    <div className='employees-container'>
      {items.map(() => <EmployeeCard />)}
    </div>
  )
}

export default Employees