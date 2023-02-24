//!FECHA Y HORA
setInterval(() => {
    // HORA
    const time = luxon.DateTime.now().toLocaleString(luxon.DateTime.TIME_WITH_SECONDS);
    horaDOM = document.querySelector("#hora");
    horaDOM.innerHTML = `${time}`;
    // FECHA
    const date = luxon.DateTime.now().toLocaleString(luxon.DateTime.DATE_SHORT);
    fechaDOM = document.querySelector("#fecha");
    fechaDOM.innerHTML = `${date}`;

}, 1000);



//! CONTACTOS

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





let LISTA = [];

//setear estanteria con async await
const mostrarContactos = async () => {
    //ruta relativa del html al JSON y abrirlo con LIVESERVER
    //!ACÁ ME VI OBLIGADO A PONER ../, SINO ME TOMA QUE EL CONTACTOS.JSON ESTÁ EN LA CARPETA PAGES.
    const res = await fetch("../contactos.json")
    const data = await res.json()

    for(let contacto of data){
        let contactoNuevo = new NuevoContacto(contacto.empresa, contacto.persona, contacto.contacto, contacto.rubro, contacto.id)
        LISTA.push(contactoNuevo)
        localStorage.setItem("LISTA", JSON.stringify(LISTA))
        
    }


}






/* ARRAY MASTER */
/* SETEO LOCALSTORAGE */
if (localStorage.getItem("LISTA")) {

    LISTA = JSON.parse(localStorage.getItem("LISTA"))
}
else {
    console.log("entra por primera vez, setea libros");
    
    mostrarContactos()

}



/* INICIO LISTA - SPINNER */

let spinner = document.querySelector("#spinner");
setTimeout(() => {
    spinner.remove()
    verAgenda(LISTA);
}, 1500);



//! Funcion para mostrar agenda
function verAgenda(array) {
    let listaContactos = document.getElementById("rowCards");
    listaContactos.innerHTML = ``;
    for (let element of array) {
        let nuevoContacto = document.createElement("div");
        nuevoContacto.className = `card text-black mb-3 ${element.rubro} ${element.id}`;
        let icon;
        switch (element.rubro) {
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
                return swal({
                    title: "¡Error!",
                    text: "El rubro no existe!",
                    icon: "error",
                    button: "Volver a intentar",
                });

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

//! Funcion para cargar un contacto
function cargarContacto(array) {
    let inputEmpresa = document.getElementById("inputEmpresa");
    let inputNombre = document.getElementById("inputNombre");
    let inputContacto = document.getElementById("inputContacto");
    let inputRubro = document.getElementById("inputRubro");
    let empresaDetectada = array.find((el) => el.empresa.toLowerCase() == inputEmpresa.value.toLowerCase());
    if (array.includes(empresaDetectada)) {
        swal({
            title: "¡Error!",
            text: "Ya existe una empresa con ese nombre!",
            icon: "error",
            button: "Volvé a intentarlo",
        })
    }
    else {
        const contacto = new NuevoContacto(inputEmpresa.value, inputNombre.value, inputContacto.value, inputRubro.value);
        array.push(contacto);
        localStorage.setItem("LISTA", JSON.stringify(array));
        verAgenda(array);

    }


}


//! Funcion para eliminar un contacto de la lista
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



//! Funcion para filtrar por rubro
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


//! Buscar Por empresa
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

//! Ordenar Alfabeticamente 

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
btnCargarContacto.addEventListener("click", () => {
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
btnOrdenarAlfa.addEventListener("click", () => {
    ordenarAlfaEmpresa(LISTA)
})







//TOOLTIPS
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))