import { v4 as uuidv4 } from "uuid";

export class Task {
  constructor(id = uuidv4(), title, due, priority, done = false, note = "", ) {
    this.id = id;
    this.title = title;
    this.due = due;
    this.priority = priority;
    this.done = done;
    this.note = note;
  }

  getId() {
    return this.id;
  }

  getDone() {
    return this.done;
  }

  toggleDone() {
    this.done = !this.done;
  }

  getTitle() {
    return this.title;
  }

  setNewTitle(newTitle) {
    this.title = newTitle;
  }

  getDue() {
    return this.due;
  }

  setNewDue(newDate) {
    this.due = newDate;
  }

  getPriority() {
    return this.priority;
  }

  setNewPriority(newPrio) {
    this.priority = newPrio;
  }

  getNote() {
    return this.note;
  }

  setNewNote(newNote) {
    this.note = newNote;
  }
}
