import { db } from '../config';

const list = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM tasks';
    db.query(query, (error, tasks) => {
      if (error) reject(error);
      resolve(tasks);
    });
  });
}

const getById = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM tasks WHERE task_id=?';
    db.query(query, [id], (error, task) => {
      if (error) reject(error);
      resolve(task);
    });
  });
}

export const utaskService = {
  list,
  getById
}
