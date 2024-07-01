import express from "express";

import { adminOnly } from "../middlewares/auth.js";
import { deleteProduct, getAdminProducts, getAllCategories,  getAllProducts, getSingleProduct, getlatestProducts, newProduct, updateProduct } from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";

const app = express.Router();

app.post("/new",singleUpload,newProduct,adminOnly);
app.get("/all", getAllProducts);
app.get("/latest",getlatestProducts);
app.get("/categories",getAllCategories);
app.get("/admin-products",adminOnly,getAdminProducts);

app.route("/id").get(getSingleProduct).put(adminOnly,singleUpload,updateProduct).delete(adminOnly,deleteProduct);

export default app;
