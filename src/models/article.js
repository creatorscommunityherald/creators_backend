import mongoose from "mongoose";

let articleSchema = new mongoose.Schema({ //just a mock will code 
    article_name :String,
    
})

export const article = new mongoose.model(articleSchema);