require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const productsRouter = require(`./routes/products`);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client_mentorshipStore','dist')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.use(productsRouter);


app.listen(8000, () => {
  console.log('I\'m running at port 8000');
});

