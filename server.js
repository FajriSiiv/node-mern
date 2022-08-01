require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workRouter = require("./routes/workouts");
const cors = require("cors");
// PORT
const PORT = process.env.PORT;
//cors
app.use(cors());
// express app
const app = express();
// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workRouter);

//Connect DB (database)
mongoose
  .connect(process.env.MONG_URL)
  .then(() => {
    // listen for requests
    app.listen(PORT, () => {
      console.log("listening on port", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
