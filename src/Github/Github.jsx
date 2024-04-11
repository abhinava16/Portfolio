import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData()

  // const [data, useData] = useState([])

  // useEffect(() => {
  //   fetch('https://api.github.com/users/abhinava16')
  //   .then((response)=>response.json())
  //   .then(data=> {
  //     console.log(data)
  //     useData(data)
  //   })
  // }, [])
  

  return (
    <div className='text-center text-white bg-gray-700 text-3xl px-4 py-3'>My Github Name: {data.name}
    <img src={data.avatar_url} alt='my_github_profile_pic' width='300' height='300' className=' p-4'/>
    </div>
  )
}

export default Github

export const githubDataLoader = async () => {
  const response = await fetch('https://api.github.com/users/abhinava16')
  return response.json()
}