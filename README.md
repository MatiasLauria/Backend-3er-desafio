# Backend-3er-desafio

Se instalaron las dependencias a partir del comando npm install
Se hecha a andar el servidor
se harcodea un archivo con 10 productos
servidor corriendo en el puerto 8080.
http://localhost:8080/products sin query, eso debe devolver todos los 10 productos.
http://localhost:8080/products?limit=5 , eso debe devolver sólo los primeros 5 de los 10 productos.
http://localhost:8080/products/2, eso debe devolver sólo el producto con id=2.
http://localhost:8080/products/34123123, al no existir el id del producto, debe devolver un objeto con un error indicando que el producto no existe.
