import projects from './projects';
import tasks from './tasks';

const dom = (() => {
  const taskModal = document.querySelector('#task-modal-bg');
  const projectModal = document.querySelector('#project-modal-bg');
  const selectProj = document.querySelector('#select-project');
  const projContainer = document.querySelector('#project-container');
  const taskContainer = document.querySelector('#task-container');
  const body = document.querySelector('body');

  function openTaskModal() {
    taskModal.style.display = 'block';
  }

  function hideTaskModal() {
    taskModal.style.display = 'none';
  }

  function openProjectModal() {
    projectModal.style.display = 'block';
  }

  function hideProjectModal() {
    projectModal.style.display = 'none';
  }

  function clearProjForm() {
    const projTitle = document.querySelector('#project-title-input');
    projTitle.value = '';
  }

  function clearTaskForm() {
    const taskTitle = document.querySelector('#task-title');
    const taskProject = document.querySelector('#select-project');
    const taskDueDate = document.querySelector('#due-date');
    const taskPriority = document.querySelector('#priority');
    const taskDescription = document.querySelector('#description');

    taskTitle.value = '';
    taskProject.value = 'None';
    taskDueDate.value = '';
    taskPriority.value = 'Low';
    taskDescription.value = '';
  }

  function showTasks() {
    taskContainer.innerHTML = `
    	<h3 id="all-tasks">All Tasks</h3>
    `;
    tasks.allTasks.forEach((task) => {
      const taskDiv = document.createElement('div');
      taskDiv.id = 'task-list-item';
      taskDiv.innerHTML = `
      <p>${task.title}</p> 
      <p class="task-display">Project: ${task.project}</p>   
      <p class="task-display">${task.dueDate}</p>
      <p class="task-display">${task.priority}</p>
      <i class="fas fa-trash delete-task" data-task-num=${tasks.allTasks.indexOf(
        task
      )} data-project-num=${projects.projectList}></i>
      `;
      taskContainer.appendChild(taskDiv);
    });
  }

  function renderProjOptions() {
    selectProj.innerHTML = `
      <option value="">Choose Project</option>
      <option value="none">None</option>
    `;
    projects.projectList.forEach((proj) => {
      const op = document.createElement('option');
      op.id = 'project-dropdown';
      op.textContent = proj.title;
      selectProj.appendChild(op);
    });
  }

  function deleteProject(e) {
    projects.projectList.splice(e.target.dataset.indexNumber, 1);
  }

  function deleteTask(e) {
    tasks.allTasks.splice(e.target.dataset.taskNum, 1);

    projects.projectList.forEach((proj) => {
      console.log(proj);
    });
  }

  function showProjects() {
    projContainer.innerHTML = `
      <h3 id="project-display">Projects</h3>
    `;
    projects.projectList.forEach((project) => {
      const li = document.createElement('li');
      li.id = 'project-list-item';
      li.innerHTML = `
      ${project.title}
      <i class="fas fa-trash delete-project" data-index-number=${projects.projectList.indexOf(
        project
      )}></i>
      `;
      projContainer.appendChild(li);
    });
  }

  return {
    body,
    deleteTask,
    deleteProject,
    openTaskModal,
    openProjectModal,
    hideProjectModal,
    hideTaskModal,
    clearProjForm,
    clearTaskForm,
    renderProjOptions,
    showProjects,
    showTasks
  };
})();

export default dom;
