import React, { useState } from 'react';

import Button from './components/button/button'
import Layout from './components/Wrapper/Layout/Layout';
import ShowTime from './components/Time/time';
import DigitalClock from './components/DigitalClock/digitalClock';
import HandlingEvent from './components/HandlingEvents/HandlingEvents';

const App = ()=>{
    const [count,setCount] = useState(5);
    const IncNum = () => {
        setCount(count+1);
    }

    return(
        <>
            <Layout>
                <ShowTime></ShowTime>
                <h1>{count}</h1>
                <button onClick={IncNum}>Click Me</button>
                <Button label="click me please"></Button>
                <DigitalClock></DigitalClock>
                <HandlingEvent></HandlingEvent>
            </Layout>
        </>
    );
}

export default App;