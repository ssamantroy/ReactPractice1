import React from 'react'

const button = ({label})=>{
    return(
        <>
            <div data-testid="button">{label}</div>
            <div><h1>Hello there</h1></div>
        </>
    );
}

export default button;