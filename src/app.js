import express from 'express';
import { readFile } from 'fs/promises';
import path from 'path';

import ProductManager from './ProductManager.js';

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));


const productsFilePath = path.join( './files/Products.json');

// Ruta para obtener todos los productos o limitar la cantidad de resultados
app.get('/products', async (req, res) => {
  try {
    const { limit } = req.query;
    const productManager = new ProductManager();

    // Leer el archivo de productos
    const data = await readFile(productsFilePath, 'utf8');
    const products = JSON.parse(data);

    // Obtener los productos según el límite especificado
    const limitedProducts = limit ? products.slice(0, limit) : products;

    res.json(limitedProducts);
  } catch (error) {
    res.json({ error: 'Error al obtener los productos.' });
  }
});

// Ruta para obtener un producto específico por su ID
app.get('/products/:pid', async (req, res) => {
  try {
    const { pid } = req.params;
    const productManager = new ProductManager();

    // Leer el archivo de productos
    const data = await readFile(productsFilePath, 'utf8');
    const products = JSON.parse(data);

    // Buscar el producto por su ID
    const product = products.find((p) => p.id === parseInt(pid));

    if (product) {
      res.json(product);
    } else {
      res.json({ error: 'Producto no encontrado.' });
    }
  } catch (error) {
    res.json({ error: 'Error al obtener el producto.' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});

