// Datos generados manualmente
async function fetchOrders() {
    try {
        // Realiza la petición GET a la API
        const response = await fetch('http://localhost:8080/api/v1/orders');
        if (!response.ok) {
            throw new Error('Error al obtener los pedidos');
        }
        const orders = await response.json();

        // Contar la cantidad de pedidos por mes
        const ordersPerMonth = [0, 0, 0, 0]; // Septiembre, Octubre, Noviembre, Diciembre

        // Itera sobre las órdenes y clasifica por mes
        orders.forEach(order => {
            const orderDate = new Date(order.date);
            const month = orderDate.getMonth(); // El mes en JavaScript empieza desde 0 (Enero es 0)
            
            // Incrementa el contador para el mes correspondiente
            if (month >= 8 && month <= 11) {
                ordersPerMonth[month - 8]++; // Ajustamos el índice para que coincida con el mes de la gráfica
            }
        });

        // Generar los datos para la gráfica
        const lineChartData = {
            labels: ['Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            datasets: [
                {
                    label: 'No. de pedidos',
                    data: ordersPerMonth,  // Datos contados por mes
                    borderColor: '#F1645A',  // Color del borde de la línea
                    fill: false,  // No se llena el área debajo de la línea
                }
            ]
        };

        // Configuración del gráfico
        const configLine = {
            type: 'line',
            data: lineChartData,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',  // Posición de la leyenda
                        labels: {
                            color: '#FFFFFF'  // Color blanco para las etiquetas de la leyenda
                        }
                    },
                    title: {
                        display: true,
                        color: '#FFFFFF',
                        text: 'Pedidos por mes',
                        font: {
                            size: 18
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#FFFFFF'  // Texto blanco para las etiquetas del eje X
                        },
                        grid: {
                            color: 'rgba(246, 246, 246, 0.2)'  // Líneas de la cuadrícula en blanco (semi-transparente)
                        }
                    },
                    y: {
                        beginAtZero: true,  // Comenzar el eje Y desde 0
                        ticks: {
                            color: '#FFFFFF'  // Texto blanco para las etiquetas del eje Y
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)'  // Líneas de la cuadrícula en blanco (semi-transparente)
                        }
                    }
                }
            },
        };

        // Crear el gráfico
        const lineCtx = document.getElementById('myLineChart').getContext('2d');
        new Chart(lineCtx, configLine);

    } catch (error) {
        console.error('Error fetching the orders:', error);
    }
}

// Llama a la función para obtener los datos y crear la gráfica
fetchOrders();
