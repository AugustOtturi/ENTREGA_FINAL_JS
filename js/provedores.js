




// INVENTARIO

//Constructor
class NuevoProvedor {
    constructor(empresa, persona, contacto, rubro, id) {
        this.empresa = empresa,
            this.persona = persona,
            this.contacto = contacto,
            this.rubro = rubro,
            this.id = id
    }
    /* Metodo para imprimir toda la informacion */
    mostrarinfo() {
        return `
         Id: ${this.id}
         Empresa: ${this.empresa} 
         Persona: ${this.persona} 
         Contacto: ${this.contacto}
         Rubro: ${this.rubro};`
    }
    /* Metodo para imprimir corta informacion */
    mostrarInfoCorta() {
        return `
         Id: ${this.id}
         Empresa: ${this.empresa} `
    }
}


/* PRODCUTOS PRE-CARGADOS */

const provedor1 = new NuevoProvedor("Arcor", "Juan Pablo", 1599999999, "Golosinas", 1);
const provedor2 = new NuevoProvedor("Frigor", "Marina", 1599999999, "Helados", 2);
const provedor3 = new NuevoProvedor("Quilmes", "Raul", 1599999999, "Alcohol", 3);
const provedor4 = new NuevoProvedor("Aralex", "Marta", 1599999999, "Fumador", 4);
const provedor5 = new NuevoProvedor("Fali", "Juan Cruz", 1599999999, "Fumador", 5);
const provedor6 = new NuevoProvedor("La Dolce", "María", 1599999999, "Golosinas", 6);
const provedor7 = new NuevoProvedor("Montevideana", "Diego", 1599999999, "Helados", 7);
const provedor8 = new NuevoProvedor("Cervezas Juan", "Viviana", 1599999999, "Alcohol", 8);
const provedor9 = new NuevoProvedor("Limpiando", "Pedro", 1599999999, "Limpieza", 9);
const provedor10 = new NuevoProvedor("Celulares CABA", "Facundo", 1599999999, "Electronica", 10);
const provedor11 = new NuevoProvedor("Coca cola", "Seberina", 1599999999, "Bebidas", 11);
const provedor12 = new NuevoProvedor("Villavicencio", "Nayeli", 1599999999, "Bebidas", 12);

/* ARRAY MASTER */
const LISTA = [provedor1, provedor2, provedor3, provedor4, provedor5, provedor6, provedor7, provedor8, provedor9, provedor10, provedor11, provedor12];


/* INICIO LISTA */
/* verProvedores(LISTA)

 */



// Funcion para mostrar lista de provedores
function verProvedores(array) {
    let listaProvedores = document.getElementById("rowCards")
    listaProvedores.innerHTML = ``;
    for (let provedor of array) {
        let nuevoProvedor = document.createElement("div")
        nuevoProvedor.className = "card text-black mb-3 " + provedor.rubro
        let icon;


        if (provedor.rubro == "Bebidas") {
            icon = `fa-solid fa-bottle-water`;
        }
        else if (provedor.rubro == "Golosinas") {
            icon = `fa-solid fa-candy-cane`
        }
        else if (provedor.rubro == "Alcohol") {
            icon = `fa-solid fa-champagne-glasses`

        }
        else if (provedor.rubro == "Helados") {
            icon = `fa-solid fa-ice-cream`
        }
        else if (provedor.rubro == "Limpieza") {
            icon = `fa-solid fa-pump-soap`;
        }
        else if (provedor.rubro == "Electronica") {
            icon = `fa-solid fa-mobile-screen-button`
        }
        else if (provedor.rubro == "Fumador") {
            icon = `fa-solid fa-joint`
        }
        else if (provedor.resultado == "Bebidas") {
            icon = `fa-solid fa-bottle-water`
        }


        nuevoProvedor.innerHTML = `
        <div class="card-header">${provedor.rubro}</div>
        <div class="card-body">
            <h4 class="card-title">${provedor.empresa}</h4>
            <button class=" btn btn-dark">Ver info</button>
            <i class="${icon}"></i>
        `
        listaProvedores.appendChild(nuevoProvedor)
    }

}
// Funcion para cargar un provedor
function cargarProvedor(array) {
    let inputEmpresa = document.getElementById("inputEmpresa");
    let inputNombre = document.getElementById("inputNombre");
    let inputContacto = document.getElementById("inputContacto");
    let inputRubro = document.getElementById("inputRubro");

const provedor = new NuevoProvedor(inputEmpresa.value, inputNombre.value, inputContacto.value, inputRubro.value);
    array.unshift(provedor);
    verProvedores(array)
}


// Funcion para eliminar un provedor de la lista
function eliminarProvedor(array) {
    let eliminarEmpresa = (prompt("Nombre de empresa a eliminar: ").toLowerCase())
    let arrayWithEmpresa = array.map((Provedor) => Provedor.empresa.toLowerCase())
    let empresaSeleccionada = arrayWithEmpresa.indexOf(eliminarEmpresa);
    if (arrayWithEmpresa.includes(eliminarEmpresa)) {
        array.splice(empresaSeleccionada, 1);
        alert(`Se ha eliminado satisfactoriamente.`);
        verProvedores(array)
    }
    else {
        alert("No ingresaste ningun ID que concuerde con algún provedor. Volvé a intentarlo")
    }



}




// Funcion para filtrar por rubro
function filtrarPorRubro(array) {
    let rubro = prompt("Ingrese Rubro:")
    let seleccion = array.filter(
        (nombre) => nombre.rubro.toLowerCase() == rubro.toLowerCase()
    )
    if (seleccion.length == 0) {
        alert(`No hay coincidencias con el rubro: ${rubro}. Vuelva a intentarlo`)
    } else {
        verProvedores(seleccion)
    }
}


// Buscar Por empresa
function buscarEmpresa(array) {
    let arrayEncontrado = []
    let empresaABuscar = prompt("¿Que empresa queres buscar?");
    let empresaEncontrada = array.find((nombre) => nombre.empresa.toLowerCase() == empresaABuscar.toLowerCase())
    if (empresaEncontrada == undefined) {
        alert(`La empresa ${empresaABuscar} no existe en la lista`)
    }
    else {
        arrayEncontrado[0] = empresaEncontrada;
        verProvedores(arrayEncontrado)
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
    verProvedores(arrayOrdenado)
}

// Ocultar Lista
function ocultarLista() {
    let ocultar = document.getElementById("rowCards")
    ocultar.innerHTML = "";
}








//! EVENTOS


//! EL ERRORE ESTA POR ACÁ.
//! CUANDO PONGO LA FUNCION MOSTRAR LISTA SOBRE LAS OTRAS, DEJAN DE DE FUNCIONAR ESTAS ULTIMAS
//! AL REVES LO MISMO.

//! DEVUELVE UN ADDEVENTLISTENER NULL


//? VER LISTA

let verLista = document.getElementById("verLista")
verLista.onclick = () =>{
    verProvedores(LISTA)
}
