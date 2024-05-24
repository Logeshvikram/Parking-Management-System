import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function TwoWheeler() {
  const navigate=useNavigate()
  const handleClick = () => {
      navigate('/booking')
  }
  return (
    <div className='twowheeler'>
      <h1 className='head5'>Precaution</h1>
      <h4>Selecting the right parking spot is crucial for the safety of your two wheeler.</h4>
      <h3>Two wheeler Parking Safety Tips:</h3>
      
      <b>1. Look for Well-Lit Areas:</b><br />
      When parking your two wheeler, opt for well-lit areas, especially if you’re parking at night.<br />
      Well-lit spots discourage potential thieves and vandals while also making it easier for you to spot any hazards
      or obstacles.<br /><br />

      <b>2. Use safety-enabled two wheeler Parking:</b><br />
      Whenever possible, use designated safety-enabled two wheeler parking spaces. These areas are typically safer and designed to accommodate two wheelers properly. They may have security features like surveillance cameras and anchors for securing your bike.
      <br /><br />

      <b>3. Avoid Blocking Traffic:</b><br />

      Ensure that your parking spot doesn’t obstruct the flow of traffic or inconvenience other road users. Parking in a considerate manner not only keeps your two wheeler safe but also prevents charges on challan or fine by traffic police.

      Two wheeler Parking Safety Tips: Secure Your two wheeler
      Keeping your two wheeler secure while parked is vital to prevent theft and misuse. Here’s how to do it effectively:
      <br /><br />

      <b>4. Invest in Quality Locks:</b><br />

      Invest in high-quality locks, such as disc locks, chain locks, or U-locks, to deter thieves. Make sure these locks are fitted by the best two wheeler mechanic because giving no chance for the thief and difficult to break or pick, providing an extra layer of security for your two wheeler.
      <br /><br />

      <b>5. Use Multiple Locks:</b><br />

      Using multiple locks simultaneously makes it even harder for thieves to steal your two wheeler. Combine a disc lock with a heavy-duty chain lock, securing your bike to a fixed object like a post or a designated two wheeler anchor.

      <br /><br />
      <b>6. Consider an Alarm System:</b><br />

      Installing a two wheeler alarm system can alert you and others to any unauthorized attempts to move or mischief with your bike. Modern alarm systems often come with remote control, allowing you to activate or deactivate them conveniently.

      Two wheeler Parking Safety Tips: Protect Your two wheeler from the Elements
      Exposure to the elements can cause damage to your two wheeler over time. To keep it in pristine condition, follow these tips:
      <br /><br />
      <b>7. Use a two wheeler Cover:</b><br />

      Invest in a good-quality two wheeler cover to shield your bike from rain, sunlight, and dust. A cover also adds an extra layer of security by concealing your two wheeler’s appearance. Apart that more heating of your bike may cause low fuel efficiency because the petrol might to be vapoured.

      <br /><br />
      <b>8. Avoid Parking on Uneven Surfaces:</b><br />

      Parking on uneven or sloping surfaces can lead to your two wheeler tipping over. Always try to find a level parking spot to ensure safety, stability and prevent accidents.

      Two wheeler Parking Safety Tips: Stay sharp-eyed
      Even with all these precautions, staying attentive is key to two wheeler parking safety:

      <br /><br />
      <b>9. Check Your Mirrors:</b><br />

      Before leaving your parked two wheeler, take a moment to check your mirrors and surroundings. Ensure that your bike is secure and that there are no immediate dangers.
      <br /><br />

      <b>10. Follow Local Parking Regulations:</b><br />

      Lastly, abide by local parking rules, regulations and guidelines. Ignoring parking rules can result in fines like E-challan, spot fines or having your two wheeler towed, which is an unnecessary hassle which leads you to wandering on court cases.
<br/>
<br/>
      <button className='btn5' onClick={handleClick}>Confirm-Booking</button>
      <Link to='/booking'></Link>
    </div>
  )
}
