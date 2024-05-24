import axios from 'axios'
import React, { useState } from 'react'

export default function Login() {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handleLogin=(e)=>{
        e.preventDefault()
        
    }
  return (
    <div>
        <label>E-Mail</label><br/>
        <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
        <label>Password</label><br/>
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}
