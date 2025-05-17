import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  
});


const User = mongoose.model("Registration", registrationSchema);
export default User;