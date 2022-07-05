// DRAG & DROP 

function start(e){
    e.dataTransfer.effectAllowed = 'move'; // permet de déplacer l'élément
    e.dataTransfer.setData("text",e.target.getAttribute('id')); //
}

function over(){
    return false; // permet de ne pas déplacer l'élément
}

function drop(e){
    drag=e.dataTransfer.getData("text"); // récupère l'id de l'élément à déplacer
    e.currentTarget.appendChild(document.getElementById(drag)); // ajoute l'élément à la zone de drop
    e.stopPropagation(); // brise le flux de l'événement 
    return false; 
}


// changer l'id en classe et faire une boucle for pour les éléments 