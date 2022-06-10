import { NextFunction, Request, Response } from "express"

const express = require('express')
const router = express.Router()
const productRoute = require("../product/product.route");

router.use("/api", productRoute);

module.exports = router;
