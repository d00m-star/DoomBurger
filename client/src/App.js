import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './components/Home'
import Header from './components/Header'
import Menu from './components/Menu'
import Review from './components/Review'
import axios from 'axios'

function App() {
  const [burgers, setBurgers] = useState({})
  const [order, setOrder] = useState([])

  useEffect(() => {
    const getBurgers = async () => {
      const res = await axios.get(`https://localhost:3001/menu`)
      setBurgers(res.data)
      console.log(getBurgers)
    }
  }, [])

  useEffect(() => {
    const getOrder = async () => {
      const res = await axios.get(`https://localhost:3001/menu`)
      setOrder(res.data)
      console.log(getOrder)
    }
  }, [order])

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
          {/* <Route path="/order" element={<Order />} /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App
