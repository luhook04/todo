import projectFactory from './projectfactory';

const projects = (() => {
  let projectList = [];

  const projName = document.querySelector('#project-title-input');

  function addProject() {
    let newProj = projectFactory(projName.value);
    projectList.push(newProj);
    console.log(projectList);
  }

  function deleteProject() {
    let index = projectList.indexOf();
    projectList.splice(index, 1);
  }
  return {
    projectList,
    deleteProject,
    addProject
  };
})();

export default projects;
