import React, { useState } from 'react'
import "../App.css";
import { Link } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '',
    password:'',
    address:''
  })

  const registerUser = async (e) =>{
    e.preventDefault()
    const {name, password, address} = data
    try {
      const {data} = await axios.post('/register', {
        name, password, address
      })
      if(data.error) {
        toast.error(data.error)
      } else {
        setData({})
        toast.success('Login Successful, welcome!')
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex justify-center items-center h-full mt-[7rem]">
      <form className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={registerUser}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" required="required" placeholder="Enter your name" value={data.name} onChange={(e) => setData({...data, name:e.target.value})} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" required="required" placeholder="Enter your password" value={data.password} onChange={(e) => setData({...data, password:e.target.value})} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Address
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" required="required" placeholder="Enter your address" value={data.address} onChange={(e) => setData({...data, address:e.target.value})} />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-3 rounded focus:outline-none focus:shadow-outline" type="submit">
            Register
          </button>
        </div>
        <span>Already have an account? <Link className='text-[blue]' to='/login'>Login</Link></span>
      </form>
    </div>
  )
}

export default Register
