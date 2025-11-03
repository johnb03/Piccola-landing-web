
const columna1wrap = document.querySelector("#colum1wrap");
//
const amountPerson = document.querySelector("#cantidad");
const inputsCombos = document.querySelectorAll(".combo");
//
const calcular = document.querySelector("#btnCalcular");
//
const textareaPrecio = document.querySelector("#total-price");
const textareaDetalles = document.querySelector("#detalles");
//
const buttonWhatsaap = document.querySelector("#btnWhtsaap");
//
const tiempo_espera = 3000;
//
let comboSeleccionado = null;
let precioDecombo = null;
let totalPrecio = null;
let cantidadDePersonas = null;

const picaderas = {
  primium: {
    precio: 165,
    Producto: "En caja : kraft + , Aderezo, pastelito (queso o pollo), croqueta, mini hotdog, quipe.",
  },
  gourmet: {
    precio: 130,
    Producto: "En caja : transparente + pastelitos (queso o pollo), croqueta, quipe, mini brownie.",
  },
  regular: {
    precio: 100,
    Producto: "En caja : transparente + pastelito (queso o pollo), quipe, mini pizitas.",
  },



};


//calculo de picaderas
function calcularpicaderas() {
  let detallesDelCombo;
  const numeroDePersonas = Number(cantidadDePersonas);
  if (comboSeleccionado === "primium") {
    totalPrecio = precioDecombo * numeroDePersonas;
    detallesDelCombo = picaderas.primium.Producto;
  }

  if (comboSeleccionado === "gourmet") {
    totalPrecio = precioDecombo * numeroDePersonas;
    detallesDelCombo = picaderas.gourmet.Producto;
  }

  if (comboSeleccionado === "regular") {
    totalPrecio = precioDecombo * numeroDePersonas;
    detallesDelCombo = picaderas.regular.Producto;
  }

  textareaPrecio.textContent = `$${totalPrecio}`;
  textareaDetalles.textContent = detallesDelCombo;
}

//boton de enviar de wahtsaap

buttonWhatsaap.addEventListener("click", () => {
  let cantidadDePersonas = amountPerson.value;

  buttonWhatsaap.setAttribute("target", "_blank");
  buttonWhatsaap.href = `https://wa.me/8497015300?text=Me%20gustaria%20este%20combo%20para%20 ${cantidadDePersonas}  ${botonDeEnviar()}`;
  //tiempo de espera pararefrescar la pagina
  setTimeout(() => {
    window.location.reload();
  }, tiempo_espera);
});

function botonDeEnviar() {
  let productoSelect;
  if (comboSeleccionado == "primium") {
    return (productoSelect = picaderas.primium.Producto);
  }
  if (comboSeleccionado == "gourmet") {
    return (productoSelect = picaderas.gourmet.Producto);
  }
  if (comboSeleccionado == "regular") {
    return (productoSelect = picaderas.regular.Producto);
  }
}

//seleccion de los imputs combos


inputsCombos.forEach((inputCombo) => {
  inputCombo.addEventListener("change", () => {
    
    comboSeleccionado = inputCombo.value;
    if (comboSeleccionado == "primium") {
      precioDecombo = picaderas.primium.precio;
    }
    if (comboSeleccionado == "gourmet") {
      precioDecombo = picaderas.gourmet.precio;
    }
    if (comboSeleccionado == "regular") {
      precioDecombo = picaderas.regular.precio;
    }


  });
});

// funcion de error en la entrada
function mensajeError(elementoInput, mensaje) {
  const errorExistente = elementoInput.querySelector("span");

  const labelError = document.createElement("span");
  if (errorExistente) {
    errorExistente.remove();
  }
  labelError.classList.add("error");
  labelError.textContent = mensaje;

  elementoInput.appendChild(labelError);
}

//seleccion de cantidad de personas
amountPerson.addEventListener("input", () => {
  const valueNumber = amountPerson.value;
  if (valueNumber == !Number) {
    mensajeError(columna1wrap, "no es un numero valido");
    amountPerson.classList.add("inputError");
  }
  cantidadDePersonas = valueNumber;
});

// boton de salida para calcular
calcular.addEventListener("click", () => {
  calcularpicaderas();
});
