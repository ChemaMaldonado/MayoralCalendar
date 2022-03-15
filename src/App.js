import './scss/main.scss';
import Header from './components/Header';
import Calendar from './components/Calendar';
import { CalendarProvider } from './contexts/Calendar';

function App() {
  return (
    <div className='main-container'>
      <CalendarProvider>
        <Header />
        <Calendar />
      </CalendarProvider>
    </div>
  );
}

export default App;
