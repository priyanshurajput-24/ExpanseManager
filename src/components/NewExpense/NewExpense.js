import React from "react";

import './NewExpense.css';
import ExpanseForm from "./ExpenseForm";


const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expensedata = {
        ...enteredExpenseData,
        id : Math.random().toString()
        };

        props.onAddExpense(expensedata)

        console.log(expensedata)
    };

    return (
        <div className="new-expense">
                <ExpanseForm  onSaveExpenseData={ saveExpenseDataHandler }/>
        </div>
    )
};

export default NewExpense;