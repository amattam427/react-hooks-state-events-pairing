import React from 'react';

function Header({title, views, created}){
    return (
        <div>
            <h2>{title}</h2>
            <p>{views} | {created}</p>
        </div> 
    )

}

export default Header