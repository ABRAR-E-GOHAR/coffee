const express = require("express");
const router = express.Router();
const auth = require("../Middleware/auth");
const multer = require("multer");
const productModel = require("../Models/uploadProductsModel");

// upload pic with multer===================================
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

// post route for DB storage================================

router.post("/", auth, upload.single("profile"), async (req, res) => {
    const file = req.file;
    const { price, category, description } = req.body;

    // create product object----------------
    const productFields = {};
    if (file) { productFields.profile = file.path };
    if (price) { productFields.price = price };
    if (category) { productFields.category = category };
    if (description) { productFields.description = description };

    try {
        const product = await new productModel(productFields);
        await product.save();
        res.json({ msg: "Product Upload Successfully" });
    } catch (err) {
        console.log("server error");
    }
});


// get all products route========================================

router.get("/", async (req, res) => {
    try {
        const allProfiles = await productModel.find();
        res.json(allProfiles)
    } catch (err) {
        console.log("server error");
    }
});

// delete products route========================================

router.post("/del", async (req, res) => {
    const { _id, category } = req.body;
    try {
        await productModel.findOneAndDelete({ _id });
        res.json({ msg: "Product Successfully Delete" });
    } catch (err) {
        console.log("server error");
    }
});


// update  products route========================================

router.put("/", async (req, res) => {
    const { _id, category, price, description } = req.body;
    const productFields = {};
    if (price) { productFields.price = price };
    if (category) { productFields.category = category };
    if (description) { productFields.description = description };
    try {
        const product = await productModel.findOne({ _id });
        if (product) {
            // update
            await productModel.findOneAndUpdate(
                { _id: _id },
                { $set: productFields },
                { new: true }
            );
            res.json({ msg: "Product Successfully Update" });
        }
    } catch (err) {
        console.log("server error");
    }
});

module.exports = router;

// Filter Product route===========================

router.post("/filter", async (req, res) => {
    const { category } = req.body
    try {
        const products = await productModel.find({ category });
        res.json(products);
    } catch (err) {
        console.log("server error");
    }
});