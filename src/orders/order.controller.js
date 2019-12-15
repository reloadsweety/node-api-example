const Order = require('./model');

const findAll = async (req, res) => {
  const orders = await Order.find({});
  res.json(orders);
};

const findById = (req, res) => {
  const { id } = req.params;

  res.json({
    id
  });
};

const editOrder = (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    message: 'editProduct'
  });
};

const deleteOrder = (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    message: 'deleteProduct'
  });
};

const createOrder = async (req, res) => {
  const payload = req.body;
  console.log('order', {
    ...payload,
    products_embeded: [{ id: 1, name: 'product embeded' }]
  });

  const order = new Order({
    ...payload,
    products_embeded: [{ id: 1, name: 'product embeded' }]
  });

  const created = await order.save();
  res.json(created);
};

module.exports = {
  findAll,
  findById,
  createOrder,
  editOrder,
  deleteOrder
};
