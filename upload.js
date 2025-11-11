const express = require("express");
const multer = require("multer");
const PORT = process.env.PORT || 8087;

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

app.listen(PORT, () => console.log("Server running on port " + PORT));
