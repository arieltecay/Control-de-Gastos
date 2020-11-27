import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'
import "react-datepicker/dist/react-datepicker.css";

export const TransactionList = () => {
    const { transactions, getTransactions } = useContext(GlobalContext)

    useEffect(() => {
        getTransactions();
    }, [])

    return (
        <div>
            <h3>History </h3>
            <ul className='list'>
                {transactions.map(transaction => (
                    <Transaction
                        key={transaction.id}
                        transaction={transaction}
                    />
                ))}
            </ul>
        </div>
    )
}