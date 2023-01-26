

/* !CALCULAR PRECIO DE VENTA DE UN PRODUCTO */
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


/* /* !CALCULAR IVA DE UN PRODUCTO */
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



class Nuevocosto {
    constructor(nombre, valor){
        this.nombre = nombre,
        this.valor = valor
    }
    verInfo(){
        return `Nombre: ${this.nombre}
                Valor: ${this.valor} ` 
    }
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





//! EVENTOS

//? boton PRECIO VENTA

let botonVenta = document.getElementById("botonVenta")
botonVenta.onclick = () => {
    
    valorVenta()
}


//? boton VALOR I.V.A.

let botonIva = document.getElementById("botonIva")
botonIva.onclick = () => {
    valorIva()
}
