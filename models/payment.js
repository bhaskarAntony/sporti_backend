const mongoose = require('mongoose');

const PaymentsSchema = new mongoose.Schema({
    username: String,
    email: String,
    phoneNumber: String,
    applicationNo:String,
    sporti: String,
    checkIn: Date,
    checkOut: Date,
    serviceName: String,
    serviceType: String,
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
    CheckSum:String
});

module.exports = mongoose.model('bookings', PaymentsSchema);
