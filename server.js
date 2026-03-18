const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb://127.0.0.1:27017/fitnessDB", {
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const serviceRoutes = require("./routes/serviceRoutes");
const trainerRoutes = require("./routes/trainerRoutes");
const membershipRoutes = require("./routes/membershipRoutes");

app.use("/api/services", serviceRoutes);
app.use("/api/trainers", trainerRoutes);
app.use("/api/memberships", membershipRoutes);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "home.html"))
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});