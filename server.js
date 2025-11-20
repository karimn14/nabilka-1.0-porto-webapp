const express = require("express");
const path = require("path");
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "build")));

// Handle any requests that don't match the static files
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Use Heroku's assigned port or 3000 locally
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
