import React from 'react';

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
      return {
        ...state,
        holidays: [...state.holidays, action.payload.holiday],
      };
    case 'resetHolidays': {
      return {
        ...state,
        holidays: state.holidays.filter((holiday) => holiday.id !== action.payload.holiday.id),
      };
    }
    case 'incrementHolidays': {
      return {
        ...state,
        days: state.days.filter((day) => (day.employeeId === action.payload.employeeId) && day.vacances + 1),
      };
    }
    case 'decrementDays': {
  
      return {
        ...state,
        vacances: [...state.vacances.filter((vacance) => vacance.employeeId !== action.payload.employeeId), action.payload],
      };
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

