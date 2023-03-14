import React, { useState } from "react";

import './ExpanseForm.css'

const ExpanseForm = (props) => {

    const [enteredtitle, setEnteredTitle] = useState('')
    const [enteredammount, setEnteredAmmount] = useState('')
    const [entereddate, setEnteredDate] = useState('')



    const titlechangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const ammountchangeHandler = (event) => {
        setEnteredAmmount(event.target.value)
    }
    const datechangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        let expanceData = {
            title : enteredtitle,
            ammount: enteredammount,
            date: new Date(entereddate)
        }

        props.onSaveExpenseData(expanceData);

        console.log(expanceData)

        setEnteredTitle('');
        setEnteredAmmount('');
        setEnteredDate('');

    }

    return (
        <form onSubmit={ submitHandler }>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={ titlechangeHandler } value={ enteredtitle }/>
                </div>
                <div className="new-expense__control">
                    <label>Ammount</label>
                    <input type="number" min="0.01" step="1" onChange={ ammountchangeHandler } value={ enteredammount }/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" onChange={ datechangeHandler } value={ entereddate }/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpanseForm
