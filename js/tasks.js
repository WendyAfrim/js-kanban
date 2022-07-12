import Api from "./kanban.js";

export let tasks = () => {
    let self = {};

    self.init = () => {
        self.targetBtnAddTasks();
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