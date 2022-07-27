const express = require("express");

const userRouter = require("./userRoutes");
const productRouter = require("./productRoutes");
const orderRouter = require("./orderRoutes");
const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/order", orderRouter);

module.exports = router;
