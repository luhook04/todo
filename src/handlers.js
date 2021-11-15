import dom from './dom';
import projects from './projects';

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
      else if (e.target.id === 'task-submit') {
        dom.hideTaskModal();
      }
      else if (e.target.id === 'project-submit') {
        projects.addProject();
        dom.renderProjOptions();
        dom.hideProjectModal();
        dom.clearProjForm();
      }
    });
  }

  return { clickHandlers };
})();

export default handlers;
