import React from 'react'
import Navbar from './Navbar'

function details() {
  return (
    <div>
      <Navbar/>
       <div className='h-10 bg-gray-900  min-w-[300px] min-h-screen p-5'>
         <div className='flex '>
            <img className='w-[250px] h-[250px] rounded-2xl mt-2' src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww" alt="" srcset="" />
         </div>
         <div className='flex justify-center text-white bg-gray-900 flex-col mt-3'>
         <h2>User-Name:yash gupta</h2>
         <p>Description:Spftware eng Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur in est praesentium natus, nam suscipit enim ex temporibus ratione impedit eos laudantium? loren33</p>
          <h3>Location: Nashik</h3>
          <button className='h-6 w-[100px] bg-red-500 rounded-lg size-3'>View More</button>
         </div>
        
        </div>
    </div>
  )
}

export default details
