import projectFactory from './projectfactory';
import tasks from './tasks';

const projects = (() => {
  let projectList = [];
  let projectNames = [];
  let helper;
  const projName = document.querySelector('#project-title-input');

  function addProject() {
    if (projName.value == '') {
      alert('Please fill the input.');
    }
    else {
      let newProj = projectFactory(projName.value);
      projectList.push(newProj);
      projectNames.push(projName.value);
      console.log(projectList);
    }
  }

  function removeTasksWithProj(e) {
    if (tasks.allTasks.length > 0) {
      tasks.allTasks.forEach((task) => {
        if (task.project == e.target.parentNode.textContent.trim()) {
          task.project = '';
          helper = tasks.allTasks.filter((task) => task.project !== '');
          console.log(helper);
        }
      });
    }
  }

  return {
    helper,
    projectNames,
    projectList,
    addProject,
    removeTasksWithProj
  };
})();

export default projects;
