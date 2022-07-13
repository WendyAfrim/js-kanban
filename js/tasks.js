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
        let taskObject = Api.insertTicket(column, task);
        self.injectTaskInRightColumn(column, taskObject);
    }

    self.injectTaskInRightColumn = (column, taskObject) => {
        let targetColumn = '.' + column;
        let domColumn = document.querySelector(targetColumn);

        let element = document.createElement('div');
        element.classList.add('drag');
        element.classList.add('draggable');
        element.setAttribute('draggable', 'true');

        element.innerHTML = `
            <span id="${taskObject.id}">${taskObject.content}</span>
            <a href="/task/edit" data-task-id="${taskObject.id}" data-task-content="${taskObject.content}" class="editTask"> Edit </a>
            <a href="#" class="copy-task"> Copy </a>
        `;
        domColumn.appendChild(element);

        for (let i = 0; i < document.getElementsByClassName('copy-task').length; i++) {
            let copyTask = document.getElementsByClassName('copy-task')[i];

            copyTask.addEventListener('click', (event) => {
                navigator.clipboard.writeText(taskObject.content).then(() => {
                    console.log('Copied to clipboard');
                }).catch(err => {
                    console.error('Failed to copy!', err);
                });
            });
        }
    }

    return self;
}