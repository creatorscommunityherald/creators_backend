import mongoose from "mongoose";

let eventSchema = new mongoose.Schema({ //just a mock will code 
    event_name :String,
    
})

export const event = new mongoose.model(eventSchema);





/** */