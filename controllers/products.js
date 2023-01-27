const { uuid } = require('uuidv4');
const { client } = require('../services/postgres');


let products = [];


function createProduct(product){
  
  products.push({
    id: uuid(),
    ...product
  });

  return products;
}

async function getAllProducts(){
  return await client.query('SELECT * FROM products')
}

function getProductById(id){
  const product = products.find((product) => product.id === id)
  return product;
}

function deleteProduct(id){
  const deletedProduct = products.find((product) => product.id === id)

  if(!deletedProduct) {
    return products;
    //return response.status(401).send(products);
  }
  const filteredProducts = products.filter((product) => product.id !== id)
  products = filteredProducts
  return deletedProduct;
}
function updateProduct(id, title, description, quantity, price){
  const updatedProducts = products.map((product) => {
    // return something
    if (product.id === id) {
      // Update the product

      const newProduct = {
        id: id,
        title: title,
        description: description,
        quantity: quantity,
        price: price
      }
      
      return newProduct
    }

    return product;
  });
  products = updatedProducts;
  return products;
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
  updateProduct
}