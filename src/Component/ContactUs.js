import React, { useState } from 'react'

export default function ContactUs() {
    
    const handleSubmit=()=>{
        alert('Query has been sent successfully')
    }
  return (
    <div className='contactus'>
        <p className='contact-us'>
        <div className='contact1'>
            <h2>Start a Conversation</h2>
            <h5>For Personal Queries</h5>
            <a href='#' className='inp2'>abc@gmail.com</a><hr/>
            <h5>For General Queries</h5>
            <a href='#' className='inp2'>def@gmail.com</a><hr/>
            <h5>HelpLine</h5>
            <a href='#' className='inp2'>123-456-7890</a>
        </div>
        <div className='contact2'>
            <label className='label1'>NAME</label><br/>
            <input className='inp3' type='text' placeholder='Enter your name'/><br/>
            <label className='label1'>E-MAIL</label><br/>
            <input className='inp3' type='text' placeholder='Enter your mail'/><br/>
            <label className='label1'>QUERY</label><br/>
            <textarea className='inp3'/><br/>
            <input className='inp3' type='checkbox' required/>
            <h6>By checking this box you confirm that you have read and agree<br/>
                to our Terms & Conditions,and that you have read our Privacy Policy.*<br/>
            <a href='#'>Privacy policy and Terms & Conditions</a></h6><br/>
            <button className='btn2' onClick={handleSubmit}>SUBMIT</button>
        </div>
        </p>
        <div className='contact3'>
            <h2 className='h2'>Sign Up for news and offer letters</h2><br/>
            <input className='inp5' type='text'/><br/>
            <button className='btn4'>Subscribe</button><br/>
        </div>
    </div>
  )
}
