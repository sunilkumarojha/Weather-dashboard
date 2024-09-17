import React from 'react';

export default function Footer(){
    const date = new Date();
    const year= 1900 + date.getYear();

    return(
        <footer className='myFont bold'>
            <span role='img' aria-label='copyright'>©️</span>{year} Sunil Ojha</a>       
        </footer>
    )
} 
 
