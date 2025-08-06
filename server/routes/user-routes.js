
const express = require('express') 
const router = express.Router();

const { create, handleLoginUser } = require("../controllers/user-controller.js")
const { createUserValidation } = require("../validations/user-validator.js")

router.post("/create",create);
router.post("/login",handleLoginUser);

module.exports = router;