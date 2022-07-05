// DRAG & DROP 

function start(e){
    e.dataTransfer.effectAllowed = 'move'; // permet de déplacer l'élément
    e.dataTransfer.setData("text",e.target.getAttribute('class')); // récupère la classe de l'élément à déplacer
}

for (let i = 0; i < document.getElementsByClassName('drag').length; i++) { // ajouter des événements drag & drop à tous les éléments drag
    document.getElementsByClassName('drag')[i].addEventListener('over', over, false); // ajoute un événement dragover
    document.getElementsByClassName('drag')[i].addEventListener('drop', drop, false); // ajoute un événement drop
}

function over(e){
    return false; // permet de ne pas déplacer l'élément
}

function drop(e){
    drag=e.dataTransfer.getData("text"); // récupère la class de l'élément à déplacer
     // ajoute l'élément à la zone de drop
     e.target.appendChild(document.getElementsByClassName(drag)[0]); // récupère l'élément à déplacer
    e.stopPropagation(); // brise le flux de l'événement pour empêcher les événements de déclencher d'autres fonctions

    return false; 
}
