document.getElementById('skinTypeForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitamos que el formulario recargue la página

    // Obtenemos las respuestas del usuario
    const respuesta1 = document.getElementById('pregunta1').value;
    const respuesta2 = document.getElementById('pregunta2').value;
    const respuesta3 = document.getElementById('pregunta3').value;

    // Inicializamos un array para almacenar errores
    const errors = [];
    const alertDiv = document.getElementById('alert');

    // Validamos si todas las preguntas tienen respuesta
    if (!respuesta1) errors.push('Selecciona un elemento de la lista');
    if (!respuesta2) errors.push('Selecciona un elemento de la lista');
    if (!respuesta3) errors.push('Selecciona un elemento de la lista');

    // Mostramos si hay alguno
    if (errors.length > 0) {
        alertDiv.innerHTML = errors.join('<br>'); // Mostramos los errores en el div de alerta
        alertDiv.classList.remove('d-none'); // Se ve el div de alerta
        return; // Terminamos aquí si hay errores
    }

    // Ocultamos el div de alerta si no hay errores
    alertDiv.classList.add('d-none');

    // Contamos cuántas veces se eligió cada tipo
    let conteoGrasa = 0;
    let conteoMixta = 0;
    let conteoSeca = 0;

    // Revisamos cada respuesta y aumentamos el conteo correspondiente
    if (respuesta1 === 'grasa') conteoGrasa++;
    if (respuesta1 === 'mixta') conteoMixta++;
    if (respuesta1 === 'seca') conteoSeca++;

    if (respuesta2 === 'grasa') conteoGrasa++;
    if (respuesta2 === 'mixta') conteoMixta++;
    if (respuesta2 === 'seca') conteoSeca++;

    if (respuesta3 === 'grasa') conteoGrasa++;
    if (respuesta3 === 'mixta') conteoMixta++;
    if (respuesta3 === 'seca') conteoSeca++;

    // Determinamos cuál tiene el mayor conteo
    let tipoPiel = '';
    if (conteoGrasa > conteoMixta && conteoGrasa > conteoSeca) {
        tipoPiel = 'grasa';
    } else if (conteoMixta > conteoGrasa && conteoMixta > conteoSeca) {
        tipoPiel = 'mixta';
    } else {
        tipoPiel = 'seca';
    }

    // Resultado para el usuario
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <div class="alert alert-info" role="alert">
            ¡Tu tipo de piel es <strong>${tipoPiel.toUpperCase()}</strong>! 🪷<br>
            ¡Visita nuestra página para que veas productos adecuados a tu tipo de piel!
        </div>
        <div class="d-flex flex-column gap-2 mt-3">
        <a href="/PAGES/paginaCuidadoCorporal.html" class="btn btn-primary">
            Ir a la página de cuidado corporal
        </a>
        <a href="/PAGES/paginaCuidadoFacial.html" class="btn btn-secondary">
            Ir a la página de cuidado facial
        </a>
    </div>
`;
       // Objeto de datos
       const datos = {
        respuesta1,
        respuesta2,
        respuesta3,
        tipoPiel,
        fecha: new Date().toISOString().split('T')[0] // Fecha en formato YYYY-MM-DD
    };

    // Guardar en un archivo JSON
    guardarDatos(datos);
});

function guardarDatos(datos) {
    // Simulación de guardar en un archivo JSON
    console.log("Datos guardados:", datos);
}
