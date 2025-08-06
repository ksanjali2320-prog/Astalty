const mongoose = require("mongoose");
const { Schema } = mongoose;

const dashboardMenus = new Schema({
  name:String
},{ versionKey: false,
  collection: "dashboard-menus" 
 })

module.exports = mongoose.model("dashboardMenus",dashboardMenus);
