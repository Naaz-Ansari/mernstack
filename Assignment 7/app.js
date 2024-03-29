const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const userRoutes = require("./routes/userRoute");
const adminRoutes = require("./routes/adminRoute");
const HttpError = require("./utils/httpError");

const port = 3000;
app.use(bodyParser.json());

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", adminRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Page not found", 404);
  throw error;
});

app.use((error, req, res, next) => {
  res.status(error.code);
  res.json({
    message: error.message || "Unknown error occured",
    code: error.code,
  });
});


mongoose.connect('mongodb+srv://Naaz-Ansari:abcd123@cluster0.y6ugx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }).then(() => {
    app.listen(port, () => {
      console.log(`App running on http://localhost:${port}`)
    });
  }).catch(err => {
    console.log(err);
  });