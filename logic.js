const tarea = document.querySelector("#tarea");
const descripcionTarea = document.querySelector("#descripcion");
const entregaFecha = document.querySelector("#entregaFecha");
const botonesPrioridad = document.querySelectorAll(".prioridadBoton");
const enviar = document.querySelector("#enviarFormulario");
const listaTarjetas = document.querySelector("#listaTarjetas");
const CLAVE_TAREAS = "TareasGuardaras"
const CLAVE_DESCRIPCION = "TareaDescripcion"
const CLAVE_FECHA = "TareaFecha"
let TAREAS = []
let DESCRIPCION = []
let FECHA = []

function guardar(clave,valor){
  localStorage.setItem(clave,(valor))
}

function leer(clave,valor){
  const datos = localStorage.getItem(clave,JSON.stringify())
  if(texto==null){
    return valor
  }
    return valor
}

function ListaTareas(titulo,descripcion,fecha){
  this.titulo = titulo
  this.descripcion = descripcion
  this.fecha = fecha
}

let prioridadSeleccionada = "";

botonesPrioridad.forEach(boton => {
  boton.addEventListener("click", () => {
    prioridadSeleccionada = boton.textContent.trim();
  });
});

enviar.addEventListener("click", () => {
  const nombre = tarea.value.trim();
  const descripcion = descripcionTarea.value.trim();
  const fecha = entregaFecha.value;

  if (!nombre) {
    alert("Escribe el nombre de la tarea.");
    return;
  }

  const tarjeta = document.createElement("div");
  tarjeta.className = "card mb-3";

  const encabezado = document.createElement("div");
  encabezado.className = "card-header";
  encabezado.textContent = prioridadSeleccionada || "Sin prioridad";

  const cuerpo = document.createElement("div");
  cuerpo.className = "card-body";

  const titulo = document.createElement("h4");
  titulo.className = "card-title";
  titulo.textContent = nombre;

  const textoDescripcion = document.createElement("p");
  textoDescripcion.className = "card-text";
  textoDescripcion.textContent = descripcion;

  const textoFecha = document.createElement("p");
  textoFecha.className = "card-text";
  textoFecha.textContent = fecha ? `Fecha de entrega: ${fecha}` : "";

  cuerpo.append(titulo, textoDescripcion, textoFecha);
  tarjeta.append(encabezado, cuerpo);
  listaTarjetas.append(tarjeta);

  tarea.value = "";
  descripcionTarea.value = "";
  entregaFecha.value = "";
  

  guardar(CLAVE_TAREAS,TAREAS)
  guardar(CLAVE_DESCRIPCION,DESCRIPCION)
  guardar(CLAVE_FECHA,FECHA)

});




if(CLAVE_DESCRIPCION && CLAVE_FECHA && CLAVE_TAREAS != null){
  const nombre = tarea.value.trim();
  const descripcion = descripcionTarea.value.trim();
  const fecha = entregaFecha.value;
  const tarjeta = document.createElement("div");
  tarjeta.className = "card mb-3";

  const encabezado = document.createElement("div");
  encabezado.className = "card-header";
  encabezado.textContent = prioridadSeleccionada || "Sin prioridad";

  const cuerpo = document.createElement("div");
  cuerpo.className = "card-body";

  const titulo = document.createElement("h4");
  titulo.className = "card-title";
  titulo.textContent = TAREAS;

  const textoDescripcion = document.createElement("p");
  textoDescripcion.className = "card-text";
  textoDescripcion.textContent = DESCRIPCION;

  const textoFecha = document.createElement("p");
  textoFecha.className = "card-text";
  textoFecha.textContent = FECHA ? `Fecha de entrega: ${FECHA}` : "";

  cuerpo.append(titulo, textoDescripcion, textoFecha);
  tarjeta.append(encabezado, cuerpo);
  listaTarjetas.append(tarjeta);

  tarea.value = "";
  descripcionTarea.value = "";
  entregaFecha.value = "";
};
