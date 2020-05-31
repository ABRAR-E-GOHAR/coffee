const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const AdminLoginModel = require("../Models/adminModel");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../Middleware/auth");

// ========================admin get route

router.get("/", auth, async (req, res) => {

    try {
        const user = await AdminLoginModel.findById({ _id: req.user.id }).select("-password");
        res.json({ user });
    } catch (err) {
        res.status(400).json({ msg: "Server Error" });
    }
});


// ========================admin post route

router.post("/", [
    check("username").exists().withMessage("username is Required"),
    check("password").exists(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ msg: "Fill All Fields" });
    }
    // find user
    const { username, password } = req.body;
    try {
        const user = await AdminLoginModel.findOne({ username });
        if (!user) {
            return res.json({ msg: "Invalid Username" });
        }
        // password match
        const pass = user.password;

        if (pass !== password) {
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

// router.post("/",async(req,res)=>{
//     const admin= new AdminLoginModel({
//         username:req.body.username,
//         password:req.body.password
//     });
//     await admin.save();
//     res.send("save");
// });

module.exports = router;