import './style.css';
import { Project } from './modules/class-project.js';
import { Todo } from './modules/class-todo';


// use an array to store all the projects displayed on the menu
let projectsListArr = [];

// store the container that we'll append the projects to in a let
let projectsList = document.querySelector('.projects-list');

// store the form-one in a let
let formOne = document.querySelector('.form-one');
// store the modal-one in a let
let modalOne = document.querySelector('.modal-one');

// store each input field from form-one in a let
let projectName = document.getElementById('project-name');
let projectDescription = document.getElementById('project-description');

// event listener for the '+ Add project' btn that OPENS modal one
const addProject = document.querySelector('.add-project');
addProject.addEventListener('pointerdown', () => {
    modalOne.showModal();
});

// create a fn pushes each project obj to the array
function addProjectToList(project) {
    projectsListArr.push(project);
};

// add the 'default project', so we'll see an example before interacting with the app
let projectExample = {
    name: 'Default project',
    description: 'Short description about it.',
    todoList: ['do this', 'buy that', 'call sis', 'text Matt'],
};
addProjectToList(projectExample);
renderProjects();

// create a new obj using 'class Project' & call addProjectToList()
formOne.addEventListener('submit', (e) => {
    e.preventDefault();

    let project = new Project(projectName.value, projectDescription.value, []);

    addProjectToList(project);
    console.log(project);
    console.log(projectsListArr);

    renderProjects();

    // reset the input fields & close the modal
    projectName.value = '';
    projectDescription.value = '';
    formOne.reset();
    modalOne.close();
});

function renderProjects() {
    projectsList.innerHTML = '';

    projectsListArr.forEach((project, index) => {

        // create project list elements and add them to the DOM
        let projectListItem = document.createElement('div');
        projectListItem.classList.add('project-list-item');

        let projectListItemName = document.createElement('div');
        projectListItemName.classList.add('project-list-item-name');
        projectListItemName.innerText = project.name;

        let projectListItemDelete = document.createElement('div');
        projectListItemDelete.classList.add('project-list-item-delete');
        projectListItemDelete.id = index;

        projectListItem.appendChild(projectListItemName);
        projectListItem.appendChild(projectListItemDelete);
        projectsList.appendChild(projectListItem);

        // event listener for every 'REMOVE' button in the menu
        projectListItemDelete.addEventListener('pointerdown', () => {
            projectsListArr.splice(projectListItemDelete.id, 1);
            renderProjects(); // refresh the project list
        });
    });
};

// cancel modal one & reset the form
const cancelProject = document.querySelector('.cancel-project');
cancelProject.addEventListener('pointerdown', () => {
    modalOne.close();
    formOne.reset();
});

// store the form-two in a let
let formTwo = document.querySelector('.form-two');

//store the modal-two in a let
let modalTwo = document.querySelector('.modal-two');

// event listener for the '+ Add task' btn that opens modal two
const addTask = document.querySelector('.add-task');
addTask.addEventListener('pointerdown', () => {
    modalTwo.showModal();
});

// cancel modal two & reset the form
const cancelTodo = document.querySelector('.cancel-todo');
cancelTodo.addEventListener('pointerdown', () => {
    modalTwo.close();
    formTwo.reset();
});

// each time a div Project is pressed, append the right elements to the DOM #############################################################################################################
// SOON TO BE DEVELOPED


// date picker default
const today = new Date().toISOString().split('T')[0];

// Set the default value of the date input to today's date
document.getElementById('todo-due-date').value = today;

// Set the minimum selectable date to today's date
document.getElementById('todo-due-date').min = today;