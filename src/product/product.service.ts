const { model } = require("mongoose");
const Product = model("Product");

exports.addProduct = async (data: any) => {
    return await Product.create(data);
}

exports.getProduct = async (filter: any) => {
    return await Product.find(filter).lean();
}
