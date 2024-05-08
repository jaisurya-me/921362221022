import React, { useState, useEffect } from 'react';
import { fetchNumbers } from '../services/api';

const WINDOW_SIZE = 10;

function AverageCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [average, setAverage] = useState(0);
  const [windowPrevState, setWindowPrevState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newNumbers = await fetchNumbers('e');
        const uniqueNumbers = Array.from(new Set([...numbers, ...newNumbers])).slice(-WINDOW_SIZE);
        setWindowPrevState([...numbers]);
        setNumbers(uniqueNumbers);
        setAverage(calculateAverage(uniqueNumbers));
      } catch (error) {
        console.error('Error fetching numbers:', error);
      }
    };

    fetchData();
  }, []);

  const calculateAverage = (arr) => {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / Math.min(arr.length, WINDOW_SIZE);
  };

  return (
    <div className="container mt-4">
      <h2>Average Calculator</h2>
      <div className="info-box">
        <p>Window Prev State: {JSON.stringify(windowPrevState)}</p>
        <p>Window Curr State: {JSON.stringify(numbers)}</p>
        <p>Numbers: {JSON.stringify(numbers)}</p>
        <p>Average: {average.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default AverageCalculator;
