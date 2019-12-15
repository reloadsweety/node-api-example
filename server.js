const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hello', { useNewUrlParser: true });

// const Product = mongoose.model('products', { name: String, name2: String });

// const product = new Product({
//   name: ' sss',
//   name2: 'name2',
//   name3: 'asdfasfds',
//   name4: 'name4'
// });

// product.save().then(() => console.log('saved'));

// const bobby = new Student({ name: 'Bobby' });
// bobby.save().then(() => console.log('ok'));

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const router = express.Router();

const productRouter = require('./src/products/router');
productRouter.init(router);

const orderRouter = require('./src/orders/order.router');
orderRouter.init(router);

app.get('/login', (req, res) => {
  // mock login
  const token = jwt.sign({ id: '12345' }, 'super_secretttt', {
    expiresIn: '4h'
  });

  res.json({
    token
  });
});

app.use(router);

app.use((error, req, res, next) => {
  console.log(error.stack);

  res.status(error.status || 500);

  res.json({
    errors: {
      message: error.message,
      error
    }
  });
});

app.listen(3001, () => {});
