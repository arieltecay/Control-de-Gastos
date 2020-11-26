const Transaction = require('../models/Transactions');

//Obtiene todas las transacciones
//GET /api/v1/transactions
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();
        return res.status(200).json({
            succes: true,
            count: transactions.length,
            data: transactions
        });
    }
    catch (err) {
        return res.status(500).json({
            succes: false,
            error: 'Server Error'
        });
    }
}

//Agrega Transacciones
//POST /api/v1/transactions
exports.addTransactions = async (req, res, next) => {
    try {
        const { text, amount } = req.body;
        const transactions = await Transaction.create(req.body)
        return res.status(201).json({
            succes:true,
            data: transactions
        });
    } catch (error) {
        if(error.name === 'ValidationError'){
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                succes:false,
                error: messages
            });
        }else{
            return res.status(500).json({
                succes: false,
                error: 'Server Error'
            })
        }
    }
}

//Elimina Transacciones
//DELETE /api/v1/transactions
exports.deleteTransactions = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id)
        if(!transaction){
            return res.status(404).json({
                succes: false,
                error: 'No se encontro Transaccion'
            })
        }
        await transaction.remove();
        return res.status(200).json({
            succes:true,
            data:{}
        });
    } catch (error) {
        return res.status(500).json({
            succes: false,
            error: 'Error de Servidor'

        })
        
    }
}