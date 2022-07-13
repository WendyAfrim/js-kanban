import Api from "./kanban.js";

export let tasks = () => {
    let self = {};

    self.init = () => {
        self.targetBtnAddTasks();

        let taskLink = document.getElementById('task_link');
        taskLink.addEventListener('click', self.syncWithTaskList);
    }

    self.syncWithTaskList = () => {
        let toDoList = document.querySelector('.to_plan').children;
        let itemsList = document.querySelector('.items-list');
        itemsList.innerHTML = '';
        for (let i = 0; i < toDoList.length; i++){
            let element = document.createElement('li');
            element.innerHTML = toDoList[i].innerText;    
            itemsList.appendChild(element);
        }
    }

    self.targetBtnAddTasks = () => {
        document.querySelectorAll('.add-task').forEach((btnAddTask) => {
            btnAddTask.addEventListener('click', (event) => {
                let column = event.target.dataset.column;
                let items = btnAddTask.closest('.kanban-items');

                let task = items.querySelector('input').value;

                self.addTaskToSession(column, task);
            })
        })
    }

    self.addTaskToSession = (column, task) => {
        Api.insertTicket(column, task);
        self.injectTaskInRightColumn(column, task);
    }

    self.injectTaskInRightColumn = (column, task) => {
        let targetColumn = '.' + column;
        let domColumn = document.querySelector(targetColumn);

        let element = document.createElement('div');
        element.classList.add('drag');
        element.classList.add('draggable');
        element.setAttribute('draggable', 'true');

        /*element.addEventListener('click', (event) => {
            navigator.clipboard.writeText(task).then(() => {
                console.log('Copied to clipboard');
            }).catch(err => {
                console.error('Failed to copy!', err);
            });
        });*/

        element.innerHTML = task+ '<a href="/task/edit" value="'+task+'" class="editTask"> Edit </a>';

        domColumn.appendChild(element);
    }

    return self;
}