import express from "express";
import cors from "cors";
import "dotenv/config";

import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Povećaj limit za veličinu JSON tela (da može Base64 slike da primi)
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use(cors());

// ✅ Rute
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

// ✅ Pokretanje servera
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  connectDB();
});
