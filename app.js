const express = require("express");
const dotenv = require("dotenv");
const bookRoutes = require("./routes/book.routes");
const memberRoutes = require("./routes/member.routes");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // for parsing application/json

// Routes
app.use("/api/books", bookRoutes);
app.use("/api/members", memberRoutes);

app.get("/", (req, res) => {
  res.send("Library Management API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
