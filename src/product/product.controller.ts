import { Request, Response } from "express";

const productService = require("./product.service");
const { Request, Response } = require("express")

exports.addProduct = async (req: Request, res: Response) => {
    try {
        await productService.addProduct(req.body);
        return res.status(201).json({
            succuess: true,
            message: "Product save succesfully"
        })
    }

    catch(error) {
        return res.status(400).json({
            succuess: false,
            message: error?.message
        })
    }  
}

exports.getProduct = async (req: Request, res: Response) => {
    try {
        const data = await productService.getProduct(req.query);
        return res.status(200).json({
            succuess: true,
            data
        })
    }

    catch(error) {
        return res.status(400).json({
            succuess: false,
            message: error?.message
        })
    }
    
}
