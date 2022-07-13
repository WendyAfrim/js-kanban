import Api from "./kanban.js";

export let tasks = () => {
    let self = {};
    let counter = 0;

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
                counter++;
                let column = event.target.dataset.column;
                let items = btnAddTask.closest('.kanban-items');

                let task = items.querySelector('input').value;

                self.addTaskToSession(column, task);
                self.injectTaskInRightColumn(column, task, counter)
            })
        })
    }

    self.addTaskToSession = (column, task, ) => {
        Api.insertTicket(column, task);
    }

    self.injectTaskInRightColumn = (column, task, counter) => {
        let targetColumn = '.' + column;
        let domColumn = document.querySelector(targetColumn);

        let element = document.createElement('div');
        element.setAttribute('id', 'draggable'+ counter);
        element.classList.add('drag');
        element.classList.add('draggable');
        element.setAttribute('draggable', 'true');
        element.setAttribute('ondragstart', 'onDragStart(event);');

        element.addEventListener('click', (event) => {
            let txt = event.target.innerText;
            navigator.clipboard.writeText(txt).then(() => {
                console.log('Copied to clipboard');
            }).catch(err => {
                console.error('Failed to copy!', err);
            });
        });

        element.innerHTML = task;

        domColumn.appendChild(element);
    }

    return self;
}