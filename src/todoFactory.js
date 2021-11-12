// Factory function to make todos
const todoFactory = (title, project, priority, dueDate) => {
  return {
    title,
    project,
    priority,
    dueDate
  };
};

export default todoFactory;
