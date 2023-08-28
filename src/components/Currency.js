import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  
    const { dispatch} = useContext(AppContext);

    const handleUpdateCurrency = (event) => {
        
        const currencyArray = {
            value: event,
            
        };
    
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currencyArray
        });
    
    }


    return (
        <div>
            <div className='row'>

                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" onChange={(event) => handleUpdateCurrency(event.target.value)}>
                        <option defaultValue value="$" name="Dollar">$ Dollar</option>
                        <option value="£" name="Pound">£ Pound</option>
                        <option value="€" name="Euro">€ Euro</option>
                        <option value="₹" name="Rupee">₹ Rupee</option>
                    </select>


                </div>
            </div>

        </div>

    );

}
export default Currency;