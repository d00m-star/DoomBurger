import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Menu from './pages/Menu'
import Review from './pages/Review'
import Admin from './pages/Admin'
import AddFood from './pages/AddFood'
import EditFood from './pages/EditFood'
import axios from 'axios'

function App() {
  // const handleClick = (e) => {
  //   return e.target.id
  // }

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/review" element={<Review />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/foods/add" element={<AddFood />} />
          <Route path="/admin/foods/:foodId/edit" element={<EditFood />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
