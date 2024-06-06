const express = require('express');
const { submitForm, getBookingByApplicationNo, deleteBooking, updateBooking } = require('../controllers/allPayments');
const router = express.Router();
const Booking = require('../models/allPayments');
const { sendrejectionEmail, sendConfirmationEmail } = require('../services/emailService');

router.post('/allpayment', submitForm);
router.get('/allpayment/:applicationNo', getBookingByApplicationNo);
router.delete('/allpayment/:applicationNo', deleteBooking);
router.put('/allpayment/update/:applicationNo', updateBooking);
// routes/bookings.js

// Reject a booking
router.patch('/:id/reject', async (req, res) => {
    try {
        const { rejectionReason } = req.body;
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        booking.status = 'rejected';
        booking.rejectionReason = rejectionReason;
        sendrejectionEmail(booking)
        await booking.save();
        res.json(booking);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Confirm a booking
router.patch('/:id/confirm', async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        booking.status = 'confirmed';
        sendConfirmationEmail(booking)
        await booking.save();
        // Send email to user
        // You need to implement email sending logic here

        res.json(booking);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all bookings
router.get('/allpayment', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



module.exports = router;
