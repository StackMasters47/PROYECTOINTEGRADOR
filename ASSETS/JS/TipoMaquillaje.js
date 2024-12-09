document.getElementById('colorimetryForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitamos que el formulario recargue la página

    // Obtenemos las respuestas del usuario
    const respuesta1 = document.getElementById('pregunta1').value;
    const respuesta2 = document.getElementById('pregunta2').value;
    const respuesta3 = document.getElementById('pregunta3').value;

    // Inicializamos un array para almacenar errores
    const errors = [];
    const alertDiv = document.getElementById('alert');

    // Validamos si todas las preguntas tienen respuesta
    if (!respuesta1) errors.push('Selecciona una opción en la primera pregunta.');
    if (!respuesta2) errors.push('Selecciona una opción en la segunda pregunta.');
    if (!respuesta3) errors.push('Selecciona una opción en la tercera pregunta.');

    // Mostramos si hay errores
    if (errors.length > 0) {
        alertDiv.innerHTML = errors.join('<br>'); // Mostramos los errores en el div de alerta
        alertDiv.classList.remove('d-none'); // Se muestra el div de alerta
        return; // Terminamos aquí si hay errores
    }

    // Ocultamos el div de alerta si no hay errores
    alertDiv.classList.add('d-none');

    // Contamos cuántas veces se eligió cada tipo
    let conteoFrio = 0;
    let conteoCalido = 0;
    let conteoNeutral = 0;

    // Revisamos cada respuesta y aumentamos el conteo correspondiente
    if (respuesta1 === 'fria') conteoFrio++;
    if (respuesta1 === 'calida') conteoCalido++;
    if (respuesta1 === 'neutral') conteoNeutral++;

    if (respuesta2 === 'fria') conteoFrio++;
    if (respuesta2 === 'calida') conteoCalido++;
    if (respuesta2 === 'neutral') conteoNeutral++;

    if (respuesta3 === 'fria') conteoFrio++;
    if (respuesta3 === 'calida') conteoCalido++;
    if (respuesta3 === 'neutral') conteoNeutral++;

    // Determinamos cuál tiene el mayor conteo
    let tonoPiel = '';
    let recomendaciones = '';
    if (conteoFrio > conteoCalido && conteoFrio > conteoNeutral) {
        tonoPiel = 'Frío';
        recomendaciones = 'Usa tonos plateados, rosados, azules, colores pastel. Sombras grises, lilas o plateados; labiales rosados o morado ciruela.';
    } else if (conteoCalido > conteoFrio && conteoCalido > conteoNeutral) {
        tonoPiel = 'Cálido';
        recomendaciones = 'Usa tonos dorados, naranjas, verdes oliva y terracota. Sombras doradas, bronce o cobrizos; labiales coral o nude cálido.';
    } else {
        tonoPiel = 'Neutral';
        recomendaciones = 'Puedes usar tanto tonos cálidos como fríos. Experimenta con ambas paletas.';
    }

    // Resultado para el usuario
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <div class="alert alert-info" role="alert">
            ¡Tu tono de piel/colorimetría es <strong>${tonoPiel}</strong>! 🎨<br>
            Recomendaciones: ${recomendaciones}
        </div>
           <div class="d-flex flex-column gap-2 mt-3">
        <a href="/PAGES/paginaBelleza.html" class="btn btn-primary">
            Ir a la página de Belleza
        </a>
    `;
    // Objeto de datos
    const datos = {
        respuestas: {
            pregunta1: respuesta1,
            pregunta2: respuesta2,
            pregunta3: respuesta3,
        },
        conteos: {
            frio: conteoFrio,
            calido: conteoCalido,
            neutral: conteoNeutral,
        },
        tonoPiel,
        recomendaciones,
        fecha: new Date().toISOString().split('T')[0], // Fecha en formato YYYY-MM-DD
    };
    // Guardar en un archivo JSON
    guardarDatos(datos);
    // Función para guardar datos
    function guardarDatos(datos) {
        // Simulación de guardar en un archivo JSON
        console.log('Datos guardados:', datos);
    }

});
