const {
  findAll,
  findById,
  createOrder,
  editOrder,
  deleteOrder
} = require('./order.controller');

const init = router => {
  router.get('/orders', findAll);
  router.post('/orders', createOrder);

  router.get('/orders/:id', findById);
  router.put('/orders/:id', editOrder);
  router.delete('/orders/:id', deleteOrder);
};

module.exports = {
  init
};
