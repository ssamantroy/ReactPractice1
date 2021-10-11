import React from 'react';

//Layout component
//parent component
export default function Layout(props){
    return(
        <div className={props.class}>
            <p>This is from Layout - Top Area / May be Header</p>
            <hr/>
            {props.children}
            
            <hr />
            <p>This is from Layout - Bottom Area / May be Footer</p>
        </div>
    )
}