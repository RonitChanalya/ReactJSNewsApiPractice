import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='sticky top-0 backdrop-blur-2xl shadow-lg h-20 w-full grid grid-cols-3'>
            <div>

            </div>
            <h1 className='text-5xl flex items-center justify-center'>DAILY BULLETEN</h1>
            <div className='h-full flex items-center gap-2 justify-end px-10'>
              <button className='hover:bg-indigo-50 rounded px-5 py-2 cursor-pointer'>
                Sign Up
              </button>
              <button className='bg-indigo-200 rounded px-5 py-2 hover:bg-indigo-300 cursor-pointer'>
                Log In
              </button>
            </div>
        </div>
    </>
  )
}

export default Navbar