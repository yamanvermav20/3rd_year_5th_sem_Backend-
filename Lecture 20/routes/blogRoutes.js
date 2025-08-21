const express = require("express");
const router = express.Router();
const {isLogin} = require("../middleware/middleware");
router.use(isLogin)
router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "all blogs received"
    })
})
router.get("/:id", (req, res) => {
    res.json({
        success: true,
        message: "Single blogs received"
    })
})
router.post("/", (req, res) => {
    res.json({
        success: true,
        message: "blogs added successfully"
    })
})
module.exports = router;
