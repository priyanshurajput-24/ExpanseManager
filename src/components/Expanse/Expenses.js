import React from "react";

import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';


function Expenses(props) {
    return (<Card className='expenses'>
            <h2>Lets Go !</h2>
            {
                props.item.map(
                    expense => (
                        <ExpenseItem 
                        date={ expense.date } 
                        title={ expense.title  }
                        ammount={ expense.ammount } />
                    )
                )
            }
    </Card>);
    
}

export default Expenses


            {/* <ExpenseItem 
                date={ props.item[0].date } 
                title={ props.item[0].title  }
                ammount={ props.item[0].ammount } / >
            <ExpenseItem 
                date={ props.item[1].date } 
                title={ props.item[1].title  }
                ammount={ props.item[1].ammount } />
            <ExpenseItem 
                date={ props.item[2].date } 
                title={ props.item[2].title  }
                ammount={ props.item[2].ammount } />
            <ExpenseItem 
                date={ props.item[3].date } 
                title={ props.item[3].title  }
                ammount={ props.item[3].ammount } /> */}