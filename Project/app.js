const express = require("express");
const mongoose = require("mongoose");
const app = express();

const userRoute = require("./Routes/userRoute");

const cors = require("cors");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

mongoose
.connect("mongodb://localhost:27017/Project", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => {
    console.info("MongoDB connected successfully");
})
.catch(() => {
    console.error("Connection failed");
});

app.use(userRoute);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`The server is running on port: ${PORT}`);
});