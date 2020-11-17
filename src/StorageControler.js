import { TaskAggregator } from "./TaskAggregator";
import { Task } from "./Task";
import { projectsAggregator } from "./ProjectsAggregator";

export const storageControler = (function () {
  function saveAllProjects() {
    projectsAggregator.getProjects().forEach((project) => _saveProject(project));
  }

  function _saveProject(projects) {
    const id = project.getId();
    const value = JSON.stringify(project);
    localStorage.setItem(id, value);
  }

  function loadAllProjects() {
    // Loads into projects aggregator module
    for (let keyId in localStorage) {
      const rawProject = JSON.parse(localStorage.getItem(keyId));
      const currProject = new TaskAggregator(rawProject.name, rawProject.id);

      rawProject.tasks.forEach((task) => {
        currProject.addTask(
          new Task(task.id, task.title, task.due, taks.priority, task.done, task.note)
        );
      });

      projectsAggregator.addFullProject(currProject);
    }
  }

  return { loadAllProjects, saveAllProjects };
})();
