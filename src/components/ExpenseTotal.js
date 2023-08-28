import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
    const { expenses, currency,remaining, budget, dispatch} = useContext(AppContext);
   
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const alertType =  totalExpenses>remaining ? 'alert-danger' : 'alert-success';
    
    if (totalExpenses >budget) {
        alert("You cannot reduce the budget value lower than the spending: "+remaining);

        const currencyArray = {
            budget: 20000,
            
        };
    
        dispatch({
            type: 'SET_BUDGET',
            payload: currencyArray
        });
        
        return;
    }
    if (totalExpenses >remaining) {
        
        alert("The expense cannot exceed the remaining budget");
        
        return;
    }
    
    return (
        <div>
            <div className={`alert ${alertType}`}>
                <span>Spent so far: {currency}{totalExpenses}</span>
            </div>
            <div style={{ width: '0.4rem' }}></div>
            {totalExpenses > remaining && <p >The expense cannot exceed the remaining budget.</p>}
            {totalExpenses > budget && <p >The expense cannot exceed the remaining budget.</p>}
        </div>
        
    );
};
export default ExpenseTotal;
