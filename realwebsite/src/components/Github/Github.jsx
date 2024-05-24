import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Ayush5071')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })

    // },[])
  return (
    <div className='text-center m-4 bg-gray-500 text-white text-4xl p-4 '>
      Github Followers : {data.followers}
      <img className='w-72 h-full bg-cover ' src={data.avatar_url} alt="Github profile picture" />
    </div>
  )
}

export default Github
export const githubinfoloader = async ()=>{
   const response = await fetch ("https://api.github.com/users/Ayush5071");
   return response.json();
}
