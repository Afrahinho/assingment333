import React, { useState } from 'react';
import './UpdateStates.css';

const UpdateStates = () => {
  const [previous, setPrevious] = useState(0);
  const [current, setCurrent] = useState(1);

  const update = () => {
    setPrevious(previous + 1);
    setCurrent(current + 1);
  };

  return (
    <div className='updateContainer'>
      <h3> previous {previous} </h3>
      <h3> current {current} </h3>
      <button onClick={update} className='bn'>
        {' '}
        Update{' '}
      </button>
    </div>
  );
};

export default UpdateStates;
