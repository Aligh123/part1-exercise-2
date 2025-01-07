import React from 'react'
import ReactDom from 'react-dom/client';

const Header = (prop)=>{

    return(
        <div>
            <h1>{prop.course}</h1>
        </div>
    )
}
export default Header;