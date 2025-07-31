import React, { useState, useEffect } from 'react';

export default function TrafficLight() {
  const [currLight, setCurrLight] = useState('green');
  const [isAuto, setIsAuto] = useState(true); 

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
    if (!isAuto) return;

    const timer = setTimeout(() => {
      setCurrLight(trafficState[currLight].next);
    }, trafficState[currLight].duration);

    return () => clearTimeout(timer);
  }, [currLight, isAuto]);

  
  const handleClick = (color) => {
    setIsAuto(false);     
    setCurrLight(color);    
  };

  return (
    <>
      <div className="container">
        {Object.keys(trafficState).map((color, ind) => (
          <div
            key={ind}
            className="box"
            onClick={() => handleClick(color)} 
            style={{
              backgroundColor:
                currLight === color ? trafficState[color].backgroundColor : 'gray',
              cursor: 'pointer',
              boxShadow: currLight === color ? '0 0 20px 5px ' + trafficState[color].backgroundColor : 'none'
            }}
          ></div>
        ))}
      </div>

      <button
        onClick={() => {
          setIsAuto(true);
        }}
        style={{ marginTop: '20px' }}
      >
        Resume Auto Mode
      </button>
    </>
  );
}

