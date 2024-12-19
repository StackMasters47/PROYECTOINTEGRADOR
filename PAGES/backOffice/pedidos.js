const productos = [
    { id: 1, titulo: "Shampoo Hidratante", marca: "Dove", desc: "Para cabello seco", precio: 120, cat: "Cuidado Capilar", subcat: "Shampoo", rutaimg: "/ASSETS/IMG/productos/shampooCafe.jpg"},
    { id: 2, titulo: "Crema Facial", marca: "Nivea", desc: "Hidratante facial", precio: 85, cat: "Cuidado Facial", subcat: "Hidratantes", rutaimg: "/ASSETS/IMG/productos/cremaFacialG.jpg" },
    { id: 3, titulo: "Jabón en barra", marca: "Palmolive", desc: "Aroma a lavanda", precio: 60, cat: "Cuidado Corporal", subcat: "Limpieza", rutaimg: "/ASSETS/IMG/productos/jabonCorporalBarra.jpg"},
    { id: 4, titulo: "Exfoliante corporal", marca: "Chanel", desc: "Esencia floral", precio: 1500, cat: "Belleza", subcat: "Rostro", rutaimg: "/ASSETS/IMG/productos/exfolianteCorporalRosa.jpg"},
    { id: 5, titulo: "Labial Rosa", marca: "Oraos", desc: "Labial color rosa", precio: 130, cat: "Belleza", subcat: "Labios", rutaimg: "/ASSETS/IMG/productos/labialRosa.jpg"},
    { id: 6, titulo: "Protector Solar", marca: "Eucerin", desc: "FPS 50", precio: 300, cat: "Cuidado Facial", subcat: "Protector Solar", rutaimg: "/ASSETS/IMG/productos/BloqueadorSolarPielSeca.jpg"},
    { id: 7, titulo: "Tónico Facial", marca: "La Roche-Posay", desc: "Purificante facial", precio: 200, cat: "Cuidado Facial", subcat: "Limpieza", rutaimg: "/ASSETS/IMG/productos/sueroFacialRosa.jpg"},
    { id: 8, titulo: "Mascarilla Facial", marca: "L'Oréal", desc: "De arcilla", precio: 110, cat: "Cuidado Facial", subcat: "Hidratantes", rutaimg: "/ASSETS/IMG/productos/máscaraNegra.jpg"},
    { id: 9, titulo: "Acondicionador", marca: "Pantene", desc: "Para cabello rizado", precio: 95, cat: "Cuidado Capilar", subcat: "Acondicionador", rutaimg: "/ASSETS/IMG/productos/acondicionadorVerde.jpg"},
    { id: 10, titulo: "Bloqueador", marca: "Purell", desc: "Con aloe vera", precio: 50, cat: "Cuidado Facial", subcat: "Protector Solar", rutaimg: "/ASSETS/IMG/productos/bloqueadorSolar.jpg"}
];

const listaProductos=document.getElementById("listaDeProductos");
    listaProductos.innerHTML="";
    productos.forEach(producto=>{
        const productoHTML=`
            <li class="list-group-item list-group-item-action" data-id="${producto.id}">
                <div class="row w-100 justify-content-between align-items-center">
                    <div class="col-lg-1">
                            <p class="mb-1 text-center">${producto.id}</p>
                    </div>
                    <div class="img-fluid col-lg-1 text-center">
                        <img src="${producto.rutaimg}" class="img-thumbnail" style="width: 50px; height: 50px;" alt="Producto">
                    </div>
                    <div class="col-lg-3">
                        <h5 class="mb-1 text-center">${producto.titulo}</h5>
                    </div>
                    <div class="col-lg-1">
                        <p class="mb-1 text-center"> $${producto.precio}</p>
                    </div>
                    <div class="col-lg-2">
                        <p class="mb-1 text-center">${producto.cat}</p>
                    </div>
                    <div class="col-lg-2 text-wrap text-break">
                        <p class="mb-1 text-center"> ${producto.subcat}</p>
                    </div>
                </div>
            </li>
            `;
            listaProductos.innerHTML += productoHTML;
});