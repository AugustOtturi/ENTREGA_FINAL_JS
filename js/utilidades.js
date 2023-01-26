

//! CALCULAR VALOR VENTA
function valorVenta() {
    const VALOR_AGREGADO = document.getElementById("inputMargen")
    let num = document.getElementById("valorVentaInput")
    let resultado = num.value * VALOR_AGREGADO.value;
    let divPadre = document.getElementById("resultadoVenta");
    divPadre.innerHTML = ``;
    let construccion = document.createElement("div")
    construccion.innerHTML = `Precio de venta ${resultado.toFixed(2)}$`
    divPadre.append(construccion)
}


//! CALCULAR I.V.A. 
function valorIva() {
    const IVA_ARGENTINA = 0.21;
    let valorProducto = document.getElementById("valorProductoInput")
    let resultado = valorProducto.value * IVA_ARGENTINA;
    let divPadre = document.getElementById("resultadoIva")
    divPadre.innerHTML = ``;
    let construccion = document.createElement("div");
    construccion.innerHTML = `<p>I.V.A. es de ${resultado.toFixed(2)}$</p>`
    divPadre.appendChild(construccion)

}



// !CALCULAR COSTO OPERATIVO
class NuevoOperativo {
    constructor(nombre, valor) {
        this.nombre = nombre,
            this.valor = valor
    }
    verInfo() {
        return `
        Nombre: ${this.nombre}
        Valor: ${this.valor} 
                `
    }
}

const LISTA_OPERATIVO = []
let sumaTotalCostos = 0;


function crearOperativo() {
    let inputNombre = document.getElementById("inputNombre")
    let inputValor = document.getElementById("inputValor")
    let plantillaResultado = document.getElementById("resultadoTotal")
    plantillaResultado.innerHTML = ``;


    const creador = new NuevoOperativo(inputNombre.value, inputValor.value)
    LISTA_OPERATIVO.push(creador)
    inputNombre.value = "";
    inputValor.value = "";



    sumaTotalCostos += parseInt(creador.valor);


    let plantillaCosto = document.getElementById("plantillaCosto")
    let nuevoTR = document.createElement("tr")
    nuevoTR.className = "filas"
    nuevoTR.innerHTML = `<th scope="row">${LISTA_OPERATIVO.length}</th>
    <td>${creador.nombre}</td>
    <td>${creador.valor}$</td>`


    plantillaCosto.appendChild(nuevoTR)



}

function verCostoResultados() {
    swal({
        title: "Costo Operativo",
        text: `El costo operativo es de ${sumaTotalCostos.toFixed(2)}$
                El costo operativo diario aproximado es de ${(sumaTotalCostos / 30).toFixed(2)}$`,
        icon: "success",
        button: "Continuar",
    });

    let plantilla = document.getElementsByClassName("filas")

    for (let i = plantilla.length - 1; i >= 0; --i) {
        plantilla[i].remove();
    }
}





//! EVENTOS

//? Boton PRECIO VENTA

let botonVenta = document.getElementById("botonVenta")
botonVenta.onclick = () => {

    valorVenta()
}


//? Boton VALOR I.V.A.

let botonIva = document.getElementById("botonIva")
botonIva.onclick = () => {
    valorIva()
}

//? Boton crear nuevo costo

let botonCosto = document.getElementById("botonCosto")
botonCosto.addEventListener("click", () => {
    crearOperativo()
})

//? Boton ver resultado de costo operativo

let botonCostoVerResultado = document.getElementById("botonCostoVerResultado")
botonCostoVerResultado.addEventListener("click", () => { verCostoResultados() })


