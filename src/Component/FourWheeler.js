import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function FourWheeler() {
  const navigate=useNavigate()
  const handleClick=()=>{
      navigate('/booking')
  }
  return (
    <div className='fourwheeler'>
        <h1 className='head6'>Precaution</h1>
        <h4>Selecting the right parking spot is crucial for the safety of your four wheeler.</h4>
        <h3>Four wheeler Parking Safety Tips:</h3>
        <b>Pick Designated Parking Places:</b><br/>
           Parking your four-wheeler in an unlawful location might result in vehicle theft. In addition, under the 2019 Motor 
           Vehicles Act, you may be fined ₹5,000 if your car is caught parked in a "no-parking zone". As a result, you should 
           always park your four-wheeler in designated parking areas. Roadside parking zones, garages, open parking, parking lots, 
           and other similar areas fall under this category. Parking lots are usually secured to prevent car theft. You may also
           ward off a large fee by parking in designated areas.
        <b>Park Your Car Near Other Vehicles:</b><br/> 
           This is one of the most important car parking tips for beginners. Always try to park your four-wheeler near other 
           vehicles and well-lit areas. However, make sure you're not parked too near to another vehicle's front or rear bumper, 
           obstructing access or space for manoeuvring. Areas with proper lighting deter thieves from gaining access to your vehicle 
           and allow you to observe the area around the parking place
        <b>Avoid Parking Your Car Near Huge Vehicles:</b><br/> 
          While it's a great idea to park your four-wheeler near another vehicle of similar size, try to avoid parking near huge 
          vehicles such as buses, vans, trucks or lorries, vans, and so on. Large trucks might impede your route and make it harder 
          to operate your four-wheeler. They are also possible hiding places for thieves or assailants attempting to target your 
          vehicle.Take Precautions When Reverse Parking or Parallel Parking: Parking your four-wheeler parallel to other vehicles 
          might be difficult. As a result, you must use particular caution while trying parallel or reverse parking. Following basic 
          guidelines while parking your car in certain areas might help you prevent damage or crashes. For example, drive till you 
          locate a parking place large enough to accommodate your vehicle comfortably.<br/>
        <Link to='/booking'></Link>
        <button onClick={handleClick}>Confirm-Booking</button>
    </div>
  )
}
