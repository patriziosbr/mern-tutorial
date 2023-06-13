const express = require('express');
const router = express.Router();
const { getGoals, setGoals, updateGoals, deleteGoals } = require('../controllers/goalController');

router.route('/').get(getGoals).post(setGoals) //shortcut
router.route('/:id').put(updateGoals).delete(deleteGoals) //shortcut

// router.get('/', getGoals)
// router.post('/', setGoals)
// router.put('/:id', editGoals)
// router.delete('/:id', deleteGoals)


module.exports = router;