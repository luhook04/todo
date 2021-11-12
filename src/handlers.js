import dom from './dom';

const handlers = (() => {
  function clickHandlers() {
    dom.body.addEventListener('click', (e) => {
      if (e.target.id === 'task-btn') {
        dom.openTaskModal();
      }
      else if (e.target.id === 'project-btn') {
        dom.openProjectModal();
      }
      else if (e.target.className === 'close-button') {
        dom.hideProjectModal();
        dom.hideTaskModal();
      }
    });
  }

  return { clickHandlers };
})();

export default handlers;
