const data = {
    labels: ['Cuidado capilar', 'Cuidado corporal', 'Cuidado facial', 'Belleza'], // Etiquetas de los datos
    datasets: [{
        label: 'Ventas',
        data: [12, 19, 3, 5],  // Valores manuales para el ejemplo
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
            'rgba(255, 255, 255, 1)'
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