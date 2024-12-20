// Función asincrónica que obtiene los pedidos y clasifica por categoría
async function fetchAndClassifyOrdersByCategory() {
    try {
        // Realiza la petición GET a la API para obtener los pedidos
        const response = await fetch('http://3.14.129.170/api/v1/orders');
        if (!response.ok) {
            throw new Error('Error al obtener los pedidos');
        }
        const orders = await response.json();

        // Crear un objeto para contar la cantidad de productos por categoría
        const categoryCounts = {
            'Cuidado capilar': 0,
            'Cuidado corporal': 0,
            'Cuidado facial': 0,
            'Belleza': 0
        };

        // Itera sobre los pedidos y clasifica los productos por categoría
        orders.forEach(order => {
            order.products.forEach(product => {
                if (categoryCounts.hasOwnProperty(product.category)) {
                    categoryCounts[product.category]++;
                }
            });
        });

        // Muestra el conteo de productos por categoría en la consola
        console.log(categoryCounts);

        // Actualiza el gráfico
        updateChart(categoryCounts);

    } catch (error) {
        console.error('Error al obtener o clasificar los pedidos:', error);
    }
}

// Función para actualizar el gráfico
function updateChart(categoryCounts) {
    // Actualiza los datos en el gráfico
    const chart = Chart.instances[0]; // Suponiendo que solo existe una instancia del gráfico
    chart.data.datasets[0].data = Object.values(categoryCounts);
    chart.data.labels = Object.keys(categoryCounts);
    chart.update();
}

// Llamar a la función
fetchAndClassifyOrdersByCategory();

// Configuración inicial del gráfico (se mantiene igual)
const data = {
    labels: ['Cuidado capilar', 'Cuidado corporal', 'Cuidado facial', 'Belleza'], // Etiquetas de los datos
    datasets: [{
        label: 'Ventas',
        data: [0, 0, 0, 0],  // Inicialmente todos los valores son 0
        backgroundColor: [  // Colores personalizados para cada sección
            '#F1645A',  // Rojo
            '#9f2884',  // Naranja
            '#F6B94F',  // Amarillo
            '#3DBFBB',  // Verde
        ],
        borderColor: [  // Borde blanco para mayor contraste
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',
        ],
        borderWidth: 2
    }]
};

// Configuración de la gráfica
const config = {
    type: 'pie',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            datalabels: {
                color: '#FFFFFF',  // Color blanco para los datos
                font: {
                    weight: 'bold',
                    size: 16
                },
                formatter: (value) => {
                    return value;  // Muestra el valor de ventas sobre los segmentos
                }
            },
            legend: {
                position: 'right',
                labels: {
                    color: '#FFFFFF', // Color blanco para la leyenda
                    font: {
                        size: 15 // Tamaño de fuente para las etiquetas
                    }
                }
            },
            title: {
                display: true,
                text: 'Ventas por categoria',
                color: '#FFFFFF',  // Color blanco para el título
                font: {
                    size: 18
                }
            }
        }
    }
};

// Crear el gráfico
const ctx = document.getElementById('myPieChart').getContext('2d');
new Chart(ctx, config);
