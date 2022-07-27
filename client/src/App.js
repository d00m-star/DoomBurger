import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Menu from './pages/Menu'
import Review from './pages/Review'
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
        </Routes>
      </main>
    </div>
  )
}

export default App
