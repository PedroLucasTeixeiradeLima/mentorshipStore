const { uuid } = require('uuidv4');
const { client } = require('../services/postgres');



async function createProduct(product){
  const { title, description, quantity, price } = product
  try{
    await client.query("INSERT INTO products (title, description, quantity, price) VALUES ($1, $2, $3, $4)", [title, description, quantity, price])
    const response = await client.query('SELECT * FROM products')
    const products = response.rows
    return products
  }catch(e){
    throw e
  }
}

async function getAllProducts(){
  const response = await client.query('SELECT * FROM products')
  const products = response.rows
  return products
}

async function getProductById(id){
  try{
    const response = await client.query("SELECT * FROM products WHERE product_id = $1", [id])
    const product = response.rows
    return product;
  }catch(e){
    throw e
  }
}

async function deleteProduct(id){
  try{
    await client.query("DELETE FROM products WHERE product_id = $1", [id])
    const response = await client.query('SELECT * FROM products')
    const products = response.rows
    return products
  }catch(e){
    throw e
  }

}
async function updateProduct(body){
  const {
    id,
    title,
    description,
    quantity,
    price
  } = body;
  try{
    await client.query("UPDATE products SET title = $1, description = $2, quantity = $3, price = $4 WHERE product_id = $5", [title, description, quantity, price, id])
    const response = await client.query("SELECT * FROM products WHERE product_id = $1", [id])
    const product = response.rows
    return product
  }catch(e){
    throw e
  }
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
  updateProduct
}