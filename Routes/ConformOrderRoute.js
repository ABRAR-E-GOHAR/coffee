const express = require("express");
const router = express.Router();
const auth = require("../Middleware/auth");
const conformOrderModel = require("../Models/ConformOrdersModel");
const userModel = require("../Models/userModel");

router.get("/", async (req, res) => {
    try {
        const getOrders = await conformOrderModel.find().sort({ date: -1 });
        res.json(getOrders);
    } catch (err) {
        res.json({ msg: "Server Error" });
    }
});

router.post("/", auth, async (req, res) => {
    try {
        const { orders, bill, address, phone, city } = req.body;
        const user = await userModel.findById({ _id: req.user.id }).select("-password");
        const newOrder = await new conformOrderModel({
            user: req.user.id,
            username: user.username,
            phone,
            address,
            city,
            bill,
            orders
        });
        newOrder.save();
        res.json({ msg: "order send" });
    } catch (err) {
        res.status(400).json({ msg: "Server Error" });
    }
});

router.delete("/", async (req, res) => {
    const data = await conformOrderModel.remove();
    res.json(data);
});

module.exports = router;