import React, { useState } from 'react'
import '../scss/employee.scss';

const Days = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (e, idx) => {
    console.log('e:', e, 'idx: ', idx)
    setChecked(!checked)
  };
  const days = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  return (
    <div className='days-container'>
      {days.map((day, idx) => (
        <input
        style={{ width: '2rem', height: '2rem' }}
        type="checkbox"
        checked={checked}
        onChange={(e) => handleChange(e, idx)}
        />
      ))}
    </div>
  )
}

export default Days