const express = require("express");

require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("server up");
});

const jwt = require("jsonwebtoken")

const jwtTesting = () => {
  const token = jwt.sign({ _id: "acbd21" }, "thisisatest", { expiresIn: "7 days"})
  console.log(token)

  const data = jwt.verify(token, "thisisatest")
  console.log(data)
  const wrong = jwt.verify(token, "thisisatests")
  console.log(wrong)
}

jwtTesting()