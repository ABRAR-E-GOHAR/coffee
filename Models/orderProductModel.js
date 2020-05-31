const mongoose = require("mongoose");
const orderProductSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userSchema"
    },
    profile: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model("orderProductSchema", orderProductSchema);