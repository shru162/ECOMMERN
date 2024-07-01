//importing routes
import express from "express";
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
const port = 4000;
connectDB();
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("api working with api/v1");
});
//using routes
app.use("/api/v1/user", userRoute);
app.use((err, req, res, next) => {
    return res.status(400).json({
        success: true,
        message: "Some Error",
    });
});
app.listen(port, () => {
    console.log(`express is working on port 4000`);
});
