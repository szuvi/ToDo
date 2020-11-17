import { mediator } from "./TaksMediator";

mediator.subscribe("newProject", showModal);

console.log("NewProject UI loaded");

function showModal() {
  document.body.appendChild(_generateHTML());
  loadListeners();
}

function _generateHTML() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("modal-wrapper");
  const content = `
      <div class="add-project-modal">
        <label for="projectNameInput"
          >New Project's name:
          <input
            type="text"
            name="projectNameInput"
            id="projectNameInput"
            class="project-name-input"
          />
        </label>
        <div class="modal-buttons">
          <button class="confirm-modal">Add</button>
          <button class="cancel-modal">Cancel</button>
        </div>
      </div>
  `;
  wrapper.innerHTML = content;

  return wrapper;
}

function loadListeners() {
  const addButton = document.querySelector(".confirm-modal");
  const cancelButton = document.querySelector(".cancel-modal");
  addButton.addEventListener("click", handleAdd);
  cancelButton.addEventListener("click", handleCancel);
}

function handleAdd() {
  const input = document.querySelector(".project-name-input").value;
  mediator.emit("projectNameAdded", input);
  //input verification todo
  hideModal();
}

function handleCancel() {
  hideModal();
}

function hideModal() {
  const modal = document.querySelector(".modal-wrapper");
  document.body.removeChild(modal);
}
