import { storageInLocal, loadFromLocal } from "../../../pages/Home/utils";

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

    case 'loadDefault': {
      const dataExists = localStorage.getItem('vacances') && localStorage.getItem('holidays');
      return {
        ...state,
        vacances: dataExists ? loadFromLocal('vacances') : [],
        holidays: dataExists ? loadFromLocal('holidays') : [],
      }
    }
    
      
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export { CalendarReducer };
