import React, { useState } from 'react'

function GoUp() {

  const [isHovered, setIsHovered] = useState(false);

  const styling = {
    color: isHovered ? '#444' : '#cc9966',
    backgroundColor: isHovered ? '#cc9966' : '#444',
    padding: '7px 10px',
    fontSize: '18px',
    borderRadius: '50%',
    border: '2px solid #cc9966',
    transition: 'all 0.3s ease',
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    cursor: 'pointer',
    zIndex: 1
  };

  return (
    <div>
      <a href="#"><i className='fas fa-arrow-up' style={styling} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}></i></a>
    </div>
  )
}

export default GoUp