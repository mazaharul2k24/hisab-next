import React from 'react'
export async function generateMetadata({ params }) {
    return {
      title: 'Logout',
    }
  }
export default function page() {
  return (
    <>
    
    <div className="main w-[300px] mt-20 h-[100px] grid items-center text-center rounded-md  mx-auto border shadow-lg">
        <p>Are you sure? <button className='bg-red-500 hover:bg-red-600  text-white px-6 rounded-md shadow-lg shadow-gray-200'>Yes</button></p>
    </div>
    
    </>
  )
}
