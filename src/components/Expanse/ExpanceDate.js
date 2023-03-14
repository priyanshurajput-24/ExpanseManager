import React from "react";

import './ExpanceDate.css'

function ExpanceDate(props){
    const month1 = props.date.toLocaleString('en-US', {month:'long'});
    const year1 = props.date.getFullYear();
    const day1 = props.date.toLocaleString('en-US', {day: '2-digit'});

    return (
        <div className='expance-date'>
            <div className='expance-date__month'>{ month1 }</div>
            <div className='expance-date__year'> { year1 }</div>
            <div className='expance-date__day'>{ day1 }</div>
        </div>
    );
}


export default ExpanceDate;