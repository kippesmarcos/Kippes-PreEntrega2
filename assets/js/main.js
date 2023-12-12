
// Codificar la funcionalidad inicial del simulador. 

const granja = {
    cultivos: [],
    estado: "¡Bienvenido a la granja!",
    plantarCultivo: function () {
        this.cultivos.push("Cultivo");
        this.estado = "Se ha plantado un nuevo cultivo.";
        actualizarEstado();
    },
    cosecharCultivo: function () {
        if (this.cultivos.length > 0) {
            this.cultivos.pop();
            this.estado = "Se ha cosechado un cultivo.";
        } else {
            this.estado = "No hay cultivos para cosechar.";
        }
        actualizarEstado();
    }
  };
  
  function actualizarEstado() {
    const estadoElement = document.getElementById("estado");
    estadoElement.textContent = granja.estado;
  }
  
  const plantarButton = document.createElement("button");
  plantarButton.textContent = "Plantar Cultivo";
  plantarButton.addEventListener("click", granja.plantarCultivo.bind(granja));
  
  const cosecharButton = document.createElement("button");
  cosecharButton.textContent = "Cosechar Cultivo";
  cosecharButton.addEventListener("click", granja.cosecharCultivo.bind(granja));
  
  document.body.appendChild(plantarButton);
  document.body.appendChild(cosecharButton);
  
  const estadoElement = document.createElement("p");
  estadoElement.id = "estado";
  document.body.appendChild(estadoElement);
  
  actualizarEstado();
  
  
  
  // Identificar el flujo de trabajo del script en términos de captura de entradas ingresadas por el usuario, procesamiento esencial del simulador y notificación de resultados en forma de salida.
  
  let respuestas = [];
  
  
  function capturarEntradas() {
    let nombre = prompt("Ingrese su nombre:");
    let edad = parseInt(prompt("Ingrese su edad:"));
  
  
    while (isNaN(edad)) {
      edad = parseInt(prompt("Edad inválida. Ingrese su edad nuevamente:"));
    }
  
    let respuesta = prompt("Ingrese su respuesta (Opción 1, Opción 2, Opción 3):");
  
  
    while (!["Opción 1", "Opción 2", "Opción 3"].includes(respuesta)) {
      respuesta = prompt("Respuesta inválida. Ingrese su respuesta nuevamente:");
    }
  
    return { nombre, edad, respuesta };
  }
  function procesarEncuesta() {
  
    const entradaUsuario = capturarEntradas();
  
    const respuestaUsuario = {
      nombre: entradaUsuario.nombre,
      edad: entradaUsuario.edad,
      respuesta: entradaUsuario.respuesta
    };
  
    respuestas.push(respuestaUsuario);
  
    mostrarResultados();
  }
  
  function mostrarResultados() {
    console.log("Resultados de la Encuesta:");
    respuestas.forEach((respuestaUsuario) => {
      console.log(`Nombre: ${respuestaUsuario.nombre}, Edad: ${respuestaUsuario.edad}, Respuesta: ${respuestaUsuario.respuesta}`);
    });
  }
  
  for (let i = 0; i < 3; i++) {
    procesarEncuesta();
  }
  
  