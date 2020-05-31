const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userSchema"
    },
    username: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    person: {
        type: Number,
        required: true
    },
    timeDate: {
        type: Date,
        required: true
    },
    hours: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model("bookingSchema", bookingSchema);