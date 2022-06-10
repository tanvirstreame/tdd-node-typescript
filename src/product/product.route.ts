import { NextFunction, Request, Response } from "express"
const productController = require("./product.controller");

const express = require('express')
const router = express.Router()

router.post("/product", productController.addProduct)

router.get("/product", productController.getProduct)

module.exports = router;
