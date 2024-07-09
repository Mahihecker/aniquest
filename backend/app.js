const rateLimit=require("express-rate-limit");
const express = require("express");
const morgan = require("morgan");
const helmet=require("helmet");
const mongoSanitize=require("express-mongo-sanitize");
const xss=require("xss-clean");
const hpp=require("hpp");
const AppError =require("./Utils/appError");
const globalErrorHandler= require("./controllers/errorController");
const usersRouter = require("./routes/usersRoute");
const cors=require("cors");
const app = express();
//data limit
app.use(express.json({limit:"10kb"}));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(mongoSanitize());

app.use(xss());

app.use(helmet());


app.use(hpp({
  whitelist:["duration","difficulty","maxGroupSize","price","ratingsAverage","ratingsQuantity"],
}));

// const limiter=rateLimit({
  
//   max:100,
//   windowMs:60*60*1000,
//   message:"too many requests from his IP,please try again in an hour",
// }
// );

// app.use("/api",limiter);
app.use(morgan("dev"));

app.use(express.static(`${__dirname}/nft-data/img`));

//CUSTOM MIDDLE WARE
app.use((req, res, next) => {
  console.log("Hey i am from middleware function 👋");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  
  next();
});


app.use("/api/v1/users", usersRouter);

app.all("*",(req,res,next)=> {
 

  next(new AppError(`Can't find ${req.originalUrl} on this server`,404));
});

app.use(globalErrorHandler);

module.exports = app;