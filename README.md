# coding-project-template
/*import { useState, useEffect, useRef, useContext } from 'react'
import { AppContext } from '../context/AppContext'; 

export function useUpdateBudget () {
    const {budget, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget)
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)
  
    useEffect(() => {
      if (isFirstInput.current) {
        setNewBudget(budget + 1);
        isFirstInput.current = newBudget === (budget + 1)
        setError('Debe ser un valor inferior a: '+budget)
        return
      }
  
      if (newBudget.length < 1) {
        setError('La búsqueda debe tener al menos 3 caracteres')
        return
      }
  
      setError(null)
    }, [newBudget])
  
    return { newBudget, setNewBudget, error }
  }*/