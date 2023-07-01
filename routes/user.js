const express = require('express');
const router = express.Router();
const {getAllNote,createNote,updateNote,deleteNote,singleNote} = require('../controller/user')

router.route('/').get(getAllNote)
router.route('/').post(createNote)
router.route('/').put(updateNote)
router.route('/').delete(deleteNote)

router.route('/:id').get(singleNote)

module.exports = router