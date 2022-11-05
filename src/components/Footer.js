import React from 'react'
import zuri from '../icons/zuri-internship-img.svg';
import ing from '../icons/Ing.png';

export default function Footer() {
  return (
    <div className='footer'>
        <img src={zuri} className="zuri-icon"  alt=''/>
        <p className="intern">HNG Internship 9 Frontend Task</p>
        <img src={ing} className="ing-icon" alt='' />
      </div>
  )
}
