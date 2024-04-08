import React from 'react'
import "../App.css";

const Home = () => {
  return (
    <div className=' items-center justify-center'>
          <div className='flex items-left justify-center mt-[5rem] flex-col '>
      <h1 className='text-2xl mb-4 text-center'>
        This Application is developed by using the following Tech Stack:
      </h1> 
    </div>
    <div className='text-center'>
        <ul>
          1: MERN STACK <br/>
          2: Tailwind CSS for styling <br/>
          3: bcrypt <br/>
          4: Express js <br/>
          5: Nodemon <br/>
          6: MongoDB <br/>
        </ul>
    </div>
    </div>
    
  )
}

export default Home
