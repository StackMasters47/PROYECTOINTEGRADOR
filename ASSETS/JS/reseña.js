
document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.querySelector('form');
    const submitButton = reviewForm.querySelector('button[type="submit"]');

    
    function isUserLoggedIn() {
        return JSON.parse(localStorage.getItem('login_success')) !== null;
    }

    
    submitButton.addEventListener('click', (event) => {
        event.preventDefault(); 

        
        if (!isUserLoggedIn()) {
            alert('Para poder hacer reseñas debes iniciar sesión primero.');
            return;
        }

     
        const rating = reviewForm.querySelector('input[name="rate"]:checked');
        const comment = reviewForm.querySelector('textarea').value.trim();

        if (!rating) {
            alert('Por favor, selecciona una calificación.');
            return;
        }

        if (comment === '') {
            alert('Por favor, escribe un comentario.');
            return;
        }

        alert('¡Reseña enviada con éxito!');
        reviewForm.submit(); // Envía el formulario si todos los campos están completos y el usuario ha iniciado sesión
    });
});
