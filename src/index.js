import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Dummy endpoint
app.get("/", (req, res) => {
  res.json({ message: "Dummy backend API working!" });
});

// Sample API
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Prem" },
    { id: 2, name: "Shankar" }
  ]);
});

// Sample POST
app.post("/api/data", (req, res) => {
  res.json({ received: req.body });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
