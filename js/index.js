//! FECHA Y HORA
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


//! TIPS
const askTip = async () => {
    const res = await fetch("tips.json")
    const data = await res.json()
    const tipAzar = data[Math.floor(Math.random() * data.length)]
    swal({
        title: `Tip numero ${tipAzar.id}`,
        text: tipAzar.tip,
        button: "Continuar",
    });

}

//! EVENTOS
let btnTip = document.querySelector("#btnTip");
btnTip.addEventListener("click", () => {
    askTip()
})