// Factory to make project objects
const projectFactory = (title) => {
  title = {
    title : title,
    tasks : []
  };
  return title;
};

export default projectFactory;
