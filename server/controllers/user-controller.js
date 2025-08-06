const CreateUserModel = require("../models/user-model")

const create = async (req, res) => {
      try{
          const createUserData = new CreateUserModel(req.body);
          const {email} = createUserData
          const {mobileNumber} = createUserData
          const {password} = createUserData

          const userExist = await CreateUserModel.findOne({email})
          const mobileNumberExit = await CreateUserModel.findOne({mobileNumber})
          const passwordExist = await CreateUserModel.findOne({password})

          if(userExist){
            return res.status(400).json({
              message:"user already exists"
            });
          }
          
          if(userExist){
            return res.status(400).json({
              message:"user already exists"
            });
          }
          else if(mobileNumberExit){
            return res.status(400).json({
              message:"user mobile number is already exists"
            });
          }

          try{
          const saveUser = await createUserData.save();
          res.status(200).json(saveUser);
          }
          catch(error){
            return res.status(400).json({ 
              message: error.message
            });
            console.log(""+error.code+error.name);
          }

      } catch (error){
        res.status(500).json({
          error: "Internal server error",
          details:error.message
        });
      }
};

async function handleLoginUser(req,res){

  const createUserData = new CreateUserModel(req.body);
  const {email} = createUserData
  const { password } = req.body;

  const emailExist = await CreateUserModel.findOne({email})
  const passwordExist = await CreateUserModel.findOne({password})

            if(emailExist && passwordExist){
                      return res.status(400).json({
                        message:"Login Successfully"
                      });
            }
            else {
                res.status(400).json({
                          error: "Internal server error",
                          details:error.message
                });
            }
}


module.exports = {
  create,handleLoginUser
};
