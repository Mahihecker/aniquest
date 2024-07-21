//------USERS
const User = require("../models/userModel");
const catchAsync=require("../Utils/catchAsync");
const AppError=require("../Utils/appError");
const filterObj=(obj,...allowedFields)=>{
  const newObj={};
  Object.keys(obj).forEach((el)=>{
    if(allowedFields.includes(el))newObj[el]=obj[el];
  });
  return newObj;
};
exports.updateMe=catchAsync(async(req,res,next)=>{
  if(req.body.password||req.body.passwordConfirm){
    return next(new AppError("this route is not for password Update.please use/updateMyPassword.",400));
  }
  const filteredBody=filterObj(req.body,"name","email");
  const updateUser= await User.findByIdAndUpdate(req.user.id,filteredBody,{
    new:true,
    runValidators:true,
  });
 
  res.status(200).json({
    status:"success",
    data:{
      user:updateUser,
    },

  });
});




exports.createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
};



exports.updateUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
};


