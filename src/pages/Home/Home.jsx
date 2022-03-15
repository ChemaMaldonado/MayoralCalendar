import React from 'react'
import Header from '../../components/Header';
import Calendar from './components/Calendar';
import { CalendarProvider } from '../../services/contexts/Calendar';
import '../../scss/calendar.scss';
import '../../scss/employee.scss';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div className='main-container'>
      <CalendarProvider>
        <Header />
        <Calendar />
        <Footer />
      </CalendarProvider>
    </div>
  )
}

export default Home