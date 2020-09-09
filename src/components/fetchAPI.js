const postReq = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

const getTodo = () =>
  fetch('/api/fetchAllToDos').then((res) => {
    return res.json();
  });

const addTask = (task) => {
  return postReq('/api/addTask', { task });
};

const toggleTaskStatus = (taskId) => {
  return postReq('/api/toggleTaskStatus', { taskId });
};

const deleteTask = (taskId) => {
  return postReq('/api/deleteTask', { taskId });
};

const setTitle = (title) => {
  return postReq('/api/setTitle', { title });
};

const resetTodo = () => {
  return postReq('/api/resetTodo');
};

export default {
  getTodo,
  addTask,
  toggleTaskStatus,
  deleteTask,
  setTitle,
  resetTodo,
};
