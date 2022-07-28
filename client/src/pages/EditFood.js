import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const EditFood = () => {
  const [burger, setBurger] = useState({})
  const { foodId } = useParams()

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {}
    formData.forEach((value, key) => (data[key] = value))
    await axios.put(`http://localhost:3001/burgers/${foodId}`, data)
    navigate('/admin')
  }

  const getBurger = async () => {
    const res = await axios.get(`http://localhost:3001/burgers/${foodId}`)
    setBurger(res.data)
  }

  useEffect(() => {
    getBurger()
  }, [])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          required
          defaultValue={burger.name}
        ></input>
        <label>Description</label>
        <textarea
          name="description"
          required
          defaultValue={burger.description}
        ></textarea>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default EditFood
