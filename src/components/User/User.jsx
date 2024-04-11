import React from 'react'
import { useParams } from 'react-router-dom'



function User() {

    const {userid} = useParams()

  return (
    <div className=' bg-orange-700 text-white text-center'><h1 className='text-3xl py-4'>User {userid}</h1></div>
  )
}

export default User