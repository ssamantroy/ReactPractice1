import React, { useState } from 'react';

const HandlingEvent = () =>{

    let iStatement = "Hello! Click Me and See the Change";

    const [iValue, setValue] = useState(iStatement);

    const changeStatement = () =>{
        const fValue = "Told you see the change";
        setValue(fValue);
    }

    const changeBackStatement = () =>{
        setValue(iStatement);
    }

    return(
        <>
        <button onClick = {changeStatement} onMouseLeave = {changeBackStatement}>
            <h1>
                {iValue}
            </h1>
        </button>
        </>
    );
}

export default HandlingEvent;