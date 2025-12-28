const Joi = require('joi');

const signUpValidation = (req,res,nexg)=>{
    const signUpSchema = Joi.object({
        name:Joi.string().min(3).max(30).required(),
        email:Joi.string().email().required(),
        mobileNumber:Joi.string().pattern(new RegExp('^[0-9]{10}$')).required(),
        password:Joi.string().min(6).max(30).required()
    });

    const { error } = schema.validate(req.body);
    if(error){
        return res.status(400).json({message:error.details[0].message});
    }

}