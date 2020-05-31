const express = require("express");
const router = express.Router();
const bookingModel = require("../Models/tableBookingModel");
const userModel = require("../Models/userModel");
const auth = require("../Middleware/auth");

router.get("/", auth, async (req, res) => {
    try {
        const allBooking = await bookingModel.find().sort({ date: -1 });
        res.json(allBooking);
    } catch (err) {

    }
});

router.post("/", auth, async (req, res) => {
    const { phone, person, timeDate, hours } = req.body;
    const booking = await bookingModel.findOne({ timeDate: timeDate });
    if (booking) {
        res.json({ msg: "Already Booked" });
    }
    else {
        try {
            const user = await userModel.findById({ _id: req.user.id });
            const table = await new bookingModel({
                user: req.user.id,
                username: user.username,
                phone,
                person,
                timeDate,
                hours
            });
            table.save();
            res.json({ msg: "Booking Confirmed" });
        } catch (err) {
            res.json(err);
        }
    }
});

router.delete("/", async (req, res) => {
    try {
        await bookingModel.remove();
        res.send("done");
    } catch (err) {
        res.json(err);
    }
})
module.exports = router;