const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
    <div class="image-containerH"></div>

    <div class="container-logoH">
      <img src="../Imagenes/logo1.png" alt="logo">
    </div>

    <!--AQUI VA LA BARRA DA NAVEGACIÓN-->
    <div class="container-nav">
      <nav class="navbar navbar-expand-lg ">
        <ul class="nav nav-pills">
         <li class="nav-item dropdown">
            <button type="button" id="botonp1" class="btn btn-outline-primary">
              Cuidado corporal
            </button>
            <ul class="dropdown-menu" aria-labelledby>
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </li>
          </li>
          <li class="nav-item dropdown">
            <button type="button" id="botonp2" class="btn btn-outline-primary">
              Cuidado capilar
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <button type="button" id="botonp3" class="btn btn-outline-primary">
              Cuidado facial
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <button type="button" id="botonp4" class="btn btn-outline-primary">
              Belleza
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <button type="button" id="botonm" class="btn btn-outline-primary">
              Menú
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="../Inicio/index.html">Inicio</a></li>
              <li><a class="dropdown-item" href="../Nosotros/index.html">Acerca de nosotros</a></li>
              <li><a class="dropdown-item" href="../Contacto/contacto.html">Contáctanos</a></li>
              <li><a class="dropdown-item" href="../Usuarios/index.html">Usuarios</a></li>
              <li><a class="dropdown-item" href="../Formularios_Cuidado/index.html">Conoce tu tipo de piel</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
              <li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>

`
footer.innerHTML = `
 <div class="containerF">
         <div class="descripcionF">
           <div class="logo">
             <img src="../Imagenes/logo1.png" alt="logo" />
             <a href=""></a>
           </div>
   
           <!-- describirción -->
           <p id pf>
             Nuestra plataforma de e-commerce destaca en el mercado de cuidado personal por ofrecer una experiencia única,
             enfocada en las necesidades individuales de lxs usuarixs y su presupuesto.
   
           </p>
   
           <!-- Social Media -->
           <div class="social-media-container">
             <div class="social-media">
               <box-icon color="#fff" type="logo" name="instagram"></box-icon>
             </div>
             <div class="social-media">
               <box-icon color="#fff" name="youtube" type="logo"></box-icon>
             </div>
             <div class="social-media">
               <box-icon color="#fff" name="facebook-circle" type="logo"></box-icon>
             </div>
             <div class="social-media">
               <box-icon color="#fff" type="logo" name="tiktok"></box-icon>
             </div>
           </div>
         </div>
   
         <div class="link-containerF">
   
           <div class="info">
             <h1>Información</h1>
             <ul>
               <li>
                 <a href="#">Promociones</a>
               </li>
               <li>
                 <a href="#">Iniciar sesión/Registrarme</a>
               </li>
               <li>
                 <a href="#">Informacion importante</a>
               </li>
               <li>
                 <a href="#">Aviso de privacidad</a>
               </li>
             </ul>
           </div>
   
           <div class="nosotros">
             <h1>Acerca de Nosotros</h1>
             <ul>
               <li>
                 <a href="#">Colaboradores</a>
               </li>
               <li>
                 <a href="#">Misión</a>
               </li>
               <li>
                 <a href="#">Visión</a>
               </li>
               <li>
                 <a href="#">Valores</a>
               </li>
             </ul>
           </div>
   
           <div class="navegacion">
             <h1>Categorias</h1>
             <ul>
               <li>
                 <a href="#">Cuidado corporal</a>
               </li>
               <li>
                 <a href="#">Cuidado capilar</a>
               </li>
               <li>
                 <a href="#">Cuidado facial</a>
               </li>
               <li>
                 <a href="#">Belleza</a>
               </li>
             </ul>
           </div>
         </div>
       </div>

`