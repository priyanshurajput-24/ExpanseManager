import React, { useState } from "react";

import Expenses from './components/Expanse/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";

let dummy_expense = [];



const App = () => {
    
    const [expenses, setExpense] = useState(dummy_expense)

    fetch('https://reqres.in/api/users?page=2').then(
        response => {
            response.json()
        }
    ).then(
        data => {
            console.log(data)
        }
    )


    const addExpanxeHandler = (expense) => {
        const updatedExpense = [expense, ...expenses];
        setExpense(updatedExpense)
    };


    return (
        <div>
            <NewExpense onAddExpense={ addExpanxeHandler }/>
            <Expenses  item={expenses}/>
        </div>
        );
}

export default App






























// let expenceDate = new Date(2021, 3, 2);  "THIS IS FOR SINGRL DATA"
// let expanceTitle = "School Fee"
// let expenceAmmount = "$300";