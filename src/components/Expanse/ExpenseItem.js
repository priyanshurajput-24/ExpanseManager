
import React, { useState } from "react";
import './ExpenseItem.css'
import ExpanceDate from './ExpanceDate';
import Card from '../UI/Card';

function ExpenseItem(props){
     
    return (
        <Card className='expense-item'>
            <div><ExpanceDate date={props.date}/></div>
            <div className='expense-item__description'>
                <h2>{ props.title }</h2>
                <div className='expense-item__price'>${props.ammount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;