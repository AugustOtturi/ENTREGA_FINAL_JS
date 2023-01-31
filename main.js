class Notas{
    constructor(titulo, nota, id){
        this.titulo = titulo,
        this.nota = nota,
        this.id = id
    }
}
const nota1 = new Notas("RECORDATORIO","askodaskdapsd", 1)
const nota2 = new Notas("AVISOS","ASDASDASDSA", 1)
const ARRAYNOTES = [nota1, nota2]

createBoard()

function createBoard(){
    for(let el of ARRAYNOTES){
        let divPadre = document.getElementById("notesGrid");
        let cardNotes = document.createElement("div");
        cardNotes.className = "cardNotes";
        cardNotes.innerHTML = `<h2>${el.titulo}</h2>
        <P>${el.nota}</P>
        <span>${el.id}</span>
        `
        divPadre.appendChild(cardNotes)

    }
   

}
