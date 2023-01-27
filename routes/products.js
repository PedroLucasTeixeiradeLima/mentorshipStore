const express = require('express');
const productsController = require(`../controllers/products`);

const router = express.Router();


// POST always have = BODY -> all the data comes in body
router.post('/product', (request, response) => {
  const { body } = request;
  const product = productsController.createProduct(body);

  return response.status(201).send(product);
});

router.get('/product', async (request, response) => {
  const products = await productsController.getAllProducts()
  return response.send(products);
})

router.get('/product/:id', (request, response) => {
  const { id } = request.params;
  return response.send(productsController.getProductById(id));
})

router.delete('/product/:id', (request, response) => {
    const { params } = request;
    const { id } = params;


    //const deletedProduct = products.find((product) => product.id === id)
//
    //if(!deletedProduct) {
    //  return response.status(401).send(products);
    //}
//
    //const filteredProducts = products.filter((product) => product.id !== id)
    //products = filteredProducts

    return response.send(productsController.deleteProduct(id));
})

router.put('/product/', (request, response) => {
  console.log('Beginning')
    const {
      id,
      title,
      description,
      quantity,
      price
    } = request.body;
    

    // [1,2,3,4]
    return response.send(productsController.updateProduct(id, title, description, quantity, price));
})

module.exports = router;
