import './style.css';
import { Project } from './modules/class-project.js';
import { Todo } from './modules/class-todo';


// use an array to store all the projects displayed on the menu
let projectsListArr = [];

let projectName = document.getElementById('project-name');
let projectDescription = document.getElementById('project-description');


// store the form-one in a let
let formOne = document.querySelector('.form-one');
// store the modal-one in a let
let modalOne = document.querySelector('.modal-one');

// event listener for the '+ Add project' btn that opens modal one
const addProject = document.querySelector('.add-project');
addProject.addEventListener('pointerdown', () => {
    modalOne.showModal();
});

// event listener for the 'Add project' btn that submits the form inside modal one
let createProjectBtn = document.querySelector('.create-project');
createProjectBtn.addEventListener('pointerdown', () => {
    console.log('createProjectBtn was pressed');
    createProject();
});

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

// this fn creates the projects 
// (it pushes each obj to the array and appends the needed elements to the DOM)
// it is called everytime the form one is submitted
function createProject() {
    let project = new Project(projectName.value, projectDescription.value, []);
    projectsListArr.push(project);

    // append elements needed to the DOM
    let projectsList = document.querySelector('.projects-list');

    let proejctListItem = document.createElement('div');
    proejctListItem.classList.add('project-list-item');

    let projectListItemName = document.createElement('div');
    projectListItemName.classList.add('project-list-item-name');
    projectListItemName.innerText = projectName.value;

    let projectListItemDelete = document.createElement('div');
    projectListItemDelete.classList.add('project-list-item-delete');

    // each time a new project is created, the 'REMOVE PROJECT btn' gets an id 
    // equal to the project's index number in the projectsListArr
    projectListItemDelete.id = projectsListArr.indexOf(project);

    proejctListItem.appendChild(projectListItemName);
    proejctListItem.appendChild(projectListItemDelete);
    projectsList.appendChild(proejctListItem);

    console.log(projectsListArr);
    console.log(project);

    modalOne.close();
    formOne.reset();

    // event listener for every 'REMOVE' btn from the menu
    // it removes an object from the array that stores all projects & calls removeParent()
    projectListItemDelete.addEventListener('pointerdown', () => {
        projectsListArr.splice(projectListItemDelete.id, 1);

        projectListItemDelete.id = 'badChild';

        removeParent();
    });
};

// this fn removes the div that displays the project's name on the menu from the DOM
function removeParent() {
    const badChild = document.getElementById('badChild');

    if (badChild) {
        const badParentElement = badChild.parentNode;
        badParentElement.remove();
    }
};

// each time a div Project is pressed, append the right elements to the DOM








// date picker default
const today = new Date().toISOString().split('T')[0];

// Set the default value of the date input to today's date
document.getElementById('todo-due-date').value = today;

// Set the minimum selectable date to today's date
document.getElementById('todo-due-date').min = today;