import React from 'react'
import ReactDom from 'react-dom/client';


const Part = ({name,exercises})=>{
    return(
        <p>
            {name} {exercises}
        </p>
    )
}


export default Part;