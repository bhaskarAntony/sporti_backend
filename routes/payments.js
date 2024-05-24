const express = require('express');
const { submitForm, getBookingByApplicationNo, deleteBooking, updateBooking } = require('../controllers/payment');
const router = express.Router();

router.post('/payment', submitForm);
router.get('/getPayment/:applicationNo', getBookingByApplicationNo);
router.delete('/deletePayment/:applicationNo', deleteBooking);
router.put('/updatePayment/:applicationNo', updateBooking);



module.exports = router;
