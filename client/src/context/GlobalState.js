import React, { createContext, useReducer } from 'react';
import { Transaction } from '../components/Transaction';
import AppReducer from './AppReducer'

//Initial State
const initialState = {
    transactions: [
        { id: 1, text: 'flowers', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 },
    ]
}

//Create a Context
export const GlobalContext = createContext(initialState)


//Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransacction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransacction
    }}>
        {children}
    </GlobalContext.Provider>)

    //Actions
}