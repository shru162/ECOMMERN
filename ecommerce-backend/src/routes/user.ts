import express from "express";
import { deleteUser, getAllUsers,getUser, newUser } from "../controllers/user.js";
import { adminOnly } from "../middlewares/auth.js";

const app = express.Router();

// Define the POST route handler
app.post("/new",newUser);
app.get("/all",getAllUsers,adminOnly);
app.get("/:id",getUser);
app.get("/:id",deleteUser);
app.get("/:id",adminOnly);

export default app;
