const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const {
  getController,
  postController,
} = require('../controllers/index');

// router.route('/').get(getController).post(postController);
// input swagger documentation here
/**
 * @swagger
 *
 */

router.get('/', getController);
router.post('/', postController);

module.exports = router;
