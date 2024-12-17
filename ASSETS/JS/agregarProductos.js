const addToCart = (id, name, price) => {
   if (!id || !name || !price) {
       console.error("Datos inválidos para el producto.");
       return;
   }

   // Recuperar los productos existentes
   const storedData = localStorage.getItem('productos');
   const products = storedData ? JSON.parse(storedData) : [];

   // Verificar si el producto ya existe
   const existingProduct = products.find(product => product.id === id);

   if (existingProduct) {
       // Incrementar la cantidad si el producto ya existe
       existingProduct.cantidad += 1;
   } else {
       // Agregar un nuevo producto con cantidad inicial 1
       const newProduct = { id, name, price, cantidad: 1 };
       products.push(newProduct);
   }

   // Guardar los productos actualizados en localStorage
   localStorage.setItem('productos', JSON.stringify(products));
};
