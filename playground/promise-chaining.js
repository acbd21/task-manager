const mongoose = require("../src/db/mongoose.js");
const User = require("../src/db/models/user.js");
const Task = require("../src/db/models/task.js");

User.findByIdAndUpdate("65159ce7a03283fb0f0ded6c", { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: user.age });
  })
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });

Task.findByIdAndRemove("6515a052a8205b1fa42a672f")
  .then((result) => {
    console.log(result);
    return Task.countDocuments({ completed: false });
  })
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });

const deleteAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });

  return count;
};

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });

  return count;
};
