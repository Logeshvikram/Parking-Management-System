import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate=useNavigate()
  return (
    <div className='home'>
        <h1 className='h1'>Hiii Buddy!!!</h1><br/>
        <h2>ARE YOU READY TO PARK YOUR VEHICLE</h2> <br/>
        <button onClick={()=>navigate('user',{replace:true})} className='btn'>OK</button>
        <Link to='user'></Link>
    </div>
  )
}
