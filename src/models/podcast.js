import mongoose from "mongoose";
import user from "./users";

let podcastSchema = new mongoose.Schema({ //just a mock will code 
    podcast_name :String,
    hosted_by:{
        type: user,
    },
    slug:String,
    recorded_date:{
        type:Date,
        default: Date.now()
    },
    publised_date:{
        type:Date,
        default: Date.now()
    },
    status: {
        type:String,
        "enum":['published','draft'],
        default:'draft'
    },
    guest:{ //for a GUEST
        type: new mongoose.model(mongoose.Schema({
            name:String,
            description:String
        }))
    }
      
})

export const podcast = new mongoose.model(podcastSchema);





/** ********************************ROCKETMAN***************************** */