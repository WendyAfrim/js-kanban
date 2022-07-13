const routes = {
    '/' : {
        name: 'kanban',
        title: 'Project Kanban : Home',
    },
    '/tasks': {
        name: 'tasks',
        title: 'Project Kanban : Tasks'
    },
    '/task/edit': {
        name: 'task-edit',
        title: 'Project Kanban : Task Edit'
    },
    '/members': {
        name: 'members',
        title: 'Project Kanban : Members'
    }
}

document.addEventListener('click', (event) => {

    if (!event.target.matches('a')) {
        return;
    }

    if (event.target.matches('.editTask')) {
        document.getElementById('task-edit-input').value = event.target.getAttribute('value');
                
        document.getElementById('btn-edit-task').addEventListener('click', (event) => {
            urlRoute('/');
        });
    }

    urlRoute();
});

const urlRoute = (pathname = null) => {
    let event = window.event;
    event.preventDefault();
    if (pathname) {
        window.history.pushState({}, '', pathname);
    } else {
        window.history.pushState({}, '', event.target.href);
    }
    urlLocationHandler();
}

const urlLocationHandler = async () => {
    let pathname = window.location.pathname;
    if (pathname.length === 0) {
        pathname = '/';
    }

    const route = routes[pathname];

     document.getElementsByTagName('title')[0].innerHTML = route.title;

    if (document.getElementById(route.name)) {

        const pages = document.getElementsByClassName('page');

        for (let index = 0; index < pages.length; index++) {
             pages[index].classList.add('hide');
            
        }
         document.getElementById(route.name).classList.remove('hide');
    } 
       
    
};

window.onpopstate = urlLocationHandler;
window.route = urlRoute;

urlLocationHandler();