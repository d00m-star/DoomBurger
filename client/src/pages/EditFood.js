import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
//Change Burger/Item info
const EditFood = () => {
  const [burger, setBurger] = useState({})
  const { foodId } = useParams()
  //Grabs FormData and replaces with inputs, & takes you back to admin page
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {}
    formData.forEach((value, key) => (data[key] = value))
    await axios.put(`http://localhost:3001/burgers/${foodId}`, data)
    navigate('/admin')
  }
  //Grabs burger by Id
  const getBurger = async () => {
    const res = await axios.get(`http://localhost:3001/burgers/${foodId}`)
    setBurger(res.data)
  }

  useEffect(() => {
    getBurger()
  }, [])

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-edit">
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
