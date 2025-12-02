const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello from express");
})

app.use("/api/order/v3", require("./controller/order.js"));
app.listen(3000, () => {
    console.log("Server is started here");
})