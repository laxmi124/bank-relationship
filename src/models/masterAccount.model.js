const mongoose = require('mongoose');

const masterAccountSchema = new mongoose.Schema({
    account_number  : { type:Number , required: true},
    balance  : {type:Number , required:true},
    createdAt : {type:Date, default:Date.now(), required: true},
    updatedAt  : {type:Date, default:Date.now(), required: true},
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    branch_id: { type: mongoose.Schema.Types.ObjectId, ref: "branch" },
    savingsAccount_id: [{ type: mongoose.Schema.Types.ObjectId, ref: "savingsAccount" }],
    fixedAccount_id: [{ type: mongoose.Schema.Types.ObjectId, ref: "fixedAccount" }],

});

const MasterAccount = mongoose.model('masterAccount', masterAccountSchema);
module.exports = MasterAccount;