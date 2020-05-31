const express = require("express");
const router = express.Router();
const userModel = require("../Models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

router.get("/", async (req, res) => {
    try {
        const user = await userModel.find();
        res.json(user);
    } catch (err) {
        res.send("server error");
    }
});

router.post("/", [
    check("email").isEmail().withMessage("Invalid Email"),
], async (req, res) => {
    // handle error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    const { username, email, address, password } = req.body;
    try {
        // if user already exist
        const user = await userModel.findOne({ email });
        if (user) {
            res.json({
                msg: "User Already Exist With This Email"
            });
        }
        else {
            // new user create
            const user = new userModel({
                username,
                email,
                address,
                password
            });

            // password bcrypt
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            // save user
            await user.save();

            // create token for response
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
    } catch (err) {
        res.send("server error");
    }
});

module.exports = router;