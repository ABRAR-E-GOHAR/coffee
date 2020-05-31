const express = require("express");
const app = express();
const path=require('path');
const connectDB = require("./config/db");

// body parser
app.use(express.json({ extended: false }));

// pic folder
app.use("/uploads", express.static("uploads"));

// connect database
connectDB();

// routes
app.use("/signup", require("./Routes/signupRoute"));
app.use("/login", require("./Routes/loginRoute"));
app.use("/adminLogin", require("./Routes/AdminLoginRoute"));
app.use("/Products", require("./Routes/uploadProductRoute"));
app.use("/orders", require("./Routes/OrderProductsRoute"));
app.use("/conformOrder", require("./Routes/ConformOrderRoute"));
app.use("/booking", require("./Routes/tableBookingRoute"));

// Serve our static assets if in prdoduction
if (process.env.NODE_ENV === 'production'){
    // Static folder
    app.use(express.static('my-graph/build'));
    app.get ('*',  (req, res)=> {
       res.sendFile(path.resolve(__dirname, 'my-graph', 'build', 'index.html'));
    })
}

// server port
const port = process.env.PORT || 5000;
app.listen(port, console.log("Server run on port " + port));