const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
    // getting token from header
    const token = req.header("x-auth-token");
    // check if  not token
    if (!token) {
        res.status(401).json({ msg: "NO Token Received" });
    }
    // verify token
    try {
        const decode = jwt.verify(token, config.get("jwtSecret"));
        req.user = decode.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: "Token is not valid" });
    }
}