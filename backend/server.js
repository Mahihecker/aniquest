const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");
//>>the undefined things in url
process.on("uncaughtException",(err)=>{
  console.log("uncaughtException shutting down application");
  console.log(err.name,err.message);
  process.exit(1);

});
dotenv.config({ path: "./config.env" });
//>>enviornemnet variable
//console.log(app.get("env"));
//>>we have all the env in process.env dic name all the passwords blah blah

//console.log(process.env);
//>>create the string and replace the password with actual
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
//>>connecting database
//>>connect mathod pass the database and used some methods in the mongoose
mongoose
  .connect(DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
  })
  .then((con) => {
    //console.log(con.connection);
    console.log("DB Connection Successfully");
  });

const port = process.env.PORT || 3000;
const server= app.listen(port, () => {
  console.log(`App running on port ${port}....`);
});

//>>handelingg database error unhandel rejects
process.on("unhandledRejection",(err)=>{
  console.log(err.name,err.message);
  console.log("unhandelRejectopn Shutting down application");
  //>>set doen the entire server
  server.close(()=>{
    process.exit(1);
  });
});
//this is the change


//console.log(D);