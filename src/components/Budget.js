import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext'; 

    
const Budget = () => {
    const { expenses, budget, dispatch } = useContext(AppContext);
    const [updateBudget, setUpdateBudget] = useState(budget);

    const [action,] = useState('');
    

    const handleChange = (event) => {
        let newBudget = event.target.value;
        setUpdateBudget(newBudget)
      

              
        if(newBudget > budget) {
            alert("The value cannot exceed remaining funds  £"+budget);
            setUpdateBudget("");
            return;
        }

       /* if(newBudget <11){
            alert("The value must be greater than 10");
            setUpdateBudget("");
            return;
        }*/

    const expense = {

        budget: parseInt(budget),
    };
    if(action === event.target.value ) {
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense,
        });
    } 
        
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
        <span>Budget: £</span>
        <input                        
        required='required'
        type='number'
        name='budget'
        id='cost'
        min='0'  
        max='20000'
        value={updateBudget}
        style={{ marginLeft: '2rem' , size: 10}}
        onChange={handleChange}>
        
    </input> 
    
     </div>
     

    );
};
export default Budget;




    



