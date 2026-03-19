import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import EventDetails from './pages/EventDetails'
import BookTickets from './pages/BookTickets'
import MyTickets from './pages/MyTickets'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
    <BrowserRouter>
       <Navbar/>
     <Routes>
      
      <Route path='/' element={<Home/>} />
      <Route path="/eventdetails/:id" element={<EventDetails />} />
      <Route path='/bookticket' element={<BookTickets/>} />
      <Route path='/myticket'  element={<MyTickets/>} />
      <Route path='/login' element={<Login/>} />
       <Route
          path="/dashboard"
          element={
             <Dashboard/>
           
          }
        />
     </Routes>
     <Footer/>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App