// CONTACTOS

//Constructor
class NuevoContacto {
    constructor(empresa, persona, contacto, rubro, id) {
        this.empresa = empresa,
            this.persona = persona,
            this.contacto = contacto,
            this.rubro = rubro,
            this.id = id
    };
    /* Metodo para imprimir toda la informacion */
    mostrarinfo() {
        return `
         Id: ${this.id}
         Empresa: ${this.empresa} 
         Persona: ${this.persona} 
         Contacto: ${this.contacto}
         Rubro: ${this.rubro};`
    };
    /* Metodo para imprimir corta informacion */
    mostrarInfoCorta() {
        return `
         Id: ${this.id}
         Empresa: ${this.empresa} `
    };
}

/* CONTACTOS PRE-CARGADOS */
const contacto1 = new NuevoContacto("Arcor", "Juan Pablo", 1599999999, "Golosinas", 1);
const contacto2 = new NuevoContacto("Frigor", "Marina", 1599999999, "Helados", 2);
const contacto3 = new NuevoContacto("Quilmes", "Raul", 1599999999, "Alcohol", 3);
const contacto4 = new NuevoContacto("Aralex", "Marta", 1599999999, "Fumador", 4);
const contacto5 = new NuevoContacto("Fali", "Juan Cruz", 1599999999, "Fumador", 5);
const contacto6 = new NuevoContacto("La Dolce", "María", 1599999999, "Golosinas", 6);
const contacto7 = new NuevoContacto("Montevideana", "Diego", 1599999999, "Helados", 7);
const contacto8 = new NuevoContacto("Cervezas Juan", "Viviana", 1599999999, "Alcohol", 8);
const contacto9 = new NuevoContacto("Limpiando", "Pedro", 1599999999, "Limpieza", 9);
const contacto10 = new NuevoContacto("Celulares CABA", "Facundo", 1599999999, "Electronica", 10);
const contacto11 = new NuevoContacto("Coca cola", "Seberina", 1599999999, "Bebidas", 11);
const contacto12 = new NuevoContacto("Villavicencio", "Nayeli", 1599999999, "Bebidas", 12);

let LISTA = [];
/* ARRAY MASTER */
/* SETEO LOCALSTORAGE */
if (localStorage.getItem("LISTA")) {
    LISTA = JSON.parse(localStorage.getItem("LISTA"))
}
else {
    LISTA.push(contacto1, contacto2, contacto3, contacto4, contacto5, contacto6, contacto7, contacto8, contacto9, contacto10, contacto11, contacto12)
    localStorage.setItem("LISTA", JSON.stringify(LISTA))
}

localStorage.setItem("LISTA", JSON.stringify(LISTA));


/* INICIO LISTA */
verAgenda(LISTA);


//Funcion para mostrar agenda
function verAgenda(array) {
    let listaContactos = document.getElementById("rowCards");
    listaContactos.innerHTML = ``;
    for (let element of array) {
        let nuevoContacto = document.createElement("div");
        nuevoContacto.className = `card text-black mb-3 ${element.rubro} ${element.id}`;
        let icon;
        switch (element.rubro){
            case "Bebidas":
                icon = `fa-solid fa-bottle-water`;
                break
            case "Golosinas":
                icon = `fa-solid fa-candy-cane`;
                break
            case "Alcohol":
                icon = `fa-solid fa-champagne-glasses`;
                break
            case "Helados":
                icon = `fa-solid fa-ice-cream`
                break
            case "Limpieza":
                icon = `fa-solid fa-pump-soap`;
                break
            case "Electronica":
                icon = `fa-solid fa-mobile-screen-button`;
                break
            case "Fumador":
                icon = `fa-solid fa-joint`;
                break
            case "Bebidas":
                icon = `fa-solid fa-bottle-water`
                break
            default:
                return console.log("Agregaste cualquier cosa")

        }


 

        nuevoContacto.innerHTML = `
        <div class="card-header">${element.rubro}</div>
        <div class="card-body">
            <h4 class="card-title">${element.empresa}</h4>
            <p>Nombre: ${element.persona}</p>
            <p>Contacto: ${element.contacto}</p>
            <i class="${icon}"></i>
        `;
        listaContactos.appendChild(nuevoContacto);
    }

}

// Funcion para cargar un contacto
function cargarContacto(array) {
    let inputEmpresa = document.getElementById("inputEmpresa");
    let inputNombre = document.getElementById("inputNombre");
    let inputContacto = document.getElementById("inputContacto");
    let inputRubro = document.getElementById("inputRubro");

    const contacto = new NuevoContacto(inputEmpresa.value, inputNombre.value, inputContacto.value, inputRubro.value);
    array.push(contacto);
    //sumarlo tambien al storage
    localStorage.setItem("LISTA", JSON.stringify(array));
    verAgenda(array);
}


// Funcion para eliminar un contacto de la lista
function eliminarContacto(array) {
    let eliminarEmpresa = document.getElementById("inputEliminarCard").value.toLowerCase();
    let arrayWithEmpresa = array.map((contacto) => contacto.empresa.toLowerCase());
    let empresaSeleccionada = arrayWithEmpresa.indexOf(eliminarEmpresa);
    if (arrayWithEmpresa.includes(eliminarEmpresa)) {
        array.splice(empresaSeleccionada, 1);
        swal({
            title: "Eliminado",
            text: "Se ha guardado el cambio",
            icon: "success",
            button: "Continuar",
          });
        localStorage.setItem("LISTA", JSON.stringify(array));
        verAgenda(array);
    }
    else {
        swal({
            title: "¡Error!",
            text: "No se ha encontrado la empresa seleccionada!",
            icon: "error",
            button: "Volver a intentar",
          });
    }



}


// Funcion para filtrar por rubro
function filtrarPorRubro(array) {
    let rubro = document.getElementById("inputBuscarRubro").value
    let seleccion = array.filter(
        (nombre) => nombre.rubro.toLowerCase() == rubro.toLowerCase()
    )
    if (seleccion.length == 0) {
        swal({
            title: "¡Error!",
            text: "No se ha encontrado el rubro indicado",
            icon: "error",
            button: "Volver a intentar",
          });
    } else {
        verAgenda(seleccion)
    }
}


// Buscar Por empresa
function buscarEmpresa(array) {
    let arrayEncontrado = []
    let empresaABuscar = document.getElementById("inputBuscarNombre").value;
    let empresaEncontrada = array.find((nombre) => nombre.empresa.toLowerCase() == empresaABuscar.toLowerCase())
    if (empresaEncontrada == undefined) {
        swal({
            title: "¡Error!",
            text: "No se ha encontrado la empresa indicada indicado",
            icon: "error",
            button: "Volver a intentar",
          });
    }
    else {
        arrayEncontrado[0] = empresaEncontrada;
        verAgenda(arrayEncontrado)
    }

}

// Ordenar Alfabeticamente 

function ordenarAlfaEmpresa(array) {
    const arrayOrdenado = [].concat(array)
    arrayOrdenado.sort((a, b) => {
        if (a.empresa > b.empresa) {
            return 1;
        }
        if (a.empresa < b.empresa) {
            return -1;
        }
        return 0;
    });
    verAgenda(arrayOrdenado)
}






//! EVENTOS

//? CARGAR CONTACTO
let btnCargarContacto = document.getElementById("btnCargarContacto")
btnCargarContacto.addEventListener("click", () =>{
    cargarContacto(LISTA)
})

//? VER AGENDA
let btnVerAgenda = document.getElementById("verAgenda")
btnVerAgenda.onclick = () => {
    verAgenda(LISTA)
}


//? BUSCAR POR NOMBRE (enter)
let inputBuscarNombre = document.getElementById("inputBuscarNombre")
inputBuscarNombre.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        buscarEmpresa(LISTA)
        inputBuscarNombre.value = "";
    }

});

//? BUSCAR POR RUBRO (enter)

let inputBuscarRubro = document.getElementById("inputBuscarRubro")
inputBuscarRubro.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        filtrarPorRubro(LISTA)
        inputBuscarRubro.value = "";
    }
});

//? ELIMINAR CONTACTO (enter)
let inputEliminarCard = document.getElementById("inputEliminarCard")
inputEliminarCard.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        eliminarContacto(LISTA)
        inputEliminarCard.value = "";
    }
});

//? ORDENAR ALFABETICAMENTE
let btnOrdenarAlfa = document.getElementById("ordenarAlfaEmpresa")
btnOrdenarAlfa.addEventListener("click", () =>{
    ordenarAlfaEmpresa(LISTA)
})