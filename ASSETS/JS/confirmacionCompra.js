   // Recuperar los datos del carrito desde localStorage
   const carritoGuardado = JSON.parse(localStorage.getItem("productos")) || [];
   const totalCompra = localStorage.getItem("totalCompra") || 0;

   // Mostrar los datos en la tabla
   const tablaCarrito = document.getElementById("tablaCarrito");
   carritoGuardado.forEach(item => {
     const fila = `
       <tr>
         <td>${item.name}</td>
         <td>${item.cantidad}</td>
         <td>$${item.price * item.cantidad}</td>
       </tr>
     `;
     tablaCarrito.innerHTML += fila;
   });

   // Mostrar el total de la compra
   document.getElementById("totalCompra").innerText = `Total: $${totalCompra}`;