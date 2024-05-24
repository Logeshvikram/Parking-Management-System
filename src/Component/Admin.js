import React from 'react'

export default function Admin() {
  return (
    <div className='admin'>
        <label className='label2'>Name</label><br/>
        <input className='inp4' type='text'/><br/>
        <label className='label2'>Email</label><br/>
        <input className='inp4' type='text'/><br/>
        <label className='label2'>Password</label><br/>
        <input className='inp4' type='password'/><br/>
        <button className='btn3'>Sign in</button>
    </div>
  )
}
