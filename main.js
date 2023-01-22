




/* !CALCULAR PRECIO DE VENTA DE UN PRODUCTO */
function valorVenta() {
    const VALOR_AGREGADO = 1.90;
    let num = parseInt(prompt(`Ingresa el valor del producto`));
    let resultado = num * VALOR_AGREGADO;
    alert(`El valor de venta es: ` + resultado.toFixed(2));
}


/* !CALCULAR IVA DE UN PRODUCTO */
function valorIva() {
    const IVA_ARGENTINA = 0.21;
    let valorProducto = parseInt(prompt(`Ingresa el valor del producto`));
    let resultado = valorProducto * IVA_ARGENTINA;
    alert(`El IVA que abonaste por el producto es: ${resultado.toFixed(2)}`);
}

/* !CALCULADORA DE COSTO OPERATIVO */
function costoOperativo() {
    let veces = parseInt(prompt(`Cuantos servicios vas a sumar?`));
    let suma = 0;
    for (i = 0; i < veces; i++) {
        suma += parseInt(prompt(`Ingrese el servicio nro ${i + 1}`));
    }

    let seleccion = parseInt(prompt(`
    1 - Costo operativo mensual
    2 - Costo operativo diario
    3 - Volver a cargar los valores`))
    switch (seleccion) {
        case 1:
            alert(`El costo operativo mensual de tu comercio es de: ` + suma);
            break;
        case 2:
            let dias = parseInt(prompt(`¿Cuantos dias al mes mantenes comercio abierto?`));
            let resultado = suma / dias;
            alert(`El costo operativo diario es de: ${resultado.toFixed()} estando ${dias} dias abierto.`);
            break;
        case 3:
            costoOperativo();
        default:
            alert(`Igresaste una opcion invalida, volvé a intentarlo`);
    }
}






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

const provedor1 = new NuevoProvedor("ARCOR", "Juan Pablo", 1599999999, "Golosinas", 1);
const provedor2 = new NuevoProvedor("Danone", "Marina", 1599999999, "Lacteos", 2);
const provedor3 = new NuevoProvedor("Quilmes", "Raul", 1599999999, "Alcohol", 3);
const provedor4 = new NuevoProvedor("La Serenisima", "Marta", 1599999999, "Lacteos", 4);
const provedor5 = new NuevoProvedor("Lays", "Juan Cruz", 1599999999, "Snacks", 5);
const provedor6 = new NuevoProvedor("Alfajores", "María", 1599999999, "Golosinas", 6);
const provedor7 = new NuevoProvedor("Montevideana", "Diego", 1599999999, "Helados", 7);
const provedor8 = new NuevoProvedor("Cervezas", "Viviana", 1599999999, "Alcohol", 8);
const provedor9 = new NuevoProvedor("Limpiando", "Pedro", 1599999999, "Limpieza", 9);
const provedor10 = new NuevoProvedor("Celulares CABA", "Facundo", 1599999999, "Electronica", 10);

/* ARRAY MASTER */
const LISTA = [provedor1, provedor2, provedor3, provedor4, provedor5, provedor6, provedor7, provedor8, provedor9, provedor10];

// Funcion para mostrar lista de provedores
function verProvedores(array) {
    console.log("LISTA DE PROVEDORES:");
    array.forEach((provedor) => {
        console.log(provedor.mostrarinfo());
    });
}


// Funcion para cargar un provedor
function cargarProvedor(array) {
    let empresa = prompt("Empresa:");
    let nombre = prompt("Nombre:");
    let contacto = parseInt(prompt("Numero de contacto:"));
    let rubro = prompt("Rubro:");
    const provedor = new NuevoProvedor(empresa, nombre, contacto, rubro, array.length + 1);
    array.push(provedor);
}


// Funcion para eliminar un provedor de la lista
function eliminarProvedor(array) {
    console.log("Ingresá el ID del provedor a eliminar");
    array.forEach(provedor => { console.log(provedor.mostrarInfoCorta()) });
    let eliminarId = parseInt(prompt("ID: "))
    let arrayWithId = array.map((Provedor) => Provedor.id)
    let idSeleccionado = arrayWithId.indexOf(eliminarId);
    if (arrayWithId.includes(eliminarId)) {
        array.splice(idSeleccionado, 1);
        alert(`Se ha eliminado satisfactoriamente.`);
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
    let empresaABuscar = prompt("¿Que empresa queres buscar?");
    let empresaEncontrada = array.find((nombre) => nombre.empresa.toLowerCase() == empresaABuscar.toLowerCase())
    if (empresaEncontrada == undefined) {
        alert(`La empresa ${empresaABuscar} no existe en la lista`)
    }
    else { console.log(empresaEncontrada.mostrarinfo()) }

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

