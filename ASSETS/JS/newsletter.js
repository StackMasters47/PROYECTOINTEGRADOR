const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviado';

   const serviceID = 'default_service';
   const templateID = 'template_xd3mua9';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Suscribirme';
      alert('Bienvenidx a nuestra comunidad');
    }, (err) => {
      btn.value = 'Suscribirme';
      alert(JSON.stringify(err));
    });
});