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
    total:String,
    Paidamount:String,
    Paiddatetime:String,
    K1TranNo:String,    
    SPORTIPWD:String,
    SPORTIUSRID:String,
    CheckSum:String,
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'rejected'], // Add 'rejected' status
        default: 'pending',
    },
    rejectionReason: { // New field for rejection reason
        type: String,
        default: '',
    },

});

module.exports = mongoose.model('bookings', PaymentsSchema);
