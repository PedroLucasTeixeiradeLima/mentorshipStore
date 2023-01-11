# Simple Store App

## Routes
Create products routes

1. Create Product: [POST] /product
2. Get Products [GET] /product
3. Get Product [GET] /product/:id (find)
4. Update Product: [PUT] /product (map)
5. Delete Product [DELETE] /product/:id (filter)

## Product structure

```javascript
  {
    id: string,
    title: string,
    description: string,
    quantity: number,
    price: number
  }
```

