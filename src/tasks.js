import todoFactory from './todoFactory';
import projects from './projects';

const tasks = (() => {
  const taskTitle = document.querySelector('#task-title');
  const projectSelection = document.querySelector('#select-project');
  const priority = document.querySelector('#priority');
  const dueDate = document.querySelector('#due-date');
  const taskDescription = document.querySelector('#description');

  let allTasks = [];

  function addTask() {
    if (
      taskTitle.value == '' ||
      projectSelection.value == '' ||
      priority.value == '' ||
      dueDate.value == ''
    ) {
      alert('Please fill all inputs.');
    }
    else {
      let newTask = todoFactory(
        taskTitle.value,
        projectSelection.value,
        priority.value,
        dueDate.value,
        taskDescription.value
      );

      allTasks.push(newTask);
      console.log(allTasks);
      projects.projectList.forEach((proj) => {
        const projectSelect = document.querySelector('#select-project');
        if (projectSelect.value === proj.title) {
          proj.tasks.push(newTask);
        }
      });
    }
  }

  function orderTasks() {
    projects.projectList.forEach((proj) => {
      proj.tasks = proj.tasks.filter((task) => allTasks.includes(task));
    });
  }

  return {
    allTasks,
    addTask,
    orderTasks
  };
})();

export default tasks;
