// Realizamos la petición asincrona
async function obtenerPedidos() {
    try {
        const response = await fetch('/api/v1/orders');
        const pedidos = await response.json();
        
        const listaDePedidos = document.getElementById('listaDePedidos');

        // Limpiamos el contenido previo
        listaDePedidos.innerHTML = '';

        // Recorremos cada pedido y mostramos los detalles
        pedidos.forEach(pedido => {
            const pedidoElement = document.createElement('li');
            pedidoElement.classList.add('list-group-item');

            // Formateamos la fecha en el formato deseado
            const fecha = new Date(pedido.date).toLocaleDateString('es-MX', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric'
            });

            const idProductos = pedido.products.length ? pedido.products.map(p => p.id).join(', ') : 'Sin productos';

            pedidoElement.innerHTML = `
                <div class="row w-100 justify-content-between align-items-center">
                    <div class="col-lg-1">
                        <h6 class="mb-1 text-center">${pedido.id}</h6>
                    </div>
                    <div class="col-lg-2">
                        <h6 class="mb-1 text-center">${fecha}</h6>
                    </div>
                    <div class="col-lg-2">
                        <h6 class="mb-1 text-center">${pedido.status}</h6>
                    </div>
                    <div class="col-lg-2">
                        <h6 class="mb-1 text-center">${pedido.user.id}</h6>
                    </div>
                    <div class="col-lg-3 text-wrap text-break">
                        <h6 class="mb-1 text-center">${idProductos}</h6>
                    </div>
                    <div class="col-lg-2">
                        <h6 class="mb-1 text-center">$${pedido.total}</h6>
                    </div>
                </div>
            `;

            listaDePedidos.appendChild(pedidoElement);
        });
    } catch (error) {
        console.error('Error al obtener los pedidos:', error);
    }
}

// Llamamos a la función cuando la página cargue
document.addEventListener('DOMContentLoaded', obtenerPedidos);
