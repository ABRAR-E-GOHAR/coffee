const mongoose = require("mongoose");
const conformOrderSchema = new mongoose.Schema({
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
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    bill: {
        type: Number,
        required: true
    },
    orders: [],
    date: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model("conformOrderScheme", conformOrderSchema);