import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Card from './components/Card';

const App = () => {
  const [advice, setAdvice] = useState('');

  const fetchData = async () => {
    try {
      const { data } = await axios.get('https://api.adviceslip.com/advice');
      setAdvice(data.slip);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='app'>
      <Card data={advice} onClick={fetchData} />
    </div>
  );
};

export default App;
