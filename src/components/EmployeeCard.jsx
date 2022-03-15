import React from 'react'
import EmployeeIcon from '../assets/images/user-icon.png'
import '../scss/employee.scss'
import Days from './Days'
import data from '../assets/data/employees.json'

const EmployeeCard = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
      { data.data.map((employee) => (
        <>
          <div className='employee-container'>
            <img alt="calendar-icon" className='employee-img' src={EmployeeIcon} />
            <p className='employee-name'>Employee name</p>
            <div className='employee-holidays-count'>
              <p>22</p>
              <p>/</p>
              <p>22</p>
            </div>
          </div>
          <Days />
        </>
      ))}
      
    </div>
  )
}

export default EmployeeCard