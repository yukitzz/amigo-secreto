//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let array = [];
function adicionarAmigo(){
    array= document.getElementById("amigo");
    let nome= amigo.value;
    document.getElementById("listaAmigos");
    let listaAmigos= document.getElementById("listaAmigos");
    let novoNome= document.createElement("li");

    novoNome.textContent=nome;

    listaAmigos.appendChild(novoNome);

    array.value="";
}