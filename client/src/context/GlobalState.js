import React, { createContext, useReducer } from 'react';
import { Transaction } from '../components/Transaction';
import AppReducer from './AppReducer'
import axios from 'axios';

//Initial State
const initialState = {
    transactions: [],
    error: null,
    loading: true
}

//Create a Context
export const GlobalContext = createContext(initialState)


//Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    async function getTransactions() {
        try {
            const res = await axios.get('/api/v1/transactions');
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data,
            });
        } catch (error) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.error
            });
        }
    }

    //Actions
    async function deleteTransaction(id) {
        try {
            await axios.delete(`/api/v1/transactions/${id}`);
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        } catch (error) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.error
            });
        }

    }

    async function addTransacction(transaction) {
        const config = {
            header: {
                'Content-Type': 'aplication/json'
            }
        }
        try {
            const res = await axios.post('/api/v1/transactions', transaction, config);

            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data
            });
        } catch (error) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.error
            });
        }
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransacction
    }}>
        {children}
    </GlobalContext.Provider>)

    //Actions
}