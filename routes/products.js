const express = require('express');
const productsController = require(`../controllers/products`);

const router = express.Router();


// POST always have = BODY -> all the data comes in body
router.post('/product', async (request, response) => {
  const { body } = request;
  const product = await productsController.createProduct(body);

  return response.status(201).send(product);
});

router.get('/product', async (request, response) => {
  const products = await productsController.getAllProducts()
  return response.send(products);
})

router.get('/product/:id', async (request, response) => {
  const { id } = request.params;
  return response.send(await productsController.getProductById(id));
})

router.delete('/product/:id', async(request, response) => {
    const { params } = request;
    const { id } = params;

    return response.send(await productsController.deleteProduct(id));
})

router.put('/product/', async (request, response) => {
  console.log('Beginning')
    body = request.body

    // [1,2,3,4]
    return response.send(await productsController.updateProduct(body));
})

module.exports = router;
