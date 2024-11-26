const opciones = ["bodyCare", "hairCare", "skinCare", "makeup"];
const pCategory = document.getElementById("pCategory");
let opcionesElegidas = [];


opciones.forEach(opcion => {
    const nuevaOpcion = document.createElement("div");
    nuevaOpcion.innerHTML = `
     <input id="${opcion}" type="checkbox">
      <label for="${opcion}">${opcion}</label>
     `
    pCategory.appendChild(nuevaOpcion)
})
pCategory.addEventListener("input", (e) => {
    console.log(e.target.value, e.target.checked)


})
