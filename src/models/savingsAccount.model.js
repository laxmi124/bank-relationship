const mongoose = require('mongoose');

const savingsAccountSchema = new mongoose.Schema({
    account_number  : { type:Number , required: true},
    balance  : {type:Number , required:true},
    interestRate   : {type:Number , required:true},
    createdAt : {type:Date, default:Date.now(), required:true},
    updatedAt  : {type:Date, default:Date.now(), required:true},
});

const SavingsAccount = mongoose.model('savingsAccount', savingsAccountSchema);
module.exports = SavingsAccount;