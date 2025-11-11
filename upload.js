const express = require("express");
const multer = require("multer");

const app = express();

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  res.json({
    message: "File uploaded successfully",
    originalName: req.file.originalname,
    storedName: req.file.filename,
    size: req.file.size + " bytes",
    path: req.file.path
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
