const express = require("express");
const { postPlaceOrder } = require
const router = express.Router();

router.post("/", postPlaceOrder);



module.exports = router;