import express from "express";
import products from "./data/products.js";
import productRoutes from "./routes/productRoutes.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
dotenv.config();
const port = process.env.PORT || 5000;

connectDB(); //Connect to da mangoDB

const app = express();

app.get("/", (req, res) => {
  res.send("API is running af");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on porta ${port}`));
