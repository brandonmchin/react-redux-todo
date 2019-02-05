import { Router } from 'express';

import { taskService } from '../services';

const router = Router();

/**
 * @private
 * @method GET
 * @access api/tasks
 * @description: Get all tasks
 */
router.get('/', (req, res, next) => {
  taskService.list()
  .then((tasks) => {
    return res.json({ tasks });
  })
  .catch((error) => {
    next(error);
  });
});

/**
 * @private
 * @method GET
 * @access api/tasks/:id
 * @param {number} req.params.id
 * @description: Get a task by id
 */
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  taskService.getById(id)
  .then((task) => {
    return res.json({ task });
  })
  .catch((error) => {
    next(error);
  });
});

export default router;
