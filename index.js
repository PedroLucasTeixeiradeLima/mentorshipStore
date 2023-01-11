const express = require('express');
const productsRouter = require(`./routes/products`);

const app = express();

app.use(express.json());
app.use(productsRouter);

app.listen(8000, () => {
  console.log('I\'m running at port 8000');
});

