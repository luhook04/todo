import dom from './dom';
import projects from './projects';
import tasks from './tasks';

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
        tasks.addTask();
        dom.showTasks();
        dom.hideTaskModal();
        dom.clearTaskForm();
      }
      else if (e.target.id === 'project-submit') {
        projects.addProject();
        dom.showProjects();
        dom.renderProjOptions();
        dom.hideProjectModal();
        dom.clearProjForm();
      }
      else if (e.target.className === 'fas fa-trash delete-project') {
        dom.deleteProject(e);
        dom.showProjects();
      }
    });
  }

  return { clickHandlers };
})();

export default handlers;
