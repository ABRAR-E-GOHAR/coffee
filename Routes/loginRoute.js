const express = require("express");
const router = express.Router(); 7
const auth = require("../Middleware/auth");
const userModel = require("../Models/userModel");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

router.get("/", auth, async (req, res) => {

    try {
        const user = await userModel.findById({ _id: req.user.id }).select("-password");
        res.json({ user });
    } catch (err) {
        res.status(400).json({ msg: "Server Error" });
    }
});

router.post("/", [
    check("email").exists().withMessage("Email is Required").isEmail().withMessage("Invalid Email"),
    check("password").exists(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    // find user
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ msg: "User Not Found With This Email" });
        }
        // password match
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.json({ msg: "Password Not Match" });
        }

        // create token
        const payload = {
            user: {
                id: user.id,
            }
        }

        jwt.sign(payload,
            config.get("jwtSecret"),
            { expiresIn: 36000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;