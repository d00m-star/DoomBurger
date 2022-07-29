import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Admin = (props) => {
  const [burgers, setBurgers] = useState([])
  //Deletes burgers/items by id, uses window.confirm to get a truthy/falsey
  const deleteBurger = async (id) => {
    const willDelete = window.confirm('Are you sure?')
    if (!willDelete) {
      return
    }
    await axios.delete(`http://localhost:3001/burgers/${id}`)
    getBurgers()
  }

  //Grabs Burgers
  const getBurgers = async () => {
    const res = await axios.get(`http://localhost:3001/burgers`)
    setBurgers(res.data)
  }
  useEffect(() => {
    getBurgers()
  }, [])

  //Renders admin page with all burgers/items
  return (
    <div className="admin-items">
      <Link to="/admin/foods/add">Add New Item</Link>
      {burgers.map((burger) => (
        <div key={burger._id}>
          <h1>{burger.name}</h1>
          <button type="button" onClick={() => deleteBurger(burger._id)}>
            Delete
          </button>
          <div className="edit-button">
            <Link to={`/admin/foods/${burger._id}/edit`}>Edit</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Admin
