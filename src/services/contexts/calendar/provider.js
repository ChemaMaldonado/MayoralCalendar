import React, { useEffect } from 'react';
import { CalendarDispatch, CalendarState } from './Calendar';
import { CalendarReducer } from './reducer';

const CalendarProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(CalendarReducer, {
    month: 'January',
    holidays: [],
    vacances: [],
  });

  useEffect(() => {
    dispatch({ type: 'loadDefault' })
  }, []);

  return (
    <CalendarState.Provider value={state}>
      <CalendarDispatch.Provider value={dispatch}>
        {children}
      </CalendarDispatch.Provider>
    </CalendarState.Provider>
  );
};

export { CalendarProvider };