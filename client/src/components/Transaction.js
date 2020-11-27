import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format'
import PrintRoundedIcon from '@material-ui/icons/PrintRounded';
import Swal from 'sweetalert2'

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';

    const imprimir = () => {

    }
    const eliminar = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteTransaction(transaction._id)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    }

    return (
        <div>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {transaction.text}<span>{sign}$ {numberWithCommas(Math.abs(transaction.amount))}</span>
                <button
                    className='btn-imprimir'
                    onClick={() => imprimir()}
                ><PrintRoundedIcon/></button>{' '}
                <button onClick={() => eliminar()} className='delete-btn'>x</button>
            </li>
        </div>
    )
}
