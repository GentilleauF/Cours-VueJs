let leInput = document.getElementById('todo');
let leButton = document.querySelector(".btn");
let laList = document.getElementById('liste');


leButton.addEventListener("click", ajouterTask);


function ajouterTask() {
let nouvelleTache = document.createElement('li');
nouvelleTache.innerText = leInput.value;
laList.appendChild(nouvelleTache);

console.log(nouvelleTache);
}