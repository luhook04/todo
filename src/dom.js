import projects from './projects';
import tasks from './tasks';

const dom = (() => {
  const taskModal = document.querySelector('#task-modal-bg');
  const container = document.querySelector('#project-tasks-container');
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
      if (task.project == '') {
        return;
      }
      else {
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
      }
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
    projects.projectNames.splice(e.target.dataset.indexNumber, 1);
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

  function clearProjTasks() {
    container.innerHTML = '';
  }

  function showProjectTasks(e) {
    projects.projectList.forEach((project) => {
      if (project.title === e.target.textContent.trim()) {
        container.innerHTML = `
        <h3 id="project-tasks-title">${project.title}</h3>
        `;
        project.tasks.forEach((task) => {
          let projTasksDiv = document.createElement('div');
          projTasksDiv.innerHTML = `
          <p>${task.title}</p>  
          <p class="task-display">${task.dueDate}</p>
          <p class="task-display">${task.priority}</p>
        
            `;
          container.appendChild(projTasksDiv);
        });
      }
    });
  }

  function projTaskDisplayCheck() {
    const projTaskTitle = document.querySelector('#project-tasks-title');
    projects.projectList.forEach((project) => {
      if (project.title === projTaskTitle.textContent) {
        if (
          project.tasks.length === 0 ||
          projects.projectNames.indexOf(project.title) === -1
        ) {
          container.innerHTML = `
            
            `;
        }
        else if (project.tasks.length > 0) {
          console.log(project.tasks);
          container.innerHTML = `
            <h3 id="project-tasks-title">${project.title}</h3>
            `;
          project.tasks.forEach((task) => {
            let projTasksDiv = document.createElement('div');
            projTasksDiv.className = 'proj-tasks';
            projTasksDiv.innerHTML = `
              <p>${task.title}</p>  
              <p class="task-display">${task.dueDate}</p>
              <p class="task-display">${task.priority}</p>
              
              `;
            container.appendChild(projTasksDiv);
          });
        }
      }
    });
    if (projTaskTitle !== null) {
      if (
        projects.projectNames.indexOf(projTaskTitle.textContent) === -1
      ) {
        container.innerHTML = '';
      }
    }
  }

  return {
    body,
    deleteTask,
    clearProjTasks,
    showProjectTasks,
    projTaskDisplayCheck,
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
