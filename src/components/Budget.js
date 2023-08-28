import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { expenses, budget, dispatch, currency } = useContext(AppContext);
   
    const [error,] = useState("");

    

    const handleChange = (event) => {
    
        if (event >20000) {
            
            alert("The value cannot exceed to 20000" );
                    
        const currencyArray = {
            budget: 20000,
            
        };
    
        dispatch({
            type: 'SET_BUDGET',
            payload: currencyArray
        });
        }
        
        
        const expense = {

            budget: parseInt(event),
        };

        dispatch({
            type: 'SET_BUDGET',
            payload: expense,
        });
      
    }

    const total_budget = expenses.reduce((total, item) => {
        return (total = total + item.budget);
    }, 0);
    const alertType = total_budget > budget ? 'alert-danger' : 'alert-success';
    /* return (
         <div className={`alert ${alertType}`}>
             <span>Budget: £{budget - totalExpenses}</span>
         </div>
     );*/

    return (
        <div className={`alert ${alertType}`}  >
            <div>
                <span>Budget: {currency}</span>
                <input
                    required='required'
                    type='number'
                    name='budget'
                    id='cost'
                    min='0'
                    max='20000'
                    value={budget}
                    style={{ marginLeft: '2rem', size: 10 }}
                    onChange={(event) => handleChange(event.target.value)}>

                </input>
            </div>
            <div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>



    );
};
export default Budget;








