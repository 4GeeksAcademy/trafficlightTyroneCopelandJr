import React, { useState, useEffect } from 'react';

export default function TrafficLight() {
  const [currLight, setCurrLight] = useState('green');

  const trafficState = {
    red: {
      duration: 4000,
      backgroundColor: 'red',
      next: 'yellow',
    },
    yellow: {
      duration: 500,
      backgroundColor: 'yellow',
      next: 'green',
    },
    green: {
      duration: 3000,
      backgroundColor: 'green',
      next: 'red',
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrLight(trafficState[currLight].next);
    }, trafficState[currLight].duration);

    return () => clearTimeout(timer);
  }, [currLight]);

  return (
    <>
      <div className="container">
        {Object.keys(trafficState).map((color, ind) => (
          <div
            key={ind}
            className="box"
            style={{
              backgroundColor:
                currLight === color ? trafficState[color].backgroundColor : 'gray',
            }}
          ></div>
        ))}
      </div>

      <button
        onClick={() => setCurrLight(trafficState[currLight].next)}
        style={{ marginTop: '20px' }}
      >
        Next Light
      </button>
    </>
  );
}
