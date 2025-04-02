import React from 'react'

function profile() {
  return (
    <div className="flex justify-center items-center">
        <div className='h-10 bg-white min-w-[300px] min-h-[400px] mb-4 mt-4 rounded-md '>
         <div className='flex justify-center items-center'>
            <img className='w-[250px] h-[250px] rounded-2xl mt-5' src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww" alt="" srcset="" />
         </div>
         <div className='flex justify-center items-center flex-col mt-3'>
         <h2>User-Name:yash gupta</h2>
         <p>Description:Spftware eng</p>
          <h3>Location: Nashik</h3>
          <button className='h-6 w-[100px] bg-red-500 rounded-lg size-3'>View More</button>
         </div>
        
        </div>
    </div>
  )
}

export default profile
