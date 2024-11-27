const usuarioPrueba = {
  email: "testuser@gmail.com",
  password: "12345"
};

const usuarioPrueba2 = {
  email: "testuser2@gmail.com",
  password: "54321"
}

localStorage.setItem("usuario", JSON.stringify(usuarioPrueba));
localStorage.setItem("usuario2", JSON.stringify(usuarioPrueba2));

function validateUser(event) {
  event.preventDefault();

  const userEmail = document.getElementById("userEmail").value.trim();
  const password = document.getElementById("password").value.trim();
  
  const storedUser1 = JSON.parse(localStorage.getItem("usuario"));
  const storedUser2 = JSON.parse(localStorage.getItem("usuario2"));

  if ((storedUser1 && userEmail === storedUser1.email && password === storedUser1.password) || (storedUser2 && userEmail === storedUser2.email && password === storedUser2.password)) { 
    window.location.href = "../index.html"; 
  } else { 
    document.getElementById("errorMessage").textContent = "Nombre de usuario o contraseña inválidos"; 
  }
}
