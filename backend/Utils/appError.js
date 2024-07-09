//>>creating our error handel model work for every api coming
class AppError extends Error{
    constructor(message,statusCode){

        super(message);

        this.statusCode=statusCode;
        this.status=`${statusCode}`.startsWith("4")?"fail":"error";
       
        this.isOperational=true;

        Error.captureStackTrace(this,this.constructor);
    }
}

module.exports=AppError;