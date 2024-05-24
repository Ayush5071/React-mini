import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='w-full h-20 bg-gray-600 text-white text-5xl font-semibold flex justify-center items-center'>
      User : {userid}
    </div>
  )
}

export default User
