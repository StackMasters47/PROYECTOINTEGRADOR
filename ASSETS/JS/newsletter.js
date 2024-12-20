const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   const emailInput = document.getElementById('email_id'); 
   const emailValue = emailInput.value; 
   // Expresión regular para validar el formato de correo 
   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

   btn.value = 'Enviado';

   const serviceID = 'default_service';
   const templateID = 'template_xd3mua9';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Suscribirme';
      alert('Bienvenidx a nuestra comunidad');
      this.reset();
    }, (err) => {
      btn.value = 'Suscribirme';
      alert(JSON.stringify(err));
    });
});