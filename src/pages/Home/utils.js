import moment from "moment";

const getNumberOfMonth = (month) => {
  const monthNumber = moment().month(month).format("M");
  return ('0' + monthNumber).slice(-2);
};

const sortEmployeeNamesAsc = (a, b) => {
  if (a.first_name > b.first_name) return 0;
  return -1;
}

const storageInLocal = (key, obj) => {
  localStorage[key] = JSON.stringify(obj);
}

const loadFromLocal = (key) => {
  return JSON.parse(localStorage[key]);
}

export { 
  getNumberOfMonth, 
  sortEmployeeNamesAsc, 
  storageInLocal, 
  loadFromLocal 
};