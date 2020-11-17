import { mediator } from "./TaksMediator";

const addButton = document.querySelector(".add-project");
addButton.addEventListener("click", handleAddProject);

function handleAddProject() {
  mediator.emit("newProject");
}

export default console.log("ProjectsUI loaded!");
