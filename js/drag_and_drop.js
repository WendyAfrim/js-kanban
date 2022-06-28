// DRAG & DROP 

const taskFill = document.querySelector('.taskfill');
const column = document.querySelectorAll('.kanban-column');

taskFill.addEventListener('dragstart', dragStart); 
taskFill.addEventListener('dragend', dragEnd); 

function dragStart(){
    this.className += 'hold'; //tenir

    setTimeout(() =>(this.className = 'invisible'),0); 
}

function dragEnd(){
    this.className = 'taskFill'
}

//on itérer a travers chaque element de column on leurs definit quelques choses
for (const empty of column){

    empty.addEventListener('dragover', dragOver); // prendre l'élément 
    empty.addEventListener('dragenter', dragEnter); // enter dans un élément 
    empty.addEventListener('dragleave', dragLeave); // leave un élément (partir) 
    empty.addEventListener('dragdrop', dragDrop); // Lache l'élément 
}
// e = enleve les actions par défaut
function dragOver(e) {
    e.preventDefault()
    console.log("over");
}

function dragEnter(e) {
    e.preventDefault()
    console.log("enter");
   // this.className += 'hovered' // fait apparaitre des traits 
}

function dragLeave(e) {
    console.log("leave");
    //this.className = 'column';
}

function dragDrop(e) {
    // this.className = 'taskfill';
    //this.append(taskFill);
    console.log("drop");

}