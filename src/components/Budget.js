import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { /*expenses,*/ budget } = useContext(AppContext);
    /*const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);*/
    return (
        
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
        </div>
        

    );
};
export default Budget;
