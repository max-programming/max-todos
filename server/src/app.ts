import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/todos", todoRoutes);

dotenv.config();

const dbURI = process.env.MONGODB_URI!;
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(result => app.listen(5000, () => console.log("listening on port 5000")))
  .catch(err => console.log(err));
