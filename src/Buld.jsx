import React from 'react';
import { useState } from 'react';
import './Bulb.css';
import lightoff from './lightoff.jpg';
import lighton from './lighton.jpg';

function Buld() {
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <div className='bulb__wrapper'>
      <p>
        <img src={toggle ? lighton : lightoff} alt='' />
      </p>
      <button onClick={toggleButton}>{toggle ? 'off' : 'off'}</button>
      <button onClick={toggleButton}>{toggle ? 'on' : 'on'}</button>
    </div>
  );
}

export default Buld;
