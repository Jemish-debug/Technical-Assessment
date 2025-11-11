const Product = require("../models/productModel");

exports.createProduct = async (req, res) => {
    console.log("Received body:", req.body);
    const product = await Product.create(req.body);
    console.log("Saved to DB:", product);

    res.json({
      message: "Product created successfully",
      product
    });
    
};


exports.getProducts = async (req, res) => {
  res.json(await Product.find());
};

exports.updateProduct = async (req, res) => {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      message: "Product updated successfully",
      product: updated
    });
};


exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({message: "Product deleted successfully"});
};