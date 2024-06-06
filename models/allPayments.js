const mongoose = require('mongoose');

const PaymentsSchema = new mongoose.Schema({
    AppNo: String,
    paymentStatus: {
        type: String,
        default: 'Pending'
    },
    Paidamount:String,
    Paiddatetime:String,
    K1TranNo:String,    
    SPORTIPWD:String,
    SPORTIUSRID:String,
    CheckSum:String,
    username:String,
    email:String,
    phone:String
});

module.exports = mongoose.model('allPayments', PaymentsSchema);
