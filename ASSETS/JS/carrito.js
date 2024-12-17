// Referencias a elementos HTML
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const clearCartButton = document.getElementById("clear-cart");

// Recuperar el carrito desde localStorage
let cart = JSON.parse(localStorage.getItem("productos")) || [];

// Función para mostrar el carrito
const displayCart = () => {
    cartItems.innerHTML = ""; // Limpia la tabla
    let total = 0;

    cart.forEach((item) => {
        const subtotal = item.price * item.cantidad;
        total += subtotal;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.cantidad}</td>
            <td>$${subtotal.toFixed(2)}</td>
            <td>
                <button  class="increase" data-id="${item.id}">+</button>
                <button  class="decrease" data-id="${item.id}">-</button>
                <button  class="remove" data-id="${item.id}">Eliminar</button>
            </td>
        `;
        cartItems.appendChild(row);
    });

    cartTotal.textContent = total.toFixed(2);
};

// Función para actualizar la cantidad de un producto
const updateQuantity = (id, change) => {
    const product = cart.find((item) => item.id === id); // id ya convertido a número

    if (product) {
        product.cantidad += change;

        if (product.cantidad <= 0) {
            cart = cart.filter((item) => item.id !== id);
        }

        saveCart();
        displayCart();
    }
};

// Función para eliminar un producto del carrito
const removeProduct = (id) => {
    cart = cart.filter((item) => item.id !== id); // id ya convertido a número
    saveCart();
    displayCart();
};


// Función para guardar el carrito en localStorage
const saveCart = () => {
    localStorage.setItem("productos", JSON.stringify(cart));
};

// Calcular total y guardar también
const total = cart.reduce((acc, item) => acc + item.price * item.cantidad, 0);
localStorage.setItem("totalCompra", total);

// Vaciar el carrito
clearCartButton.addEventListener("click", () => {
    cart = [];
    saveCart();
    displayCart();
});

// Manejar clics en la tabla
cartItems.addEventListener("click", (e) => {
    const id = Number(e.target.dataset.id); // Convertir id a número

    if (e.target.classList.contains("increase")) {
        updateQuantity(id, 1); // Incrementa la cantidad
    } else if (e.target.classList.contains("decrease")) {
        updateQuantity(id, -1); // Reduce la cantidad
    } else if (e.target.classList.contains("remove")) {
        removeProduct(id); // Elimina el producto
    }
});

// Inicializar la página
document.addEventListener("DOMContentLoaded", displayCart);
