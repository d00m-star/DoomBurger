import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddFood = () => {
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {}
    formData.forEach((value, key) => (data[key] = value))
    await axios.post(`http://localhost:3001/burgers`, data)
    navigate('/admin')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" required></input>
        <label>Description</label>
        <textarea name="description" required></textarea>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default AddFood
