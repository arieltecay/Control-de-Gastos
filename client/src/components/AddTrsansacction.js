import React, { useState, useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'
import { Transaction } from './Transaction';

export const AddTrsansacction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const {addTransacction} = useContext(GlobalContext)

    const limpiarForm = () => {
        setAmount('');
        setText('');
    }

    const onSubmit =(e) => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 1000),
            amount: +amount,
            text
        }
        addTransacction(newTransaction);
        limpiarForm()        
    }
    return (
        <>
            <h3>Add Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label for="text">Text</label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label for="amount"
                    >Amount <br />
            (negative - expense, positive - income)</label
                    >
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
