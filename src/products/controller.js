const Product = require('./model');

const findAll = async (req, res) => {
  const products = await Product.find({});
  res.json(products);

  req.token;
};

const findById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    res.json(product);
  } catch (error) {
    res.status(400).json({
      message: 'Invalid',
      error
    });
  }
};

const editProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  const updated = await Product.findByIdAndUpdate(id, {
    $set: product
  });

  res.json(updated);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const deleted = await Product.findByIdAndDelete(id);

  res.json(deleted);
};

const createProduct = async (req, res) => {
  const { name, price, description } = req.body;

  const product = new Product({
    name,
    price,
    description
  });

  try {
    const response = await product.save();

    res.json(response);
  } catch (error) {
    res.json({
      message: 'Error',
      error
    });
  }
};

module.exports = {
  findAll,
  findById,
  createProduct,
  editProduct,
  deleteProduct
};
