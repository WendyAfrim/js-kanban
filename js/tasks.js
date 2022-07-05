import Api from "./kanban.js";

export let tasks = () => {
    let self = {};

    self.init = () => {
        self.targetBtnAddTasks();
    }

    self.targetBtnAddTasks = () => {

        document.getElementById('add-task').addEventListener('click', (event) => {
            self.getInputValue();
        })
    }

    self.getInputValue = () => {
        let task = document.getElementById('task-input').value;
        self.addTaskToSession(task);
    }

    self.addTaskToSession = (task) => {
        Api.insertTicket('to_plan', task);
        self.injectTaskInToPlanColumn(task);
        self.injectTaskInItemsList(task);
    }

    self.injectTaskInToPlanColumn = (task) => {
        let kanbanItems = document.querySelector('.kanban-items');

        let element = document.createElement('div');
        element.classList.add('drag');
        element.classList.add('draggable');
        element.setAttribute('draggable', 'true');

        element.innerHTML = task;

        kanbanItems.appendChild(element);
    }

    self.injectTaskInItemsList = (task) => {

        let itemsList = document.querySelector('.items-list');

        let element = document.createElement('li');
        element.innerHTML = task;

        itemsList.appendChild(element);
    }

    return self;
}