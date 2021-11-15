import projectFactory from './projectfactory';

const projects = (() => {
  let projectList = [];

  const projName = document.querySelector('#project-title-input');

  function addProject() {
    let newProj = projectFactory(projName.value);
    projectList.push(newProj);
    console.log(projectList);
  }

  return {
    projectList,
    addProject
  };
})();

export default projects;
