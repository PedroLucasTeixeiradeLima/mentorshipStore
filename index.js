const express = require('express');

const app = express();

app.use(express.json());

const router = express.Router();

router.get('/', (request, response) => {
  response.send('<h2> Hello world! </h2>');
});

const products = [];

// POST always have = BODY -> all the data comes in body
router.post('/product', (request, response) => {
  const body = request.body;
  
  products.push(body);

  response.status(201).send();
});

router.get('/product', (request, response) =>{
  response.send(products);
})

app.use(router);

app.listen(8000, () => {
  console.log('I\'m running at port 8000');
});

// PRODUCT
// {
//   id: number,
//   name: string,
//   description: string,
//   price: number,
//   quantity: number,
// }