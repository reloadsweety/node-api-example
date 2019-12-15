const {
  findAll,
  findById,
  createProduct,
  editProduct,
  deleteProduct
} = require('./controller');

const auth = require('../../auth');

const middlewareCustom = (req, res, next) => {
  const token = req.headers['Authorization'] || req.query.token;

  if (req.query.token) {
    console.log('req.query.tokne', req.query.token);
    next();
  } else {
    // res.status(401).json({
    //   message: 'Unauthorized'
    // });
    res.send('Text');
  }
};

const init = router => {
  router.get('/products', middlewareCustom, findAll);
  router.post('/products', auth.required, createProduct);

  router.get('/products/:id', findById);
  router.put('/products/:id', editProduct);
  router.delete('/products/:id', deleteProduct);
};

module.exports = {
  init
};
