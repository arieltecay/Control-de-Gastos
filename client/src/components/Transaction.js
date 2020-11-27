import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format'
import PrintRoundedIcon from '@material-ui/icons/PrintRounded';
export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';

    const imprimir = () => {
        console.log('Imprmir Componente');
    }

    return (
        <div>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {transaction.text}<span>{sign}$ {numberWithCommas(Math.abs(transaction.amount))}</span>
                <button
                    className='btn-imprimir'
                    onClick={() => imprimir()}
                ><PrintRoundedIcon/></button>{' '}
                <button onClick={() => deleteTransaction(transaction._id)} className='delete-btn'>x</button>
            </li>
        </div>
    )
}
