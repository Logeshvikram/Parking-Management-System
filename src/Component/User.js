import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function User() {
    const[name,setName]=useState('')
    const[mobileNumber,setMobileNumber]=useState('')
    const[email,setEmail]=useState('')
    const[vehicleNumber,setVehicleNumber]=useState('')
    const[wheeler,setWheeler]=useState('')
    const[list,setList]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:3002/users')
        .then(res=>setList(res.data))
    },[])
    const handleSubmit=(x)=>{
        setList(list.filter(x=>x. name,x.mobileNumber,x.email,x.vehicleNumber,x.wheeler))
        axios.post('http://localhost:3002/users',{
            name,mobileNumber,email,vehicleNumber,wheeler
        })
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
        {
            if(wheeler==='twowheeler'){
                navigate('/TwoWheeler')
             }
            else if(wheeler==='fourwheeler'){
                navigate('/FourWheeler')
             }
             else{
                alert('page is not found')
             }
        }
    }
    return (
    <div className='user'>
    <h1 className='title'>Welcome to our parking!!!</h1>
        <form className='form1' onSubmit={handleSubmit} >
        <label className='label5'>Name</label><br/>
        <input className='inp6' type='name' value={name}  required onChange={(e)=>setName(e.target.value)}/><br/>
        <label className='label5'>Mobile number</label><br/>
        <input className='inp6' type='number' value={mobileNumber} required onChange={(e)=>setMobileNumber(e.target.value)}/><br/>
        <label className='label5'>E-mail</label><br/>
        <input className='inp6' type='email' value={email} required onChange={(e)=>setEmail(e.target.value)}/><br/>
        <label className='label5'>Vehicle number</label><br/>
        <input className='inp6' type='text' value={vehicleNumber} required onChange={(e)=>setVehicleNumber(e.target.value)}/><br/>
        <label className='label5'>Wheeler</label><br/>
        <select className='inp6' value={wheeler} required onChange={(e)=>setWheeler(e.target.value)}>
            <option>Select Option</option>
            <option value='twowheeler'>Two-wheeler</option>
            <option value='fourwheeler'>Four-wheeler</option>
        </select><br/>
        <button className='btn6'>Submit</button>
        </form>
    </div>
  )
}
