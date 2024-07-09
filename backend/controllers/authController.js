const crypto=require("crypto");
const {promisify}=require("util");
const jwt=require("jsonwebtoken");
const User=require("./../models/userModel");
const catchAsync=require("../Utils/catchAsync");
const AppError=require("./../Utils/appError");
const sendEmail=require("../Utils/email");
const signToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};
const createSendToken=(user,statusCode,res)=>{
    const token=signToken(user._id);
    const cookieOptions={
        espires:new Date(Date.now()+process.env.JWT_COOKIE_EXPIR_IN*24*60*60*1000),
        //secure:true,
        httpOnly:true,
        
    };
    res.cookie("jwt",token,cookieOptions);
    user.password=undefined;

    res.status(statusCode).json({
        status:"Success",
        token,
        data:{
            user,
        },
    });
};
//Signup
exports.signup=catchAsync(async(req,res,next)=>{
    const newUser=await User.create(req.body);
    
    createSendToken(newUser,201,res);
    
});
//login user
exports.login=catchAsync(async(req,res,next)=>{
    const{email,password}=req.body;
    if(!email||!password){
        return next(new AppError("Please provide ypur email & password"));
    }

    const user=await User.findOne({email}).select("+password");
    if(!user||!(await user.correctPassword(password,user.password))){
        return next(new AppError("Incorrect email and password",401));
    }
    createSendToken(user,200,res);

});

//protecting data (keeping track if its login or logout)
exports.protect=catchAsync(async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token=req.headers.authorization.split(" ")[1];
        
    }
    if(!token){
        return next(new AppError("You are not logged in to get acces",401));
    }
    
    const decoded=await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    const currentUser=await User.findById(decoded.id);
    if(!currentUser){
        return next(new AppError("The User belonging to this token no longer exist",401));
    }
    if(currentUser.changedPasswordAfter(decoded.iat)){
        return next(new AppError("User recently changed the password",401));
    }
    req.user=currentUser;
    next();

});


//--forgot password
exports.forgotPassowrd=catchAsync(async(req,res,next)=>{
    const user=await User.findOne({email:req.body.email});

    if(!user){
        return next(new AppError("there is no user with this email",404));
    }

    const resetToken=user.createPasswordResetToken();
    await user.save({validateBeforeSave:false});

    const resetURL=`${req.protocol}://${req.get("host")}/api/v1/users/resetPassowrd/${resetToken}`;

    const message=`Forget your password Submit a PATCH request with your new password and confirm password to:${resetURL}.\n if didnt forget your password please ignore this email`;
    try{
        await sendEmail({
            email:user.email,
            subject:"Your Password token (valid for 10 min)",
            message,
        });
        res.status(200).json({
            status:"success",
            message:"token sent to email",
        });
    }catch(error){
        user.passwordResetToken = undefined;
        user.passwordResetExpires=undefined;
        await user.save({validateBeforeSave:false});

        return next(new AppError("there was an error sending the email,try again later",500));
    }
    
});

//--reset password
exports.resetPassowrd=async(req,res,next)=>{
    const hashedToken= crypto.createHash("sha256").update(req.params.token).digest("hex");
    const user=await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: {$gt:Date.now()},
    }); 
    if(!user){
        return next(new AppError("Token is invalid or has expired",400));
    }

    user.password=req.body.password;
    user.passwordConfirm=req.body.passwordConfirm;
    user.passwordResetToken=undefined;
    user.passwordResetExpires=undefined;
    await user.save();
    createSendToken(user,200,res);
};

//--update password
exports.updatePassword=catchAsync(async(req,res,next)=>{
   
    const user=await User.findById(req.user.id).select("+password");
    if(!(await user.correctPassword(req.body.passwordCurrent,user.password))){
        return next(new AppError("Your current password is wrong",401));
    }
    user.password =req.body.password;
    user.passwordConfirm=req.body.passwordConfirm;
    await user.save();

    createSendToken(user,200,res);
    
});