import './App.css'
import { Routes, Route } from 'react-router-dom'
const orderController = require('./controllers/OrderController.js')

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/review" element={<Review />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  )
}

export default App
