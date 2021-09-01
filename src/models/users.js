import mongoose from "mongoose";

let usersSchema = new mongoose.Schema({
  //just a mock will code
  username: String,
  password: String,
  user_type: {
    type: String,
    enum: ["user", "admin", "clerk"],
    default: "user",
  },
  contact_number: String,
  date_joined: {
    type: Date,
    default: Date.now(),
  },
});

export const users = new mongoose.model(usersSchema);

/** ********************************ROCKETMAN***************************** */
