import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express on Vercel!" });
});

app.get("/api/test", (req, res) => {
  res.json({ status: "success", environment: "African Code Academy Lab" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Required for Vercel serverless behavior
export default app;
