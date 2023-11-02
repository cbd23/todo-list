 // class Todo creates todo objects
 
 export class ToDo {
    constructor(name, dueDate, checked = false) {
        this.name = name;
        this.dueDate = dueDate;
        this.checked = checked;
    };
};