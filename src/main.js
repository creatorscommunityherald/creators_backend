import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
/** 
 *  CONFIGURATION STARTS HERE
 * 
 */
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static("public")); //static files
app.use(express.urlencoded({extended:false}));
app.use(express.json()); //for REST


app.get("/",(request,response)=>{
    response.send("IT's working");
})

/** CONFIGURATION ENDS HERE */

/** APPLICATION STARTS HERE */

app.listen(PORT,function(err){
    if (err) console.log("ERROR",err);
    else console.log(`Server started at http://localhost:${PORT}`);
})


/**APPLICATION SERVER SETUP ENDS HERE */

/** DATABASE CONNECTIVITY STARTS HERE */

mongoose.connect(process.env.MONGODB_URI,{
    useUnifiedTopology: true,
    useNewUrlParser:true,
},function(error){
    if(error) console.log("error occured")  
    console.log("MONGO DB STARTED");
});


/** DATABASE CONNECTIVITY ENDS HERE  */