import React from 'react';
const CalendarState = React.createContext();
const CalendarDispatch = React.createContext();

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

export { CalendarState, CalendarDispatch, useCalendarState, useCalendarDispatch };

