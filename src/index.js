import './style.css';
import { Project } from './modules/class-project.js';
import { Todo } from './modules/class-todo.js';

// use an array to store all the projects displayed on the menu
let projectsListArr = [];

// store the container that we'll append the projects to
let projectsList = document.querySelector('.projects-list');

// this variable keeps track of the currently selected project
let selectedProject = null;

// store the form-one & modal-one
let formOne = document.querySelector('.form-one');
let modalOne = document.querySelector('.modal-one');

// store each input field from form-one
let projectName = document.getElementById('project-name');
let projectDescription = document.getElementById('project-description');

// store the container that will display todos of the selected project
let selectedProjectTodos = document.querySelector('.selected-project-todos');

// event listener for the '+ Add project' btn that OPENS modal one
const addProject = document.querySelector('.add-project');
addProject.addEventListener('pointerdown', () => {
    modalOne.showModal();
});

// create a fn pushes each project obj to the array
function addProjectToList(project) {
    projectsListArr.push(project);
};

// add a 'default project'
let projectExample = {
    name: 'Default project',
    description: 'Short description about it.',
    todoList: [
        new Todo('do this', '2023-11-03'),
        new Todo('buy that', '2023-11-04'),
        new Todo('call sis', '2023-11-05'),
        new Todo('text Matt', '2023-11-05'),
    ],
};

// set our default project as SELECTED, to see an example before interacting with the project
selectedProject = projectExample;

addProjectToList(projectExample);

// create a new obj using 'class Project' & call addProjectToList()
formOne.addEventListener('submit', (e) => {
    e.preventDefault();

    let project = new Project(projectName.value, projectDescription.value, []);

    addProjectToList(project);

    // the newly added project is now the selected project
    selectedProject = project;

    console.log(project);
    console.log(projectsListArr);


    // reset the input fields & close the modal
    projectName.value = '';
    projectDescription.value = '';
    formOne.reset();
    modalOne.close();

    // update the display in both sections (projects menu & content)
    renderProjects();
    renderContent();
});

function renderProjects() {
    projectsList.innerHTML = '';

    projectsListArr.forEach((project, index) => {

        // create PROJECT LIST elements and add them to the DOM
        let projectListItem = document.createElement('div');
        projectListItem.classList.add('project-list-item');

        let projectListItemName = document.createElement('div');
        projectListItemName.classList.add('project-list-item-name');
        projectListItemName.innerText = project.name;
        projectListItemName.classList.add(index);

        // event listener that locates the selected project
        projectListItemName.addEventListener('pointerdown', () => {
            selectedProject = projectsListArr[index];
            renderContent();
        });

        let projectListItemDelete = document.createElement('div');
        projectListItemDelete.classList.add('project-list-item-delete');
        projectListItemDelete.id = index;

        projectListItem.appendChild(projectListItemName);
        projectListItem.appendChild(projectListItemDelete);
        projectsList.appendChild(projectListItem);

        // event listener for every 'REMOVE' button in the menu
        projectListItemDelete.addEventListener('pointerdown', () => {
            projectsListArr.splice(projectListItemDelete.id, 1);
            
            // call fn to refresh the project list
            renderProjects(); 
        });
    });
};

// cancel modal one & reset the form
const cancelProject = document.querySelector('.cancel-project');
cancelProject.addEventListener('pointerdown', () => {
    modalOne.close();
    formOne.reset();
});

// store the form-two & modal-two
let formTwo = document.querySelector('.form-two');
let modalTwo = document.querySelector('.modal-two');

// store each input field from form-one
let todoNameInput = document.getElementById('todo-name');
let todoDueDateInput = document.getElementById('todo-due-date');

// event listener for the '+ Add task' btn that opens modal two
const addTask = document.querySelector('.add-task');
addTask.addEventListener('pointerdown', () => {
    modalTwo.showModal();

    // add a default date picker for the 2nd input
    const today = new Date().toISOString().split('T')[0];

    // set the default value of the date input to today's date
    document.getElementById('todo-due-date').value = today;

    // set the minimum selectable date to today's date
    document.getElementById('todo-due-date').min = today;
});

formTwo.addEventListener('submit', (e) => {
    e.preventDefault();

    if (selectedProject) {
        let todo = new Todo(todoNameInput.value, todoDueDateInput.value);
        selectedProject.todoList.push(todo);
        renderContent();
    }

    // reset the input fields & close the modal
    todoNameInput.value = '';
    todoDueDateInput.value = '';
    formTwo.reset();
    modalTwo.close();
});

// cancel modal two & reset the form
const cancelTodo = document.querySelector('.cancel-todo');
cancelTodo.addEventListener('pointerdown', () => {
    formTwo.reset();
    modalTwo.close();
});

// each time a div Project is selected, append the right elements to the DOM in the content section
function renderContent() {
    // clear the existing todos
    selectedProjectTodos.innerHTML = '';

    if (selectedProject) {
        selectedProject.todoList.forEach((todo, index) => {
        
        // create TODO elements and add them to the DOM 
        let todoContainer = document.createElement('div');
        todoContainer.classList.add('todo-container');

        let todoCheckbox = document.createElement('div');
        todoCheckbox.classList.add('todo-checkbox');
        todoCheckbox.addEventListener('pointerdown', () => {
            todoCheckbox.classList.toggle('checked');
        });

        let todoName = document.createElement('div');
        todoName.classList.add('todo-name');
        todoName.innerText = todo.name;

        let todoDueDate = document.createElement('div');
        todoDueDate.classList.add('todo-due-date');
        todoDueDate.innerText = todo.dueDate;

        let todoEditIcon = document.createElement('div');
        todoEditIcon.classList.add('todo-edit-icon');

        let todoDeleteIcon = document.createElement('div');
        todoDeleteIcon.classList.add('todo-delete-icon');
        todoDeleteIcon.id = index;
        todoDeleteIcon.addEventListener('pointerdown', () => {
            if (selectedProject) {
                selectedProject.todoList.splice(todoDeleteIcon.id, 1);

                //refresh the todos list inside selected project
                renderContent();
            }
        });

        todoContainer.append(todoCheckbox, todoName, todoDueDate, todoEditIcon, todoDeleteIcon);
        selectedProjectTodos.appendChild(todoContainer);
        });
    };

    // display the project's name & description when selected
    let selectedProjectName = document.querySelector('.selected-project-name');
    let selectedProjectDescription = document.querySelector('.selected-project-description');
    selectedProjectName.innerText = selectedProject.name;
    selectedProjectDescription.innerText = selectedProject.description;
};
renderProjects();
renderContent();