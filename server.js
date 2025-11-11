const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8087;


const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/auth", authRoutes);
app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.send("API is running on Render");
});


app.listen(PORT, () => console.log("Server running on port " + PORT));