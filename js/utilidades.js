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


//! CALCULAR VALOR VENTA
function valorVenta() {
    const VALOR_AGREGADO = document.getElementById("inputMargen");
    let num = document.getElementById("valorVentaInput");
    let resultado = num.value * VALOR_AGREGADO.value;
    let divPadre = document.getElementById("resultadoVenta");
    divPadre.innerHTML = ``;
    let construccion = document.createElement("div");
    resultado == 0 ? construccion.innerHTML = `<p style="color:red;">No ingresaste ningún valor.</p>` : construccion.innerHTML = `Precio de venta ${resultado.toFixed(2)}$`;
    divPadre.append(construccion);
    /* Reset input */
    num.value = ``;

}

//! CALCULAR I.V.A. 
function valorIva() {
    const IVA_ARGENTINA = 0.21;
    let valorProducto = document.getElementById("valorProductoInput");
    let resultado = valorProducto.value * IVA_ARGENTINA;
    let divPadre = document.getElementById("resultadoIva");
    divPadre.innerHTML = ``;
    let construccion = document.createElement("div");
    resultado == 0 ? construccion.innerHTML = `<p style="color:red;">No ingresaste ningún valor.</p>` : construccion.innerHTML = `I.V.A. ${resultado.toFixed(2)}$`;
    divPadre.appendChild(construccion);
    /* Reset input */
    valorProducto.value =``;
    

}

//! CALCULAR COSTO OPERATIVO
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
    let inputNombre = document.getElementById("inputNombre");
    let inputValor = document.getElementById("inputValor");
    let plantillaResultado = document.getElementById("resultadoTotal");
    let errorText = document.querySelector("#errorText");
    plantillaResultado.innerHTML = ``;
    if (inputValor.value == 0 || inputNombre.value === "" || inputNombre.value === "no" ) {
        errorText.innerHTML = `Te falta completar alguno de los campos`;
        errorText.setAttribute("style","color:red;")
    }
    else {
        errorText.innerHTML = ``;
        const creador = new NuevoOperativo(inputNombre.value, inputValor.value)
        LISTA_OPERATIVO.push(creador)
        let formOperativo = document.querySelector("#formOperativo");
        formOperativo.reset()
        sumaTotalCostos += parseInt(creador.valor);

        let plantillaCosto = document.getElementById("plantillaCosto")
        let nuevoTR = document.createElement("tr")
        nuevoTR.className = "filas"
        nuevoTR.innerHTML = `<th scope="row">${LISTA_OPERATIVO.length}</th>
    <td>${creador.nombre}</td>
    <td>${creador.valor}$</td>`


        plantillaCosto.appendChild(nuevoTR)

    }



}

function verCostoResultados() {
    swal({
        title: "Costo Operativo",
        text: `El costo operativo es de ${sumaTotalCostos.toFixed(2)}$
               El costo operativo diario es de ${(sumaTotalCostos / 30).toFixed(2)}$`,
        icon: "success",
        button: "Continuar",
    });
    let plantilla = document.getElementsByClassName("filas")
    for (let i = plantilla.length - 1; i >= 0; --i) {
        plantilla[i].remove();
    }
}


//! LINKS

class Links {
    constructor(nombre, link, img) {
        this.nombre = nombre,
            this.link = link,
            this.img = img
    }
}


const ARCOR = new Links("arcor", "https://www.arcor.com/ar/", "../assets/grid_img/arcor.png")
const BBC = new Links("bbc", "https://www.bbc.com/mundo", "../assets/grid_img/bbc.png")
const CALENDAR = new Links("calendar", "https://calendar.google.com/calendar/u/0/r", "../assets/grid_img/calendar.png")
const FACEBOOK = new Links("facebook", "https://facebook.com/", "../assets/grid_img/facebook.png")
const GOOGLE = new Links("google", "https://www.google.com/", "../assets/grid_img/google.png")
const INFOBAE = new Links("infobae", "https://www.infobae.com/", "../assets/grid_img/infobae.png")
const INFOKIOSCO = new Links("infokiosco", "https://infokioscos.com.ar/", "../assets/grid_img/infokiosco.png")
const LAYS = new Links("lays", "https://lays.es/", "../assets/grid_img/lays.png")
const MERCADOLIBRE = new Links("mercadolibre", "https://www.mercadolibre.com.ar", "../assets/grid_img/mercadolibre.png")
const MERCADOPAGO = new Links("mercadopago", "https://www.mercadopago.com.ar/home", "../assets/grid_img/mercadopago.png")
const STELLA = new Links("stella artois", "https://www.stellaartois.com.ar/", "../assets/grid_img/stella_artois.png")
const WHATSAPP = new Links("whatsapp", "https://web.whatsapp.com/", "../assets/grid_img/whatsapp.png")
const YOUTUBE = new Links("youtube", "https://www.youtube.com/", "../assets/grid_img/youtube.png")
const CKU = new Links("cku", "https://www.ckuweb.com/", "../assets/grid_img/cku.png")
const COCACOLA = new Links("coca cola", "https://www.coca-cola.com.ar/", "../assets/grid_img/Coca-Cola.png")
const SUBE = new Links("sube", "https://www.argentina.gob.ar/sube", "../assets/grid_img/sube.png")
const PEPSI = new Links("pepsi", "https://www.pepsi.com/", "../assets/grid_img/PEPSI.png")
const PAGINA12 = new Links("pagina12", "https://www.pagina12.com.ar/", "../assets/grid_img/pagina12.png")
const TRELLO = new Links("trello", "https://trello.com/es", "../assets/grid_img/trello.png")
const TWITTER = new Links("twitter", "https://twitter.com/?lang=es", "../assets/grid_img/twitter.png")
const AFIP = new Links("afip", "https://www.afip.gob.ar", "../assets/grid_img/afip.png")
const LANACION = new Links("lanacion", "https://www.lanacion.com.ar/", "../assets/grid_img/lanacion.png")
const GOBIERNO = new Links("gobierno", "https://buenosaires.gob.ar/inicio/", "../assets/grid_img/gobierno.png")
const LINKEDIN = new Links("linkedin", "https://www.linkedin.com", "../assets/grid_img/linkedin.png")
const RAPPI = new Links("rappi", "https://www.rappi.com.ar/", "../assets/grid_img/rappi.png")
const PEDIDOSYA = new Links("pedidosya", "https://www.pedidosya.com.ar/", "../assets/grid_img/pedidosya.png")



const LINKS = [GOOGLE, CALENDAR, FACEBOOK, WHATSAPP, YOUTUBE, TRELLO, AFIP, BBC, INFOBAE, PAGINA12, LANACION, CKU, INFOKIOSCO, GOBIERNO, LINKEDIN, MERCADOPAGO, MERCADOLIBRE, RAPPI, PEDIDOSYA, COCACOLA, PEPSI, SUBE, LAYS, ARCOR, STELLA]





for (let el of LINKS) {
    let grid = document.getElementById("gridLinks");
    let nuevoLink = document.createElement("a");
    nuevoLink.target = "_blank"
    nuevoLink.href = el.link
    nuevoLink.classList = "aLinks"
    nuevoLink.innerHTML = `<img src="${el.img}" alt="logo ${el.nombre}" class="imgLinks">`
    grid.appendChild(nuevoLink)
}




//! EVENTOS
//? click PRECIO VENTA
let botonVenta = document.getElementById("botonVenta")
botonVenta.onclick = () => {
    valorVenta()
}

//? input PRECIO VENTA (enter)
let inputBotonVenta = document.getElementById("valorVentaInput")
inputBotonVenta.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        valorVenta()
    }
});


//? click VALOR I.V.A.
let botonIva = document.getElementById("botonIva")
botonIva.onclick = () => {
    valorIva()
}
//? Input VALOR I.V.A. (enter)
let inputBotonIva = document.getElementById("valorProductoInput")
inputBotonIva.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        valorIva()
    }
});


//? click NUEVO COSTO
let botonCosto = document.getElementById("botonCosto")
botonCosto.addEventListener("click", () => {
    crearOperativo()
})

//? input NUEVO COSTO (enter)
let enterInputCosto = document.getElementById("inputValor")
enterInputCosto.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        crearOperativo()
    }
});

//? click VER RESULTADO COSTOS
let botonCostoVerResultado = document.getElementById("botonCostoVerResultado")
botonCostoVerResultado.addEventListener("click", () => { verCostoResultados() })





