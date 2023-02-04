class Nota{
    constructor(titulo, nota){
        this.titulo = titulo,
        this.nota = nota
    }
}

const Nota1 = new Nota("Recordatorio","El lunes por la mañana viene el plomero a ver el tema de la perdida de agua.")
const Nota2 = new Nota("Recordatorio","El jueves es el cumple de maccu!")


const listaNotas = []

listaNotas.push(Nota1,Nota2)


console.log(listaNotas)
console.log(Nota1)


function createBoard(array){
    let gridBoard = document.getElementById("notesGrid");
    for (let el of array){
        let newNota = document.createElement("div")
        newNota.classList = "notesDisplay"
        newNota.innerHTML = `
        <h3>
        ${el.titulo}</h3>
        <p>${el.nota}</p>
        `
        gridBoard.appendChild(newNota)
    }
}

createBoard(listaNotas)