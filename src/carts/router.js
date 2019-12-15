const { findAll } = require('./controller');

const init = router => {
  router.get('/carts', findAll);
};

module.exports = {
  init
};
