import { v4 as uuidv4 } from "uuid";

export class TaskAggregator {
  constructor(name, id = uuidv4()) {
    this.id = id;
    this.name = name;
    this.tasks = [];
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  setNewName(newName) {
    this.name = newName;
  }

  addTask(newTask) {
    this.tasks.push(newTask);
  }

  removeTask(id) {
    const index = this.tasks.findIndex((task) => task.id == id);
    this.tasks.splice(index, 0);
  }

  editTask(id, callback) {
    const currTask = this.tasks.find((task) => task.id == id);
    callback(currTask);
  }

  getAllTasks() {
    // this could be more secure...
    return this.tasks;
  }

  clear() {
    this.tasks = [];
  }

  sortByName() {
    this.tasks.sort((task1, task2) => {
      const name1 = task1.title.toUpperCase();
      const name2 = task2.title.toUpperCase();
      if (name1 < name2) return -1;
      else if (name1 > name2) return 1;
      else return 0;
    });
  }

  sortByPriority() {
    this.tasks.sort((task1, task2) => task2.priority - task1.priority);
  }
}
