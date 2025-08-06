const dashboardMenusModel = require("../models/dashboad-menus-model")

const fetchDashboardMenus = async (req, res) => {
      try{
        const dashBoardMenus = await dashboardMenusModel.find();
          return res.json(dashBoardMenus);
      } catch (error){
        res.status(500).json({
          error: "Internal server error"
        });
      }
};

module.exports = {
  fetchDashboardMenus
};
