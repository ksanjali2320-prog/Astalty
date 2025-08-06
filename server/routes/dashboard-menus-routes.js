
const express = require('express') 
const router = express.Router();

const { fetchDashboardMenus } = require("../controllers/dashboard-menus-controller.js")
router.get("/dashboard-menus",fetchDashboardMenus);

module.exports = router;