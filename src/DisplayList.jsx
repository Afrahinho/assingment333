import React, { useState } from 'react';
import './DisplayList.css';

const DisplayList = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name !== '' && list !== '') {
      setList([name, ...list]);
      setName('');
    }
  };

  return (
    <div className='displayList__wrapper'>
      <form>
        <input
          className='kk'
          name='name'
          type='text'
          placeholder='Enter Your Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSubmit} className='pp'>
          {' '}
          Add{' '}
        </button>
      </form>

      {list.map((ls) => (
        <li>{ls}</li>
      ))}
    </div>
  );
};

export default DisplayList;
