import projects from './projects';

const dom = (() => {
  const taskModal = document.querySelector('#task-modal-bg');
  const projectModal = document.querySelector('#project-modal-bg');
  const selectProj = document.querySelector('#select-project');
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

  // renderProjOption has bug that keeps rendering all projects
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

  return {
    body,
    openTaskModal,
    openProjectModal,
    hideProjectModal,
    hideTaskModal,
    clearProjForm,
    renderProjOptions
  };
})();

export default dom;
