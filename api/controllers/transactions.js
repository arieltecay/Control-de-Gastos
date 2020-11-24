//Obtiene todas las transacciones
//GET /api/v1/transactions
exports.getTransactions = (req,res, next)=>{
    res.send('GET transactions')
}

//Agrega Transacciones
//POST /api/v1/transactions
exports.addTransactions = (req,res, next)=>{
    res.send('POST transactions')
}

//Elimina Transacciones
//DELETE /api/v1/transactions
exports.deleteTransactions = (req,res, next)=>{
    res.send('DELETE transactions')
}