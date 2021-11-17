import projectFactory from './projectfactory';
import tasks from './tasks';

const projects = (() => {
  let projectList = [];

  const projName = document.querySelector('#project-title-input');

  function addProject() {
    if (projName.value == '') {
      alert('Please fill the input.');
    }
    else {
      let newProj = projectFactory(projName.value);
      projectList.push(newProj);
      console.log(projectList);
    }
  }

  function removeTasksWithProj(e) {
    tasks.allTasks.forEach((task) => {
      if (task.project == e.target.parentNode.textContent.trim()) {
        task.project = '';
      }
      if (task.project === '') {
        tasks.allTasks.splice(tasks.allTasks.indexOf(task), 1);
      }
    });
  }
  return {
    projectList,
    addProject,
    removeTasksWithProj
  };
})();

export default projects;
