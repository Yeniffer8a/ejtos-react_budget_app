import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext'; 
const Remaining = () => {
    const { expenses, budget, currency, remaining} = useContext(AppContext);
    const [error, setError] = useState("");

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    if(totalExpenses>remaining){
        
        setError("Spent so far cannot exceed the budget: "+remaining)

    }
    
    const alertType =  totalExpenses>budget ? 'alert-danger' : 'alert-success';

    
    return (
        <div>
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency}{budget - totalExpenses}</span>
        </div>
        <div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        </div>
        
    );
};
export default Remaining;
