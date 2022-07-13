// // DRAG & DROP
//
// function start(e){
//     e.dataTransfer.effectAllowed = 'move'; // permet de déplacer l'élément
//     e.dataTransfer.setData("text",e.target.getAttribute('class')); // récupère la classe de l'élément à déplacer
// }
//
// for (let i = 0; i < document.getElementsByClassName('drag').length; i++) { // ajouter des événements drag & drop à tous les éléments drag
//     document.getElementsByClassName('drag')[i].addEventListener('over', over, false); // ajoute un événement dragover
//     document.getElementsByClassName('drag')[i].addEventListener('drop', drop, false); // ajoute un événement drop
// }
//
// function over(e){
//     return false; // permet de ne pas déplacer l'élément
// }
//
// function drop(e){
//     window.navigator.vibrate(200); // vibrer l'appareil
//     drag=e.dataTransfer.getData("text"); // récupère la class de l'élément à déplacer
//      // ajoute l'élément à la zone de drop
//      e.target.appendChild(document.getElementsByClassName(drag)[0]); // récupère l'élément à déplacer
//     e.stopPropagation(); // brise le flux de l'événement pour empêcher les événements de déclencher d'autres fonctions
//
//     return false;
// }

// let dragAndDrop = () => {
//
//     let self = {};
//
//     self.init = () => {
//         self.onDragStart();
//     }
//
//     self.onDragStart = () => {
//
//         document.querySelectorAll('.draggable').forEach((element) => {
//             element.addEventListener('draggable', (e)=> {
//                 console.log(e);
//             });
//
//         });
//     }
//
//     return self;
// }
//
// dragAndDrop().init();

function onDragStart(event)
{
    event
        .dataTransfer
        .setData('text/plain', event.target.id);

    event
        .currentTarget
        .style
        .backgroundColor = 'beige';
}

function onDragOver(event)
{
    event.preventDefault();
}

function onDrop(event)
{
    const id = event
        .dataTransfer
        .getData('text');

    const draggableElement = document.getElementById(id);
    const dropzone = event.target;

    dropzone.appendChild(draggableElement);

    event
        .dataTransfer
        .clearData();
}