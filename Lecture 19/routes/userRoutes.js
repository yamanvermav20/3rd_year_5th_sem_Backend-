const express = require("express");
const router = express.Router();
const User = require("../model/user");
let {postAddUser, getAllUser, getOneUser} = require("../controller/userController");

router.post("/", postAddUser)
router.get("/", getAllUser)
router.get("/:id", getOneUser)


module.exports = router;
