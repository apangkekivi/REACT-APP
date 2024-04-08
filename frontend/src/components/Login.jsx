import React, { useState } from 'react'
import "../App.css";
import { Link } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const [data, setData] = useState({
    name:'',
    password:'',
  })

const loginUser = async(e) => {
  e.preventDefault()
  const {name, password} = data
  try {
    const {data} = await axios.post('/login', {
      name,
      password
    });

    if(data.error) {
      toast.error(data.error)
    } else {
      setData({});
      navigate('/')
    }

  } catch (error) {
    
  }
}

  return (
    <div className="flex justify-center items-center h-full mt-[7rem]">
      <form className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={loginUser}>
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
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-3 rounded focus:outline-none focus:shadow-outline" type="submit">
            Login
          </button>
          
        </div>
        <span>Don't have an account yet? <Link className='text-[blue]' to='/register'>Register Now</Link></span>
      </form>
    </div>
  )
}

export default Login
