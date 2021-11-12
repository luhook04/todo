const dom = (() => {
  const taskModal = document.querySelector('#task-modal-bg');
  const projectModal = document.querySelector('#project-modal-bg');
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

  return {
    body,
    openTaskModal,
    openProjectModal,
    hideProjectModal,
    hideTaskModal
  };
})();

export default dom;
