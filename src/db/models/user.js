const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");

const url = "mongodb://127.0.0.1:27017/task-manager-api";
mongoose.connect(url);

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("email is invalid");
      }
    },
  },
  password: {
    type: String,
    trim: true,
    required: true,
    minLength: 6,
    validate(value) {
      if (value.includes("password")) {
        throw new Error("Password cannot be 'password'");
      }
    },
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    default: 0,
  },
});

schema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Unable to login");
  }

  const isMatch = await bcryptjs.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Unable to login");
  }

  return user;
};


schema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcryptjs.hash(user.password, 8);
  }

  next();
});

const User = mongoose.model("User", schema);

module.exports = User;
