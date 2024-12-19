// Datos generados manualmente
async function name(params) {
    
}
const lineChartData = {
    labels: ['Septiembre','Octubre', 'Noviembre', 'Diciembre'],
    datasets: [
    {
        label: 'No. de pedidos',
        data: [1, 3, 3, 5,7],  // Datos de ejemplo para el Dataset 1
        borderColor: '#F1645A',  // Color del borde de la línea
        // backgroundColor: 'rgba(1, 0, 0, 0.2)',  // Color de fondo de la línea (transparente)
        // fill: true,  // Si quieres llenar el área debajo de la línea
    }
    ]
};

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