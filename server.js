const express = require("express");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Container info for curl request
const containerId = process.env.HOSTNAME || "demo-web";
let visitCount = 0;

// Endpoint for curl test
app.get("/", (req, res) => {
  if (req.headers["user-agent"] && req.headers["user-agent"].includes("curl")) {
    visitCount++;
    res.send(`${containerId}: Total number of visit is: ${visitCount}`);
  } else {
    res.sendFile(path.join(__dirname, "views", "index.html"));
  }
});

// Other endpoints
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});

app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "services.html"));
});

// Handle form submission
app.post("/contact", (req, res) => {
  // Simulate processing delay
  setTimeout(() => {
    res.json({ success: true, message: "Your message has been sent!" });
  }, 2000);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
