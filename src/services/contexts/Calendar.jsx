import React, { useEffect } from 'react';
import { storageInLocal, loadFromLocal } from '../../pages/Home/utils';
const CalendarState = React.createContext();
const CalendarDispatch = React.createContext();

const CalendarReducer = (state, action) => {
  switch (action.type) {
    case 'setMonth':
      return {
        ...state,
        month: action.payload.month,
      };
    case 'setHolidays':
      const filteredHolidays = [...state.holidays, action.payload.holiday];
      if (filteredHolidays.length) storageInLocal('holidays', filteredHolidays)
      return {
        ...state,
        holidays: filteredHolidays,
      };
    case 'resetHolidays': {
      const filteredHolidays = state.holidays.filter((holiday) => holiday.id !== action.payload.holiday.id);
      if (filteredHolidays.length) storageInLocal('holidays', filteredHolidays)
      return {
        ...state,
        holidays: filteredHolidays,
      };
    }
    case 'incrementDays': {
      const filteredVacances = [...state.vacances.filter((vacance) => vacance.employeeId !== action.payload.employeeId), action.payload];
      if (filteredVacances.length) storageInLocal('vacances', filteredVacances)
      return {
        ...state,
        vacances: filteredVacances,
      };
    }
    case 'decrementDays': {
      const filteredVacances = [...state.vacances.filter((vacance) => vacance.employeeId !== action.payload.employeeId), action.payload];
      if (filteredVacances.length) storageInLocal('vacances', filteredVacances)
      return {
        ...state,
        vacances: filteredVacances,
      };
    }

    case 'loadDefaultFromStorage': {
      const initialVacances = loadFromLocal('vacances');
      const initialHolidays = loadFromLocal('holidays');
      return {
        ...state,
        vacances: initialVacances,
        holidays: initialHolidays,
      }
    }
    
      
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const CalendarProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(CalendarReducer, {
    month: 'January',
    holidays: [],
    vacances: [],
  });

  useEffect(() => {
    const dataExists = localStorage.getItem('vacances') && localStorage.getItem('holidays');
    if (dataExists) dispatch({ type: 'loadDefaultFromStorage' })
  }, []);

  return (
    <CalendarState.Provider value={state}>
      <CalendarDispatch.Provider value={dispatch}>
        {children}
      </CalendarDispatch.Provider>
    </CalendarState.Provider>
  );
};

const useCalendarState = () => {
  const context = React.useContext(CalendarState);
  if (context === undefined) {
    throw new Error('Calendar context must be used within a provider');
  }
  return context;
};

const useCalendarDispatch = () => {
  const context = React.useContext(CalendarDispatch);
  if (context === undefined) {
    throw new Error('Calendar dispatch must be used within a provider');
  }
  return context;
};

export { CalendarProvider, useCalendarState, useCalendarDispatch };

