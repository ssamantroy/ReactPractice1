import React, { useState } from 'react';

const DigitalClock = () =>{
    
    let newTime = new Date().toLocaleTimeString();

    const UpdateTime = () =>{
        newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }

    setInterval(UpdateTime,1000);

    const [cTime, setTime] = useState(newTime);
    return (
        <>
        <h1>{cTime}</h1>
        </>
    );
}

export default DigitalClock;