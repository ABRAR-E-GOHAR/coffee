const express = require("express");
const router = express.Router();
const auth = require("../Middleware/auth");
const orderProductModel = require("../Models/orderProductModel");

router.get("/", auth, async (req, res) => {
    try {
        const order = await orderProductModel.find({ user: req.user.id });
        if (!order) {
            return res.json({ msg: "No Order Yet" });
        }
        else {
            res.json(order);
        }
    } catch (err) {
        console.log(err);
    }
});

router.post("/", auth, async (req, res) => {
    const { profile, price, category, description, quantity } = req.body;
    try {
        const genOrder = new orderProductModel({
            user: req.user.id,
            profile,
            price,
            category,
            description,
            quantity
        });
        await genOrder.save();
        res.json({ msg: "Order Create" });
    } catch (err) {
        console.log(err);
    }
});

router.delete("/", auth, async (req, res) => {
    const { _id } = req.body;
    try {
        const order = await orderProductModel.findOne({ _id });
        if (order.user.toString() !== req.user.id) {
            return res.json({ msg: "user not authorized" });
        }
        await order.remove();
        res.json({ msg: "Order Removed" });
    } catch (err) {
        console.log(err);
    }
});

router.put("/", auth, async (req, res) => {
    try {
        await orderProductModel.remove({ user: req.user.id });
    } catch (err) {
        console.log(err);
    }
});

router.delete("/all", async (req, res) => {
    const data = await orderProductModel.remove();
    res.json(data);
});

module.exports = router;