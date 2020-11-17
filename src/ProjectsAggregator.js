import { TaskAggregator } from "./TaskAggregator";

export const projectsAggregator = (function () {
  const projects = [];

  function addProject(projectName) {
    projects.push(new TaskAggregator(projectName));
  }

  function addFullProject(project) {
    projects.push(project);
  }

  function deleteProject(id) {
    const index = projects.findIndex((projecs) => project.id == id);
    projects.splice(index, 0);
  }

  function getProjects() {
    return projects;
  }

  function clearProjects() {
    projects = [];
  }

  return { addProject, deleteProject, getProjects, clearProjects, addFullProject };
})();
