import mongoose from "mongoose";

let podcastSchema = new mongoose.Schema({ //just a mock will code 
    podcast_name :String,
    
})

export const podcast = new mongoose.model(podcastSchema);