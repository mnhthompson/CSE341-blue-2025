


const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

//get
router.get('/', contactsController.getAll);
router.get('/:id', contactsController.getSingle);


module.exports = router;