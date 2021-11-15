// Factory function to make todos
const todoFactory = (title, project, priority, dueDate, description) => {
  return {
    title,
    project,
    priority,
    dueDate,
    description
  };
};

export default todoFactory;
